import SectionHeader from "../ui/SectionHeader";

/* eslint-disable react/no-unescaped-entities */
function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-neutral-50 dark:bg-neutral-700"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[64rem] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <SectionHeader>About</SectionHeader>
          </div>
          <div></div>
        </div>
        <div className="max-w-[64rem] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right sm:text-3xl font-bold">
            <p>Nice to meet you. Please take a look around.</p>
          </div>
          <div className="text-sm sm:text-base">
            <p className="pb-2">
              Hello! My name is Rhae😃 Welcome to my little tech world!
            </p>
            <p className="pb-2">
              I'm a passionate and dedicated frontend developer on a mission to
              create innovative solutions that make a positive impact on the
              world.
            </p>
            <p className="pb-2">
              My journey as a software engineer began with a deep fascination
              for unlimited possibilities and freedom in tech world. Using
              programming lanuages as tools, building up something from scratch,
              and turning ideas in my head into reality.
            </p>
            <p className="pb-2">
              Past few years working as an accountant taught me research skills,
              analytical thinking, attention to detail and time management.
              Those skills become quite useful when I started my tech journey.
            </p>
            <p>The journey is not easy, but I enjoy it every single day!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
