/* eslint-disable react/no-unescaped-entities */
import SectionHeader from "../ui/SectionHeader";
import IconGitHub from "./icons/github";
import IconLinkedIn from "./icons/linkedin";

function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen flex justify-center items-center p-4"
    >
      <div className="flex flex-col max-w-[600px] w-full pb-4 items-center">
        <SectionHeader>Get In Touch</SectionHeader>
        <div className="flex gap-2 py-2">
          <IconGitHub />
          <IconLinkedIn />
        </div>
        <p className="py-5 text-xl text-center">
          I'm always open to new opportunities, collaborations, and learning
          from others. If you'd like to get in touch, don't hesitate to reach
          out. I'll get back to you as soon as I can!
        </p>
        <a
          href="mailto:rae_liang@hotmail.com"
          className="text-xl rounded-md bg-[#d7d7d7] dark:text-neutral-600 dark:bg-slate-300 hover:opacity-60 hover:shadow-lg px-5 py-4 my-8 mx-auto"
        >
          Say Hello
        </a>
      </div>
    </div>
  );
}

export default Contact;
