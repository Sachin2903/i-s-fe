"use client";

import { useState } from "react";
import axios from "axios";
import { OmniCrmUrl, PUJADIVINE_BACKEND_TOKEN } from "@/data/url";

export default function AskQuestionForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [error, setError] = useState("");

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, "");
      if (digitsOnly.length <= 10) {
        setFormData({ ...formData, phone: digitsOnly });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  async function handleSubmit() {
    if (status !== "idle") return;

    const { firstName, lastName, phone, email, message } = formData;

    if (!firstName || !lastName || !phone || !email || !message) {
      setError("Please fill all the fields.");
      setTimeout(() => setError(""), 3000);
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email.");
      setTimeout(() => setError(""), 3000);
      return;
    }

    try {
      setStatus("loading");

      const body = {
        leadType: "a",
        subject: "Question asked via Ask a Question form",
        contactPersonName: `${firstName} ${lastName}`,
        contactPersonEmail: email,
        contactPersonPhone: phone,
        companyName: "",
        companyAddress: "",
        city: "",
        state: "",
        contactPersonPhoneAlt: "",
        contactPersonEmailAlt: "",
        vName: "",
        description: message,
        lead_mcat_name: "",
        callDuration: "",
        receiverMobile: "",
        owner: "",
        source: "other",
      };

      await axios.post(`${OmniCrmUrl}/api/leads/omnicrm/create/leads`, body, {
        headers: {
          Authorization: `Basic ${PUJADIVINE_BACKEND_TOKEN}`,
        },
      });

      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      });

      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error(err);
      setStatus("idle");
      setError("Failed to submit. Please try again.");
      setTimeout(() => setError(""), 3000);
    }
  }

  return (
    <>
      <aside className="w-full lg:max-w-[560px] px-5 py-6 bg-white shadow-md border border-gray-200">
        <h3 className="text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold">Ask a question</h3>
        <p className="text-[16px] max-w-[550px] md:text-[18px] lg:text-[20px] xl:text-[20px] font-medium text-[#7F848D]">
          If you have any questions, you can contact us. Please fill out the form below.
        </p>
        <aside className="w-full mt-6 grid grid-cols-2 gap-8">
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="text-[#7F848D] px-2 outline-none py-2 text-[14px] border-b-4 border-[#0057FF] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px]"
          />
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="text-[#7F848D] px-2 outline-none py-2 text-[14px] border-b-4 border-[#0057FF] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px]"
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone no"
            className="text-[#7F848D] px-2 outline-none py-2 text-[14px] border-b-4 border-[#0057FF] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px]"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="text-[#7F848D] px-2 outline-none py-2 text-[14px] border-b-4 border-[#0057FF] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px]"
          />
        </aside>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="text-[#7F848D] px-2 outline-none mb-16 mt-8 resize-none min-h-[150px] w-full py-2 text-[14px] border-b-4 border-[#0057FF] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px]"
        />
        <button
          onClick={handleSubmit}
          disabled={status !== "idle"}
          className={`px-8 sm:px-10 md:px-12 lg:px-14 xl:px-16 rounded-xl flex-shrink-0 font-semibold text-base md:text-lg py-3 md:py-3 lg:py-4 xl:py-5 text-white ${status === "success" ? "bg-green-600" : "bg-[#0057FF]"
            }`}
        >
          {status === "loading" ? "Submitting..." : status === "success" ? "✔ Submitted" : "Submit Now"}
        </button>

        {error && (
          <p className="text-red-600 text-sm font-medium mt-4 text-center">{error}</p>
        )}
      </aside>
    </>
  );
}
