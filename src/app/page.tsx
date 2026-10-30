const APP_NAME = "App";

const features = [
  {
    title: "Quick to load",
    description:
      "Pages are rendered on the server, so content shows up right away on any connection.",
  },
  {
    title: "Fits any screen",
    description:
      "The layout adjusts to phones, tablets, and desktops without zooming or sideways scrolling.",
  },
  {
    title: "Light or dark",
    description:
      "Colors follow your system setting, so the page is comfortable to read day or night.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background font-sans text-foreground">
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
        <span className="text-lg font-semibold tracking-tight">{APP_NAME}</span>
        <nav className="-mr-3">
          <a
            href="#features"
            className="rounded-md px-3 py-2 text-sm text-zinc-600 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 dark:text-zinc-400 dark:focus-visible:outline-teal-300"
          >
            Features
          </a>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6">
        <section className="flex flex-col items-start gap-8 py-20 sm:py-32">
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tighter sm:text-7xl">
            Welcome to {APP_NAME}.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            A simple, fast place to start. Everything you need is one click
            away, and nothing you don&apos;t is in the way.
          </p>
          <a
            href="#features"
            className="inline-flex h-12 items-center rounded-full bg-teal-800 px-6 text-base font-medium text-white transition-colors hover:bg-teal-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 dark:bg-teal-300 dark:text-teal-950 dark:hover:bg-teal-200 dark:focus-visible:outline-teal-300"
          >
            See what&apos;s included
          </a>
        </section>

        <section
          id="features"
          aria-labelledby="features-heading"
          className="scroll-mt-6 border-t border-black/10 py-16 dark:border-white/15"
        >
          <h2
            id="features-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            What&apos;s included
          </h2>
          <dl className="mt-10 grid gap-10 sm:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title}>
                <dt className="font-medium">{feature.title}</dt>
                <dd className="mt-2 leading-7 text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-5xl px-6">
        <p className="border-t border-black/10 py-8 text-sm text-zinc-500 dark:border-white/15">
          {APP_NAME}
        </p>
      </footer>
    </div>
  );
}
