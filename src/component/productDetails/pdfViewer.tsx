"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PdfViewer() {
  const [numPages, setNumPages] = useState<number | null>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <aside className="w-full py-8 px-3 flex justify-center">
      <a href="/assets/pdf/pdf1.pdf" download>
        <div className="shadow-lg hover:shadow-xl transition rounded overflow-hidden border">
          <Document
            file="/assets/pdf/pdf1.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={1} width={400} />
          </Document>
          <div className="bg-red-600 text-white text-center py-2">
            📥 Click to Download
          </div>
        </div>
      </a>
    </aside>
  );
}
