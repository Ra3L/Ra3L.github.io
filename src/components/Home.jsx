import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

function Home() {
  return (
    <div name="home" className="w-full h-screen">
      <div className="max-w-[64rem] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-xl sm:text-2xl pl-6">RHAE LIANG</p>
        <h1 className="text-5xl sm:text-6xl font-extrabold pl-6">
          Self-taught Frontend Developer
        </h1>
        <p className="text-l sm:text-xl pt-2 pl-6">
          Turning ideas into real life products
        </p>
        <div className="pl-6">
          <button className="animate-pulse hover:pause rounded-lg shadow-lg bg-neutral-200 dark:bg-slate-300 dark:text-neutral-600 px-4 py-3 my-2 flex items-center hover:bg-[#8c8c8c] hover:boder-[#9f9f9f] hover:shadow-2xl">
            <Link to="projects" smooth={true} duration={500}>
              View My Work
            </Link>
            <span>
              <HiArrowNarrowRight className="ml-2" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
