export default async function AboutPage() {

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div>
      <h1>this is about</h1>
    </div>
  );
}