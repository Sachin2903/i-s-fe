"use client";

import { OmniCrmUrl, PUJADIVINE_BACKEND_TOKEN } from "@/data/url";
import axios from "axios";
import { useState } from "react";

export default function KnowMore() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
    const [error, setError] = useState("");

    const isValidEmail = (email: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    async function handleClick() {
        try {
            if (status !== "idle") return;

            if (!isValidEmail(email)) {
                setError("Please enter a valid email");
                setTimeout(() => setError(""), 3000);
                return;
            }
            const body = {
                leadType: "a",
                subject: "Want to Know more?",
                contactPersonName: "",
                contactPersonEmail: email,
                companyName: "",
                companyAddress: "",
                city: "",
                state: "",
                contactPersonPhoneAlt: "",
                contactPersonEmailAlt: "",
                vName: "",
                description: "Lead submitted via website",
                lead_mcat_name: "",
                callDuration: "",
                receiverMobile: "",
                owner: "",
                source: "other",
            }
            const response: any = await axios.post(`${OmniCrmUrl}/api/leads/omnicrm/create/leads`, body, {
                headers: {
                    "Authorization": `Basic ${PUJADIVINE_BACKEND_TOKEN}`
                }
            })
            setError("");
            setStatus("loading");
            setEmail("")
            setTimeout(() => {
                setStatus("success");
                setTimeout(() => setStatus("idle"), 4000);
            }, 2000);
        } catch (error) {
            setError("");
            setStatus("idle")
        }
    };

    return (
        <section className="w-dvw flex sm:gap-0 gap-8 sm:flex-row flex-col justify-between items-center relative px-[3%] lg:px-[4%] xl:px-[5%] py-16 pt-20 bg-[#F7FAFF]">
            <h3 className="text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold">Want to know more?</h3>

            <aside className="flex flex-col items-center relative">
                <div className="flex flex-wrap justify-center items-center gap-3 relative">
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Your Email"
                        className={`text-[#7F848D] sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[350px] px-4 border ${error ? "border-red-500" : "border-gray-300"
                            } bg-white rounded-lg py-3 lg:py-4 outline-none`}
                    />
                    <button
                        onClick={handleClick}
                        disabled={status !== "idle"}
                        className={`px-6 sm:px-5 lg:px-6 xl:px-8 rounded-xl flex-shrink-0 font-semibold text-base md:text-lg py-3 lg:py-4 text-white 
        ${status === "success" ? "bg-green-600" : "bg-[#0057FF] cursor-pointer"} 
        flex items-center justify-center gap-2 min-w-[180px] min-h-[52px]`}
                    >
                        {status === "loading" ? (
                            <>

                                <div className="w-5 mx-auto h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            </>
                        ) : status === "success" ? (
                            "✔ Enquired"
                        ) : (
                            "Online Enquiry"
                        )}
                    </button>


                    {error && (
                        <span className="absolute left-0 -bottom-6 text-red-600 text-sm font-medium w-full text-center">
                            {error}
                        </span>
                    )}
                </div>
            </aside>
        </section>
    );
}
