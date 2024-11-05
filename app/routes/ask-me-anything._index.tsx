import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Ask Me Anything" },
    { description: "A self-driven Go enthusiast hailing from Sarawak, Malaysia, bringing 4 years of hardcore experience to the table." },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <section id="projects" className="flex flex-col w-full py-20 text-atlantis-950">
        <div className="flex flex-col w-full md:max-w-7xl md:px-0 px-6 mx-auto">
          <h1 className="text-3xl md:text-5xl leading-snug font-semibold text-balance max-w-4xl">
            Ask Me <span className="underline decoration-wavy underline-offset-8 decoration-atlantis-500">Anything 💭</span>
          </h1>
          <p className="mt-4 md:text-lg max-w-3xl">
            I&apos;m bulletproof, nothing to lose (cue Titanium by Sia 🎶). Got a burning question or just curious?
            Fire away, and let&apos;s see where this conversation takes us!
          </p>
          <div className="mt-6">
            This feature is not available yet, please come back later.
          </div>
        </div>
      </section>
    </div>
  );
}