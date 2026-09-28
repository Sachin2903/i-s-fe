"use client";

import { useEffect, useState } from "react";
import {
  FaDownload,
  FaEye,
  FaEyeSlash,
  FaFileAlt,
  FaLock,
  FaPhone,
  FaTimes,
} from "react-icons/fa";
import { DOWNLOAD_CONFIG } from "./downloadConfig";

export default function ProtectedDownload() {
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);

  const closeModal = () => {
    if (isDownloading) return;

    setIsOpen(false);
    setPassword("");
    setError("");
    setShowPassword(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen && !isDownloading) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, isDownloading]);

  const openModal = () => {
    setIsOpen(true);
    setPassword("");
    setError("");
    setShowPassword(false);
  };

  const handleDownload = async () => {
    setError("");

    if (!password.trim()) {
      setError("Please enter the password.");
      return;
    }

    if (password !== DOWNLOAD_CONFIG.password) {
      setError("Incorrect password. Please try again.");
      return;
    }

    try {
      setIsDownloading(true);

      for (const file of DOWNLOAD_CONFIG.files) {
        const response = await fetch(file.url);

        if (!response.ok) {
          throw new Error(`Unable to download ${file.name}`);
        }

        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = blobUrl;
        link.download =
          file.url.split("/").pop() || file.name;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        window.URL.revokeObjectURL(blobUrl);

        await new Promise((resolve) =>
          setTimeout(resolve, 400)
        );
      }

      closeModal();
    } catch (error) {
      console.error(error);
      setError("Unable to download the files. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="group flex w-fit items-center justify-center gap-3 rounded-md bg-[#3461FF] px-8 py-4 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#2852e6] hover:shadow-md active:scale-[0.98] sm:text-base"
      >
        <FaDownload className="transition-transform duration-200 group-hover:translate-y-0.5" />
        DD Files Download
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/60 px-4 py-6 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (
              event.target === event.currentTarget &&
              !isDownloading
            ) {
              closeModal();
            }
          }}
        >
          <div className="w-full max-w-[430px] overflow-hidden rounded-2xl bg-white shadow-[0_25px_70px_rgba(0,0,0,0.25)]">
            <div className="h-1 w-full bg-[#3461FF]" />

            <div className="p-6 sm:p-7">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#3461FF]/10 text-[#3461FF]">
                    <FaLock className="text-base" />
                  </div>

                  <div>
                    <h2 className="text-[19px] font-bold tracking-tight text-slate-900">
                      Secure Download
                    </h2>

                    <p className="mt-0.5 text-xs text-slate-500">
                      Enter your access password
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={closeModal}
                  disabled={isDownloading}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 disabled:pointer-events-none disabled:opacity-40"
                  aria-label="Close"
                >
                  <FaTimes className="text-sm" />
                </button>
              </div>

              <div className="mt-6 rounded-xl border border-[#3461FF]/10 bg-[#3461FF]/[0.04] px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#3461FF] shadow-sm">
                    <FaFileAlt className="text-sm" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Download package
                    </p>

                    <p className="mt-0.5 text-xs text-slate-500">
                      {DOWNLOAD_CONFIG.files.length} files available
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="download-password"
                  className="mb-2 block text-sm font-semibold text-slate-800"
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    id="download-password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    autoFocus
                    disabled={isDownloading}
                    onChange={(event) => {
                      setPassword(event.target.value);
                      setError("");
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        handleDownload();
                      }
                    }}
                    placeholder="Enter password"
                    className={`h-12 w-full rounded-xl border bg-white px-4 pr-12 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 ${
                      error
                        ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
                        : "border-slate-200 focus:border-[#3461FF] focus:ring-4 focus:ring-[#3461FF]/10"
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((value) => !value)
                    }
                    disabled={isDownloading}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-slate-400 transition hover:text-[#3461FF]"
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? (
                      <FaEyeSlash />
                    ) : (
                      <FaEye />
                    )}
                  </button>
                </div>

                {error && (
                  <p className="mt-2 text-xs font-medium text-red-500">
                    {error}
                  </p>
                )}
              </div>

              <div className="mt-4 flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
                <div>
                  <p className="text-xs text-slate-500">
                    Don't have the password?
                  </p>

                  <p className="mt-0.5 text-sm font-semibold text-slate-800">
                    Contact our team
                  </p>
                </div>

                <a
                  href="tel:+919720870870"
                  className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-bold text-[#3461FF] shadow-sm ring-1 ring-slate-100 transition hover:bg-[#3461FF] hover:text-white"
                >
                  <FaPhone className="text-xs" />
                  +91 9720870870
                </a>
              </div>

              <button
                type="button"
                onClick={handleDownload}
                disabled={isDownloading}
                className="mt-5 flex h-12 w-full items-center justify-center gap-2.5 rounded-xl bg-[#3461FF] text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#2852e6] hover:shadow-md active:scale-[0.99] disabled:pointer-events-none disabled:opacity-60"
              >
                {isDownloading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Preparing files...
                  </>
                ) : (
                  <>
                    <FaDownload />
                    Download Files
                  </>
                )}
              </button>

              <p className="mt-3 text-center text-[11px] text-slate-400">
                Your password is required to access these files.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}