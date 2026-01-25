import Link from "next/link";

export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>
        <Link href="/dashboard/analytics/monthly">
          <button className="bg-red-300 rounded-2xl px-4">monthly</button>
        </Link>
        <Link href="/dashboard/analytics/weekly">
          <button className="bg-red-600 rounded-2xl px-4">weekly</button>
        </Link>
      </div>
      {children}
    </div>
  );
}
