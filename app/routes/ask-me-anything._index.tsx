import { redirect, type ActionFunctionArgs, type MetaFunction } from "@remix-run/cloudflare";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { drizzle } from "drizzle-orm/d1";
import { z } from "zod";
import { questionsTable } from "~/database/schema.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Ask Me Anything" },
    { description: "A self-driven Go enthusiast hailing from Sarawak, Malaysia, bringing 4 years of hardcore experience to the table." },
  ];
};

export async function action({ context, request }: ActionFunctionArgs) {
  const questionSchema = z.object({
    message: z.string().min(8).max(191),
  });
  
  let { success, error, data: question } = questionSchema.safeParse(Object.fromEntries((await request.formData()).entries()));
  if (!success) {
    return {
      error: error?.message,
    };
  }

  const db = drizzle(context.cloudflare.env.DB);
  const dbQuestion = await db.insert(questionsTable).values({
    message: question?.message!,
  }).returning().get();

  return redirect(`/ask-me-anything/questions/${dbQuestion.id}`);
}

export default function Index() {
  const data = useActionData<typeof action>();
  const navigation = useNavigation();
  const loading = navigation.state === "loading";

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
          {data?.error}
          <Form method="POST" className="mt-6">
            <textarea name="message" className="border w-full p-6 hover:ring-2 hover:ring-atlantis-500" rows={10}>
            </textarea>
            <button type="submit" disabled={loading} className="font-semibold transition duration-500 ease-in-out mt-2 hover:text-atlantis-500">
              {`<button type="submit" disabled="${loading}">Submit</button>`}
            </button>
            <p className="text-sm mt-1">
              This Q&A session is totally anonymous, with no additional information gathered beyond the question itself. The response will be shared on my X account @zackptr.
            </p>
          </Form>
        </div>
      </section>
    </div>
  );
}