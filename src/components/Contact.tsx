"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { fadeIn } from "@/constants";
import { toast } from "sonner";

const ContactPage = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  async function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSending(true);
    try {
      if (
        process.env.NEXT_PUBLIC_SERVICE_ID &&
        process.env.NEXT_PUBLIC_TEMPLATE_ID &&
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      ) {
        await emailjs.sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          form.current!,
          process.env.NEXT_PUBLIC_PUBLIC_KEY
        );
        toast.success("Email sent successfully!");
      }
      form.current!.reset();
    } catch {
      toast.error("Email failed to send!");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <motion.section
      className="h-screen mt-12  text-black"
      id="contact"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex  flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full z-50 lg:w-1/2 flex flex-row items-center justify-center">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 justify-center items-center p-4 "
          >
            <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
              Get in Touch
            </h4>
            <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
              Let&apos;s work <br /> Together!
            </h2>
            <p className="w-3/4">
              I&apos;m open and ready for freelance collaborations! Whether
              you&apos;re dreaming of a stunning web design, have a top-notch
              web development ideas on your mind, I&apos;m all ears. <br />
              <br />
              And don&apos;t worry, the coffee is on me!
            </p>
          </motion.div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-3/4 lg:h-full lg:w-1/2 bg-blue-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
        >
          <span>Dear Thareq,</span>
          <textarea
            rows={6}
            required
            minLength={10}
            disabled={isSending}
            className={`bg-transparent border-b-2 border-b-black outline-none resize-none ${
              isSending ? "cursor-not-allowed" : ""
            }`}
            name="user_message"
          />
          <span>My mail address is:</span>
          <input
            name="user_email"
            disabled={isSending}
            minLength={5}
            type="email"
            className={`bg-transparent border-b-2 border-b-black outline-none ${
              isSending ? "cursor-not-allowed" : ""
            }`}
            required
          />

          <button
            disabled={isSending}
            className={`${
              isSending
                ? "bg-purple-200/70 cursor-not-allowed"
                : "bg-purple-200"
            } rounded font-semibold text-gray-600 p-4 flex items-center justify-center`}
          >
            {isSending ? (
              <div className="flex items-center justify-center">
                <div className="border-gray-300 h-8 w-8 animate-spin flex items-center justify-center rounded-full border-4 border-t-blue-600" />
              </div>
            ) : (
              "Send"
            )}
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default ContactPage;
