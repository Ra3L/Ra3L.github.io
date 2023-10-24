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
            <h2 className="text-4xl font-extrabold">About</h2>
          </div>
          <div></div>
        </div>
        <div className="max-w-[64rem] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl font-bold">
            <p>Nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p className="pb-3">
              Hello! My name is Rhae and I'm a passionate and dedicated software
              engineer on a mission to create innovative solutions that make a
              positive impact on the world.
            </p>
            <p>
              My journey as a software engineer began with a deep fascination
              for coding and problem-solving. The journey is not easy but I
              enjoy it every single day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
