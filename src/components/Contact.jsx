import React, { useState, useRef, useEffect, Suspense } from "react";
import emailjs from "@emailjs/browser";
const ReCAPTCHA = React.lazy(() => import("react-google-recaptcha"));
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
      className=" flex flex-col justify-center w-full h-screen sm:py-0 sm:px-[30px] md:py-0 md:px-[30px] text-xl sm:text-base md:mt-60 "
      initial={{ opacity: 0, y: 100 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 55 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <div className="flex flex-col justify-center items-center  w-full h-full ">
        <div className="flex flex-col bg-transperant p-5 rounded  md:gap-4 hover:shadow-md hover:shadow-action max-w-3xl sm:px-20 mb-16 sm:w-[48rem]">
          <h2 className="flex items-center justify-center my-2 sm:text-[30px] text-white">
            Contact Me.
          </h2>
          {/* FORM */}
          <form id="myForm" ref={form} onSubmit={sendEmail} className=" mt-5">
            <div className="mb-6">
              <input
                type="text"
                name="from_name"
                className="w-full font-normal p-1 sm:px-3 sm:py-2 border-b-2 bg-transparent outline-none focus:border-accent text-white"
                placeholder="Name"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                name="from_email"
                className="w-full font-normal  p-1 sm:px-3 sm:py-2 border-b-2 bg-transparent outline-none focus:border-accent text-white"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-6">
              <textarea
                name="message"
                className="block  w-full font-normal px-3  border-b-2 outline-none resize-none bg-transparent focus:border-accent text-white"
                placeholder="Message"
                rows={6}
                required
              ></textarea>
            </div>

            {/* ReCAPTCHA */}
            <Suspense fallback={<div>Loading reCAPTCHA...</div>}>
              <ReCAPTCHA
                className="flex justify-center items-center"
                sitekey="6LfcxlUlAAAAAKqCe3Ze0YbnyoHTGlLQXvdVKIUa"
                onChange={onChange}
              />
            </Suspense>

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
