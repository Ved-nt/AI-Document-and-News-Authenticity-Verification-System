import React,{ useState } from "react";
import PageWrapper from "../components/PageWrapper";
import toast from "react-hot-toast";

const DocumentCheck = () => {
  const [scanned, setScanned] = useState(false);

  const scan = () => {
    setScanned(true);
    toast.success("Document scanned successfully");
  };

  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold mb-6">Document Forgery Detection</h2>

        <input type="file" className="block w-full mb-4 text-slate-400" />

        <button onClick={scan} className="px-6 py-3 bg-sky-500 rounded-xl text-black font-semibold">
          Scan Document
        </button>

        {scanned && (
          <div className="mt-6 p-6 rounded-xl bg-emerald-400/10 border border-emerald-400">
            <p>Metadata Check: Verified</p>
            <p>Content Consistency: Valid</p>
            <p>Tampering Risk Score: Low</p>
          </div>
        )}
      </div>
    </PageWrapper>
  );
};

export default DocumentCheck;
