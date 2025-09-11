"use client";

import { useState } from "react";
import axios from "axios";
import { OmniCrmUrl, PUJADIVINE_BACKEND_TOKEN } from "@/data/url";

export default function SendEnquiryModal({addProductName,name, onClose }: {addProductName:boolean,name:string, onClose: () => void }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
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

    const { firstName, lastName, company, phone, email, message } = formData;

    if (!firstName || !lastName || !company || !phone || !email || !message) {
      setError("Please fill all the fields.");
      setTimeout(() => setError(""), 3000);
      return;
    }

    if (phone.length !== 10) {
      setError("Phone number must be 10 digits.");
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
        subject: `Question asked via Ask a Question form ${addProductName&&name?`Product :- `:""}`,
        contactPersonName: `${firstName} ${lastName}`,
        contactPersonEmail: email,
        contactPersonPhone: phone,
        companyName: company,
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
        source: "ask_question_modal",
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
        company: "",
        phone: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setStatus("idle");
        onClose(); 
      }, 3000);
    } catch (err) {
      console.error(err);
      setStatus("idle");
      setError("Failed to submit. Please try again.");
      setTimeout(() => setError(""), 3000);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-[#00000077] bg-opacity-50 flex justify-center items-center p-4 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="bg-white max-w-[550px] rounded-lg shadow-xl w-full p-6 sm:p-8 md:p-10 relative">
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-3 right-4 text-gray-600 hover:text-black text-2xl font-bold"
        >
          &times;
        </button>

        <h3 className="text-[24px] md:text-[26px] lg:text-[30px] font-bold">
          Need more information?
        </h3>
        <p className="text-[15px] md:text-[17px] text-[#7F848D] mb-6">
          Submit your enquiry and we’ll get in touch to assist you with the
          product or service you’re interested in.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="text-[#7F848D] px-3 py-2 outline-none border-b-4 border-[#0057FF] text-[16px]"
          />
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="text-[#7F848D] px-3 py-2 outline-none border-b-4 border-[#0057FF] text-[16px]"
          />
          <input
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company Name"
            className="text-[#7F848D] px-3 py-2 outline-none border-b-4 border-[#0057FF] text-[16px] sm:col-span-2"
          />
          <div className="flex items-center border-b-4 border-[#0057FF] text-[16px] px-3 py-2 text-[#7F848D]">
            <span className="pr-2 text-black font-medium">+91</span>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              maxLength={10}
              className="w-full outline-none text-[#7F848D]"
            />
          </div>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="text-[#7F848D] px-3 py-2 outline-none border-b-4 border-[#0057FF] text-[16px]"
          />
        </div>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="mt-6 w-full min-h-[140px] resize-none text-[#7F848D] px-3 py-2 outline-none border-b-4 border-[#0057FF] text-[16px]"
        />

        <button
          onClick={handleSubmit}
          disabled={status !== "idle"}
          className={`mt-6 w-full sm:w-auto px-10 py-3 rounded-xl font-semibold text-white text-lg ${
            status === "success" ? "bg-green-600" : "bg-[#0057FF] cursor-pointer"
          }`}
        >
          {status === "loading"
            ? "Submitting..."
            : status === "success"
            ? "✔ Submitted"
            : "Submit Now"}
        </button>

{error && (
  <p className="absolute left-0 right-0 bottom-3 text-center text-red-600 text-sm font-medium">
    {error}
  </p>
)}

      </div>
    </div>
  );
}
