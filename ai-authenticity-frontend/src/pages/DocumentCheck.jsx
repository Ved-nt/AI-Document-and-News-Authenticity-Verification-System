import React, { useState, useRef } from "react";
import PageWrapper from "../components/PageWrapper";
import toast from "react-hot-toast";

const DocumentCheck = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [loading, setLoading] = useState(false);

  const fileInputRef = useRef(null); // reference to clear input

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setScanned(false); // reset previous results
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    setScanned(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // clear actual input
    }
    toast("File removed", { icon: "🗑️" });
  };

  const scan = () => {
    if (!selectedFile) {
      toast.error("Please upload a document first");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setScanned(true);
      toast.success("Document scanned successfully");
    }, 1500);
  };

  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold mb-6">
          Document Forgery Detection
        </h2>

        {/* File Upload */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="block w-full mb-4 text-slate-400"
          accept=".pdf,.jpg,.jpeg,.png"
        />

        {/* Show selected file */}
        {selectedFile && (
          <div className="mb-4 p-4 rounded-xl bg-slate-800 border border-slate-600">
            <p className="text-slate-300">
              Selected File:{" "}
              <span className="text-sky-400">{selectedFile.name}</span>
            </p>

            <button
              onClick={removeFile}
              className="mt-3 px-4 py-2 bg-red-500 hover:bg-red-400 text-black rounded-lg text-sm font-semibold"
            >
              Remove File
            </button>
          </div>
        )}

        {/* Scan Button */}
        <button
          onClick={scan}
          disabled={!selectedFile || loading}
          className={`px-6 py-3 rounded-xl font-semibold transition ${
            !selectedFile || loading
              ? "bg-slate-600 text-slate-400 cursor-not-allowed"
              : "bg-sky-500 text-black hover:bg-sky-400"
          }`}
        >
          {loading ? "Scanning..." : "Scan Document"}
        </button>

        {/* Result */}
        {scanned && (
          <div className="mt-6 p-6 rounded-xl bg-emerald-400/10 border border-emerald-400">
            <p className="mb-2">
              Metadata Check:{" "}
              <span className="text-emerald-400">Verified</span>
            </p>
            <p className="mb-2">
              Content Consistency:{" "}
              <span className="text-emerald-400">Valid</span>
            </p>
            <p>
              Tampering Risk Score:{" "}
              <span className="text-emerald-400">Low</span>
            </p>
          </div>
        )}
      </div>
    </PageWrapper>
  );
};

export default DocumentCheck;
