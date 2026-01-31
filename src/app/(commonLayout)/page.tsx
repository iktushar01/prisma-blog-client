import BlogCard from "@/components/modules/homepage/BlogCard";

import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/types";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore.getAll().map(cookie => `${cookie.name}=${cookie.value}`).join('; ');

  console.log("Cookie String:", cookieHeader);

  const res = await fetch("http://localhost:5000/api/auth/get-session", {
    headers: {
      Cookie: cookieHeader
    },
    cache: "no-store",
  });
  const session = await res.json()
  console.log(session)
  console.log("Cookie Store:", cookieStore);
  const { data } = await blogService.getBlogPosts(
    {
      isFeatured: false,
    },
    {
      cache: "no-store",
    },
  );

  return (
    <div className="grid grid-cols-3 max-w-7xl mx-auto px-4 gap-6">
      {data?.data?.map((post: BlogPost) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
