/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import SectionHeader from "../ui/SectionHeader";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sl8wxqb",
        "template_43fusal",
        form.current,
        "PlqbxM4J3UzDcWI-F"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent!");
        },
        (error) => {
          toast.error(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div
      name="contact"
      className="w-full h-screen flex justify-center items-center p-4"
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-4">
          <SectionHeader>Let's Connect</SectionHeader>
          <p className="py-4 text-xl">
            I'm always open to new opportunities, collaborations, and learning
            from others. If you'd like to get in touch, don't hesitate to reach
            out.
          </p>
        </div>
        <label>Name</label>
        <input
          type="text"
          name="user_name"
          className="bg-slate-100 mb-4 p-2 dark:text-[#393939]"
          placeholder="Enter your name here"
        />
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          className="bg-slate-100 mb-4 p-2 dark:text-[#393939]"
          placeholder="Please enter a valid email address"
        />
        <label>Message</label>
        <textarea
          name="message"
          className="bg-slate-100 p-2 dark:text-[#393939]"
          rows="10"
          placeholder="Leave me your message :)"
        />
        <button
          className="font-bold rounded-lg bg-[#d7d7d7] dark:text-neutral-600 hover:bg-[#8c8c8c] hover:boder-[#9f9f9f] px-4 py-3 my-8 mx-auto flex items-center"
          type="submit"
          value="Send"
        >
          Let's collaborate!
        </button>
      </form>
    </div>
  );
}

export default Contact;
