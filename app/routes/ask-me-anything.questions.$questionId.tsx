import { json, type LoaderFunctionArgs } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { drizzle } from "drizzle-orm/d1";
import { eq } from "drizzle-orm/expressions";
import { useRef } from "react";
import { questionsTable } from "~/database/schema.server";
import * as htmlToImage from "html-to-image";

export async function loader({ context, params }: LoaderFunctionArgs) {
  const db = drizzle(context.cloudflare.env.DB);
  const dbQuestion = await db.select().from(questionsTable).where(eq(questionsTable.id, Number(params["questionId"]))).get();

  if (!dbQuestion) {
    return null;
  }

  return json({
    id: dbQuestion.id,
    message: dbQuestion.message,
    createdAt: dbQuestion.createdAt,
  });
}

export default function Question() {
  const question = useLoaderData<typeof loader>();
  const cardRef = useRef<HTMLDivElement>(null);

  async function downloadQuestion() {
    if (!question) return;

    const image = await htmlToImage.toPng(cardRef.current!);
    const link = document.createElement("a");

    link.download = `ask_me_anything_${question.id}.png`;
    link.href = image;
    link.click();
  }

  return (
    <>
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
              {question === null ? "The question does not exist." : (
                <div>
                  <div className="p-6 border border-">
                    {question.message}
                  </div>
                  <button className="mt-4" onClick={() => downloadQuestion()}>Download</button>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
      <div className="hidden">
        <div className="p-6 max-w-[32rem] relative" ref={cardRef}>
          <div className="z-[-1] h-full w-full [background-image:url('/armel.jpg')] bg-center bg-contain absolute top-0 left-0 blur-sm"></div>
          <p className="p-6 mt-4 text-xl text-white bg-black/20">{question?.message}</p>
          <p className="text-xs mt-4 text-white">Ask Me Anything (AMA) by @zackptr</p>
        </div>
      </div>
    </>
  );
}