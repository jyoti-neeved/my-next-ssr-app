
export const dynamic = "force-dynamic";

export default function Home() {
  const generatedAt = new Date().toISOString();

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          AWS Amplify • Next.js
        </p>

        <h1 className="mb-6 text-4xl font-bold sm:text-6xl">
          My First SSR App
        </h1>

        <p className="mb-10 text-lg text-slate-300">
          My Next.js application is running successfully!
        </p>

        <section className="rounded-xl border border-slate-700 bg-slate-900 p-6">
          <h2 className="mb-3 text-2xl font-semibold">
            Server-Side Rendering Demo
          </h2>

          <p className="mb-4 text-slate-300">
            This timestamp is generated on the server for each request.
          </p>

          <p className="break-all text-cyan-300">
            Server time: {generatedAt}
          </p>
        </section>
      </div>
    </main>
  );
}
