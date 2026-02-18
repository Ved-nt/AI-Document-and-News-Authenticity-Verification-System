import React,{ useState } from "react";
import axios from "axios";
import ResultCard from "../components/ResultCard";
import PageWrapper from "../components/PageWrapper";
import toast from "react-hot-toast";

const TextVerifier = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const verify = async () => {
    try {
      setLoading(true);
      const res = await axios.post("http://127.0.0.1:8000/predict", { text });
      setResult(res.data);
      toast.success("Analysis Complete");
    } catch {
      toast.error("Backend not running");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold mb-6">
          Verify News / Text
        </h2>

        <textarea
          className="w-full h-44 p-4 rounded-xl bg-slate-900 border border-slate-700 focus:border-sky-400 outline-none"
          placeholder="Paste text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <p className="text-sm text-slate-500 mt-2">
          Characters: {text.length}
        </p>

        <button
          disabled={!text || loading}
          onClick={verify}
          className="mt-4 px-6 py-3 bg-sky-500 rounded-xl text-black font-semibold 
                     disabled:opacity-50 flex items-center gap-2"
        >
          {loading && (
            <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
          )}
          {loading ? "Analyzing..." : "Verify Authenticity"}
        </button>

        {result && <ResultCard result={result} />}
      </div>
    </PageWrapper>
  );
};

export default TextVerifier;
