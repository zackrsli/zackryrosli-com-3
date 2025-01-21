import type { MetaFunction } from "@remix-run/cloudflare";
import { LuArrowDown, LuArrowRight, LuArrowUpRight, LuGithub, LuLinkedin, LuMail, LuTwitter, LuX } from "react-icons/lu";
import { SiKofi } from "react-icons/si";

export const meta: MetaFunction = () => {
  return [
    { title: "Zackry Rosli" },
    { description: "A self-driven Go enthusiast hailing from Sarawak, Malaysia, bringing 4 years of hardcore experience to the table." },
  ];
};

const workExperiences = [
  {
    position: "Software Engineer",
    type: "Full-time",
    company: "Decube Data Sdn. Bhd.",
    light_logo: "./decube.png",
    duration: "May 2024 - Present",
  },
  {
    position: "Lead Software Engineer",
    type: "Part-time",
    company: "BerryByte Limited",
    light_logo: "./berrybyte.png",
    duration: "Nov 2023 - March 2024",
  },
  {
    position: "Software Engineer",
    type: "Part-time",
    company: "BerryByte Limited",
    light_logo: "./berrybyte.png",
    duration: "April 2022 - Nov 2023",
  },
];

const projects = [
  {
    name: "Tech in Malaysia",
    description: "Tech in Malaysia is a dynamic community dedicated to empowering and connecting Malaysian professionals in the technology sector.",
    link: "https://techin.my",
  },
  {
    name: "Next.js Certification Generator",
    description: "A painless way to generate a simple image of certification for events.",
    link: "https://github.com/zackptr/nextjs-certgen",
  },
  {
    name: "go-otp",
    description: "An implementation of RFC 4226, and RFC 6238 for the Go programming language.",
    link: "https://github.com/zackptr/go-otp",
  },
];

