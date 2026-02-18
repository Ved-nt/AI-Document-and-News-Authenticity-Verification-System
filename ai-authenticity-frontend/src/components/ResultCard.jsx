import React,{ useEffect, useRef } from "react";
import { gsap } from "gsap";

const ResultCard = ({ result }) => {
  const bar = useRef(null);
  const confidence = result.confidence * 100;
  const isReal = result.prediction === "REAL";

  useEffect(() => {
    gsap.fromTo(
      bar.current,
      { width: "0%" },
      { width: `${confidence}%`, duration: 1 }
    );
  }, []);

  return (
    <div
      className={`mt-6 p-6 rounded-xl border ${
        isReal
          ? "border-emerald-400 bg-emerald-400/10"
          : "border-red-400 bg-red-400/10"
      }`}
    >
      <h3 className="text-xl font-semibold">{result.prediction}</h3>

      <div className="w-full h-2 bg-slate-700 rounded mt-3 overflow-hidden">
        <div
          ref={bar}
          className={`h-full ${isReal ? "bg-emerald-400" : "bg-red-400"}`}
        />
      </div>

      <p className="mt-2 text-sm text-slate-300">
        Confidence: {confidence.toFixed(2)}%
      </p>
    </div>
  );
};

export default ResultCard;
