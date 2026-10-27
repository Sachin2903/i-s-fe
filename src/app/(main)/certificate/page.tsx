
const certificates = [
  {
    title: "EMC Test Certificate",
    category: "Testing & Compliance",
    file: "/certificates/EMC%20Test%20Certificate.pdf",
  },
  {
    title: "ISO Certificate",
    category: "Quality Standards",
    file: "/certificates/ISO%20certificate.pdf",
  },
  {
    title: "PESO Certificate",
    category: "Regulatory Compliance",
    file: "/certificates/PESO%20certificate.pdf",
  },
  {
    title: "Udyam Certificate",
    category: "Business Registration",
    file: "/certificates/Udyam.pdf",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-white px-3 py-8 sm:px-6 sm:py-12 lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        <header className="mb-8 text-center sm:mb-12">
          <span className="inline-block rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#0057FF]">
            Our Credentials
          </span>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Certificates &{" "}
            <span className="text-[#0057FF]">Compliance</span>
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
            Explore our certifications and official business documents.
          </p>
        </header>

        <section
          aria-label="Certificates"
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-8"
        >
          {certificates.map((certificate, index) => (
            <article
              key={certificate.file}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-blue-200 hover:shadow-lg"
            >
              <div className="flex items-center gap-3 p-4 sm:p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0057FF] text-sm font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="min-w-0 flex-1">
                  <h2 className="font-bold text-slate-900">
                    {certificate.title}
                  </h2>
                  <p className="mt-1 text-xs text-slate-500">
                    {certificate.category}
                  </p>
                </div>
              </div>

              <div className="bg-[#F3F6FF] p-3 sm:p-4">
                <iframe
                  src={`${certificate.file}#page=1&view=FitH&toolbar=0&navpanes=0`}
                  title={certificate.title}
                  loading="lazy"
                  className="h-[280px] w-full rounded-lg border border-blue-100 bg-white sm:h-[340px] lg:h-[380px]"
                />
              </div>

              <div className="p-4 sm:p-5">
                <a
                  href={`${certificate.file}#page=1`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#0057FF] px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100"
                >
                  View Full Certificate
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M14 3h7v7M21 3l-9 9" />
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