const articles = [
  {
    name: "Should I Use Frameworks in Go?",
    description: "We all know that Go is one of the popular programming languages...",
    link: "https://blog.zekr.my/should-i-use-frameworks-in-go",
  },
  {
    name: "Why Angular is Perfect for Web Development",
    description: "It isn't.",
    link: "https://blog.zekr.my/why-angular-is-perfect-for-web-development",
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
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-3 text-center md:text-left flex flex-col justify-center">
            <h1 className="font-semibold text-3xl md:text-5xl leading-snug">
              {helloWord}! 👋🏼 My name is <span className="text-atlantis-600">Zackry Rosli</span>,<br />a {whatAmI}.
            </h1>
            <p className="mt-1 md:text-lg max-w-3xl">
              A professional procrastinator... just kidding (or am I?).
              Anyway, I&apos;m a self-motivated Go enthusiast from Sarawak, Malaysia, with four years of solid experience under my belt.
            </p>
            <div className="flex flex-col md:flex-row gap-8 mt-6 justify-center md:justify-normal items-center">
              <a href="#work" className="group flex items-center">
                <LuArrowDown className="md:text-xl transition-transform group-hover:translate-y-1" />
                <span className="ml-4 transition-transform group-hover:translate-y-1">See My Work Experiences</span>
              </a>
              <a href="https://x.com/zackptr" className="group flex items-center">
                <LuArrowRight className="md:text-xl transition-transform group-hover:translate-x-1" />
                <span className="ml-4 transition-transform group-hover:translate-x-1">Follow me on X</span>
              </a>
            </div>
          </div>
          <div className="relative group w-48 h-48 md:w-96 md:h-96 order-first md:order-last mx-auto col-span-3 md:col-span-1">
            <img 
              className="absolute transition-all duration-300 ease-in-out md:w-80 md:h-80 border-4 border-white group-hover:translate-x-6 group-hover:translate-y-6 z-10 group-hover:z-0 blur-none group-hover:blur-sm shadow-sm" 
              src="./zackryrosli.jpg" 
              alt="Zackry Rosli"
            />
            <img 
              className="group-hover:blur-none blur-sm absolute transition-all duration-300 ease-in-out md:w-80 md:h-80 border-4 border-white translate-x-6 translate-y-6 z-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:z-10 shadow-sm" 
              src="./armel.jpg" 
              alt="Armel"
            />
          </div>
        </div>
      </section>
      <section id="work" className="flex flex-col w-full bg-atlantis-800 text-atlantis-50 py-20">
        <div className="flex flex-col w-full md:max-w-7xl md:px-0 px-6 mx-auto">
          <h1 className="text-3xl md:text-5xl leading-snug font-semibold max-w-4xl text-balance">
            Where I <span className="underline decoration-wavy underline-offset-8 decoration-atlantis-400">Used to Work 👨🏻‍💻</span>
          </h1>
          <p className="mt-4 md:text-lg max-w-3xl">
            Check out where I used to work — it might come in handy when you are job hunting, hehe.
          </p>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {workExperiences.map((workExperience, ix) => (
              <div key={ix} className="group relative h-max">
                <div className="relative z-10 text-asphalt-950 w-full px-6 py-6 bg-atlantis-100 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform">
                  <img className="w-28 md:w-48" src={workExperience.light_logo} />
                  <p className="mt-4 text-xl md:text-2xl font-medium">
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
      <section id="projects" className="flex flex-col w-full py-20 text-atlantis-950">
        <div className="flex flex-col w-full md:max-w-7xl md:px-0 px-6 mx-auto">
          <h1 className="text-3xl md:text-5xl leading-snug font-semibold text-balance max-w-4xl">
            Fun Fact: <span className="underline decoration-wavy underline-offset-8 decoration-atlantis-500">I Love Projects 🔬</span>
          </h1>
          <p className="mt-4 md:text-lg max-w-3xl">
          Whether it&apos;s code experiments or wild software ideas, there&apos;s always something brewing. Check them out — you might just find a hidden gem (or not, depends).
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {projects.map((project, ix) => (
              <div key={ix} className="group relative h-max">
                <div className="relative z-10 text-asphalt-950 w-full px-6 py-6 bg-atlantis-200 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform">
                  <p className="text-xl md:text-2xl font-medium">
                    {project.name}
                  </p>
                  <p className="mt-0.5">
                    {project.description}
                  </p>
                  <a href={project.link} className="flex items-center text-sm mt-1">
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
      <section id="articles" className="flex flex-col w-full text-atlantis-50 pb-20 px-6">
        <div className="flex flex-col justify-center w-full md:max-w-7xl mx-auto bg-atlantis-800 p-6 md:p-20">
          <h1 className="text-3xl md:text-5xl text-center mx-auto leading-snug font-semibold max-w-6xl text-balance">
            Oh.. Did I Mention that <span className="underline decoration-wavy underline-offset-8 decoration-atlantis-400">I Write Articles ✍🏼</span>?
          </h1>
          <p className="mt-4 md:text-lg max-w-4xl text-center mx-auto">
            Yep, I write articles too! Whether it&apos;s tech deep dives, quirky insights, or tips you didn&apos;t know
            you needed — I&apos;ve got words for it all. Dive in and explore my take on things, one article at a time!
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {articles.map((article, ix) => (
              <div key={ix} className="group relative h-max">
                <div className="relative z-10 text-asphalt-950 w-full px-6 py-6 bg-atlantis-100 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform">
                  <p className="text-xl md:text-2xl font-medium">
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
                <div className="z-[1] absolute inset-0 bg-atlantis-500 translate-x-3 translate-y-3 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer id="footer" className="flex flex-col w-full py-20 bg-atlantis-50 text-atlantis-950">
        <div className="flex flex-col w-full md:max-w-7xl md:px-0 px-6 mx-auto">
          <h1 className="text-3xl md:text-5xl leading-snug font-semibold text-balance max-w-4xl">
            Hey, <span className="underline decoration-wavy underline-offset-8 decoration-atlantis-500">You Made It to The End 🎉</span>!
          </h1>
          <p className="mt-4 md:text-lg max-w-3xl">
            Thanks for scrolling all the way down — one gold star for you and only you :). Stick around for more nerdy goodness and
            maybe... even a surprise or two. Catch you up top!
          </p>
          <div className="flex flex-row gap-4 mt-4 text-2xl">
            <a href="mailto:hello@zekr.my">
              <LuMail />
            </a>
            <a href="https://x.com/zackptr">
              <LuTwitter />
            </a>
            <a href="https://linkedin.com/in/zackry-rosli">
              <LuLinkedin />
            </a>
            <a href="https://github.com/zackptr">
              <LuGithub />
            </a>
            <a href="https://ko-fi.com/zackptr">
              <SiKofi />
            </a>
          </div>
          <p className="mt-4 text-sm">&copy; 2024 - {new Date().getFullYear()} Zackry Rosli. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
