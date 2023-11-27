import { sql } from "@vercel/postgres";

export default async function Home() {
  await sql`INSERT INTO ViewsTable (views) SELECT 0 WHERE NOT EXISTS (SELECT * FROM ViewsTable)`;
  await sql`UPDATE ViewsTable SET views = views + 1`;
  const result = await sql`SELECT views from ViewsTable`;

  console.log(result);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-600 font-mono">
      <p>You are looking at my root route.</p>
    </main>
  );
}
