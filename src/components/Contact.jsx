import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(!loading);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      id="contact"
      className=" flex flex-col justify-center  w-full h-screen mt-[200px]"
    >
      <div className="flex flex-col justify-center items-center mt-4 w-full h-full ">
        <div className="flex flex-col bg-primery p-5 rounded  gap-4 shadow-lg shadow-action max-w-xl sm:px-20 mb-16">
          <h2 className="flex items-center justify-center my-2 sm:text-[30px] text-accent">
            Contact Me.
          </h2>
          <form ref={form} onSubmit={sendEmail} className="mt-5">
            <div className="mb-6">
              <input
                type="text"
                name="name"
                className="w-full font-normal px-3 py-2 rounded border-none outline-none"
                placeholder="Name"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                name="email"
                className="w-full font-normal px-3 py-2 rounded border-none outline-none"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-6">
              <textarea
                name="message"
                className="block  w-full font-normal px-3  rounded border-none outline-none resize-none"
                placeholder="Message"
                rows={7}
                required
              ></textarea>
            </div>
            {/* BUTTON */}
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="rounded text-white bg-accent px-5 py-2 shadow-sm hover:shadow-action hover:text-action"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
