import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { motion, AnimatePresence } from "framer-motion";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [captcha, setCaptcha] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  //! reCAPTCHA
  const onChange = (value) => {
    console.log("Captcha value:", value);
    setCaptcha(true);
  };

  //! EmailJS API
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_geuiz36",
        "template_n65r8lp",
        form.current,
        "RfUT5KaBjJiJ-rbVO"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          document.getElementById("myForm").reset();
          grecaptcha.reset();
          setIsSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  //! Handle alert hide
  useEffect(() => {
    if (isSubmitted) {
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  }, [isSubmitted]);

  return (
    <motion.div
      id="contact"
      className=" flex flex-col justify-center  w-full h-screen mt-[200px]"
      initial={{ opacity: 0, y: 80 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <div className="flex flex-col justify-center items-center mt-4 w-full h-full ">
        <div className="flex flex-col bg-primery p-5 rounded  gap-4 shadow-lg shadow-action max-w-xl sm:px-20 mb-16">
          <h2 className="flex items-center justify-center my-2 sm:text-[30px] text-accent">
            Contact Me.
          </h2>
          {/* FORM */}
          <form id="myForm" ref={form} onSubmit={sendEmail} className="mt-5">
            <div className="mb-6">
              <input
                type="text"
                name="from_name"
                className="w-full font-normal px-3 py-2 rounded border-none outline-none"
                placeholder="Name"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                name="from_email"
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
            {/* ReCAPTCHA */}
            <ReCAPTCHA
              className="flex justify-center items-center"
              sitekey={import.meta.env.VITE_RECAPTCHA_KEY}
              onChange={onChange}
            />
            {/* BUTTON */}
            <div className="flex justify-center items-center pt-3">
              <button
                disabled={!captcha}
                type="submit"
                className={`
                ${
                  !captcha
                    ? "opacity-50 cursor-not-allowed"
                    : "opacity-100 hover:shadow-action hover:text-action hover:scale-105 "
                } rounded text-white bg-accent px-5 py-2 shadow-sm `}
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
        {/* ALERT */}
        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
              role="alert"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div clasName="flex">
                <div className="py-1">
                  <svg
                    className="fill-current h-6 w-6 text-teal-500 mr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold">Form submitted successfully</p>
                  <p className="text-sm">Thank you reaching out!</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default Contact;
