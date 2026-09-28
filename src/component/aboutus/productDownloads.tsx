"use client";

import { useEffect, useState } from "react";
import { FaDownload, FaFilePdf, FaTimes } from "react-icons/fa";

const products = [
  {
    title: "PT/DP Transmitter",
    file: "/O&M Manual.pdf",
    fileName: "PT-DP-Transmitter.pdf",
    points: [
      
    ],
  },
  {
    title: "Temperature Transmitter",
    file: "/TT Dual Input - Print.pdf",
    fileName: "Temperature-Transmitter.pdf",
    points: [
     
    ],
  },
  {
    title: "Radar Level Transmitter",
    file: "/Radar Level Tx. Manual.pdf",
    fileName: "Radar-Level-Transmitter.pdf",
    points: [
     
    ],
  },
  {
    title: "Ultrasonic Level Transmitter",
    file: "/ULT Manual.pdf",
    fileName: "Ultrasonic-Level-Transmitter.pdf",
    points: [
      
    ],
  },
  {
    title: "Electromagnetic Flow Meter",
    file: "/EMF final.pdf",
    fileName: "Electromagnetic-Flow-Meter.pdf",
    points: [
      
    ],
  },
];

export default function ProductCatalogueDownload() {
  const [isOpen, setIsOpen] = useState(false);
  const [downloading, setDownloading] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !downloading) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [downloading]);

  const handleDownload = async (
    file: string,
    fileName: string,
    title: string
  ) => {
    try {
      setDownloading(title);

      const response = await fetch(file);

      if (!response.ok) {
        throw new Error("Download failed");
      }

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = fileName;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed:", error);
      window.open(file, "_blank");
    } finally {
      setDownloading(null);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="
          flex
          w-fit
          items-center
          justify-center
          gap-3
          rounded-md
          bg-[#3461FF]
          px-8
          py-4
          text-sm
          font-semibold
          text-white
          transition-all
          duration-200
          hover:bg-[#2852e6]
          hover:shadow-lg
          active:scale-[0.98]
          sm:text-base
        "
      >
        <FaFilePdf />
        Product Catalogues
      </button>

      {isOpen && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black/60
            px-4
            py-5
            backdrop-blur-sm
          "
          onMouseDown={(event) => {
            if (
              event.target === event.currentTarget &&
              !downloading
            ) {
              setIsOpen(false);
            }
          }}
        >
          <div
            className="
              relative
              w-full
              max-w-[500px]
              overflow-hidden
              rounded-2xl
              bg-white
              shadow-2xl
            "
          >
            <div className="h-1 bg-[#3461FF]" />

            <div className="p-5 sm:p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                    Product Catalogues
                  </h2>

                  <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                    Select a catalogue to download
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  disabled={!!downloading}
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-lg
                    text-slate-400
                    transition
                    hover:bg-slate-100
                    hover:text-slate-700
                    disabled:opacity-40
                  "
                >
                  <FaTimes />
                </button>
              </div>

              <div className="space-y-2.5">
                {products.map((product) => {
                  const isDownloading =
                    downloading === product.title;

                  return (
                    <div
                      key={product.title}
                      className="
                        rounded-xl
                        border
                        border-slate-100
                        bg-slate-50/70
                        p-3
                        transition
                        hover:border-[#3461FF]/20
                        hover:bg-[#3461FF]/[0.025]
                      "
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            bg-[#3461FF]/10
                            text-[#3461FF]
                          "
                        >
                          <FaFilePdf className="text-sm" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="truncate text-sm font-semibold text-slate-900">
                            {product.title}
                          </h3>

                          <ul className="mt-1 space-y-0.5">
                            {product.points.map((point) => (
                              <li
                                key={point}
                                className="
                                  flex
                                  items-start
                                  gap-1.5
                                  text-[11px]
                                  leading-4
                                  text-slate-500
                                "
                              >
                                <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-[#3461FF]" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <button
                          type="button"
                          disabled={!!downloading}
                          onClick={() =>
                            handleDownload(
                              product.file,
                              product.fileName,
                              product.title
                            )
                          }
                          className="
                            flex
                            h-9
                            shrink-0
                            items-center
                            gap-2
                            rounded-lg
                            bg-[#3461FF]
                            px-3
                            text-xs
                            font-semibold
                            text-white
                            transition
                            hover:bg-[#2852e6]
                            disabled:cursor-not-allowed
                            disabled:opacity-60
                          "
                        >
                          {isDownloading ? (
                            <span
                              className="
                                h-3.5
                                w-3.5
                                animate-spin
                                rounded-full
                                border-2
                                border-white/30
                                border-t-white
                              "
                            />
                          ) : (
                            <FaDownload className="text-[10px]" />
                          )}

                          <span className="hidden sm:inline">
                            {isDownloading
                              ? "..."
                              : "Download"}
                          </span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <p className="mt-4 text-center text-[11px] text-slate-400">
                Select any product above to download its catalogue.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}