import type { MetaFunction } from "@remix-run/node";
import { LuArrowDown, LuArrowRight, LuArrowUpRight } from "react-icons/lu";

export const meta: MetaFunction = () => {
  return [
    { title: "Zackry Rosli" },
  ];
};

const workExperiences = [
  {
    position: "Software Engineer",
    type: "Contract",
    company: "Decube Data Sdn. Bhd.",
    light_logo: "./decube.png",
    duration: "May 2024 - Present",
  },
  {
    position: "Lead Software Engineer",
    type: "Part-time",
    company: "BerryByte Limited",
    light_logo: "./berrybyte.png",
    duration: "Nov 2024 - March 2024",
  },
  {
    position: "Software Engineer",
    type: "Part-time",
    company: "BerryByte Limited",
    light_logo: "./berrybyte.png",
    duration: "April 2022 - Nov 2023",
  },
];

const articles = [
  {
    name: "Should I Use Frameworks in Go?",
    description: "We all know that Go is one of the popular programming languages...",
    link: "https://blog.zackryrosli.com/should-i-use-frameworks-in-go",
  },
  {
    name: "Why Angular is Perfect for Web Development",
    description: "It isn't.",
    link: "https://blog.zackryrosli.com/why-angular-is-perfect-for-web-development",
  },
];

const helloWords = [
  "Ciao",
  "Hej",
  "Bonjour",
  "Hola",
];

const whatAmIs = [
  "Software Engineer",
  "UI/UX Designer",
  "Cat Lover",
];

export default function Index() {
  const helloWord = helloWords[Math.floor(Math.random() * helloWords.length)];
  const whatAmI = whatAmIs[Math.floor(Math.random() * whatAmIs.length)];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex min-h-screen flex-col justify-center items-center md:max-w-7xl md:px-0 px-6 py-6 mx-auto text-atlantis-950">
        <div className="grid md:grid-cols-4">
          <div className="col-span-3">
            <h1 className="font-semibold text-5xl leading-snug">
              {helloWord}! 👋🏼 My name is <span className="text-atlantis-600">Zackry Rosli</span>,<br />a {whatAmI} from Malaysia.
            </h1>
            <p className="mt-1 text-lg max-w-3xl">
              A professional procrastinator... just kidding (or am I?). Anyway, I am a self-driven Go enthusiast hailing
              from Sarawak, Malaysia, bringing 4 years of hardcore experience to the table.
            </p>
            <div className="flex flex-row gap-6 mt-6">
              <a href="#work" className="flex items-center">
                <LuArrowDown className="text-xl" />
                <span className="ml-2">See My Work Experiences</span>
              </a>
              <a href="#work" className="flex items-center">
                <LuArrowRight className="text-xl" />
                <span className="ml-2">Contact Me</span>
              </a>
            </div>
          </div>
          <div className="relative">
            <img className="z-10 w-80 h-80 border-2 border-white" src="./zackryrosli.jpg" />
            <div className="-z-10 absolute inset-0 w-80 h-80 bg-stone-900 translate-x-6 translate-y-6" />
          </div>
        </div>
      </section>
      <section id="work" className="flex flex-col w-full bg-atlantis-800 text-atlantis-50 py-20">
        <div className="flex flex-col w-full md:max-w-7xl md:px-0 px-6 mx-auto">
          <h1 className="text-5xl leading-snug font-semibold max-w-4xl text-balance">
            Where I <span className="underline decoration-wavy underline-offset-8 decoration-atlantis-400">Used to Work 👨🏻‍💻</span>
          </h1>
          <p className="mt-4 text-lg max-w-3xl">
            Check out where I used to work — it might come in handy when you are job hunting, hehe.
          </p>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {workExperiences.map((workExperience, ix) => (
              <div key={ix} className="group relative h-max">
                <div className="relative z-10 text-asphalt-950 w-full px-6 py-6 bg-atlantis-100 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform">
                  <img className="w-48" src={workExperience.light_logo} />
                  <p className="mt-4 text-2xl font-medium">
                    {workExperience.position}
                  </p>
                  <p className="mt-0.5">
                    {workExperience.company} ({workExperience.type})
                  </p>
                  <p className="text-sm mt-1">
                    {workExperience.duration}
                  </p>
                </div>
                <div className="z-[1] absolute inset-0 bg-atlantis-500 translate-x-3 translate-y-3 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="articles" className="flex flex-col w-full py-20 text-atlantis-950">
        <div className="flex flex-col w-full md:max-w-7xl md:px-0 px-6 mx-auto">
          <h1 className="text-5xl leading-snug font-semibold text-balance max-w-4xl">
            Oh.. Did I Mention that <span className="underline decoration-wavy underline-offset-8 decoration-atlantis-500">I Write Articles ✍🏼</span>?
          </h1>
          <p className="mt-4 text-lg max-w-3xl">
            Yep, I write articles too! Whether it&apos;s tech deep dives, quirky insights, or tips you didn&apos;t know
            you needed — I&apos;ve got words for it all. Dive in and explore my take on things, one article at a time!
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {articles.map((article, ix) => (
              <div key={ix} className="group relative h-max">
                <div className="relative z-10 text-asphalt-950 w-full px-6 py-6 bg-atlantis-200 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform">
                  <p className="text-2xl font-medium">
                    {article.name}
                  </p>
                  <p className="mt-0.5">
                    {article.description}
                  </p>
                  <a href={article.link} className="flex items-center text-sm mt-1">
                    <span className="mr-2">@see</span>
                    <LuArrowUpRight className="text-xl" />
                  </a>
                </div>
                <div className="z-[1] absolute inset-0 bg-atlantis-700 translate-x-3 translate-y-3 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}