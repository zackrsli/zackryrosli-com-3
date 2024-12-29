import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { drizzle } from "drizzle-orm/d1";
import { LuArrowUpRight } from "react-icons/lu";
import { questionsTable } from "~/database/schema.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Ask Me Anything" },
    { description: "A self-driven Go enthusiast hailing from Sarawak, Malaysia, bringing 4 years of hardcore experience to the table." },
  ];
};

export async function loader({ context }: LoaderFunctionArgs) {
  const db = drizzle(context.cloudflare.env.DB);
  const dbQuestions = await db.select().from(questionsTable).orderBy(questionsTable.id);

  return json({
    questions: dbQuestions.map((dbQuestion) => {
      return {
        id: dbQuestion.id,
        message: dbQuestion.message,
        createdAt: dbQuestion.createdAt,
      };
    }),
  });
}

export default function Questions() {
  const { questions } = useLoaderData<typeof loader>();

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
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              {questions.map((question) => (
                <div key={question.id} className="group relative h-max">
                  <div className="relative z-10 text-asphalt-950 w-full px-6 py-6 bg-atlantis-100 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform">
                    <p className="text-xl md:text-2xl font-medium">
                      {question.message}
                    </p>
                    <p className="text-sm">
                      {new Date(question.createdAt).toString()}
                    </p>
                    <a href={`/ask-me-anything/questions/${question.id}`} className="flex items-center text-sm mt-1">
                      <span className="mr-2">@see</span>
                      <LuArrowUpRight className="text-xl" />
                    </a>
                  </div>
                  <div className="z-[1] absolute inset-0 bg-atlantis-500 translate-x-3 translate-y-3 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}