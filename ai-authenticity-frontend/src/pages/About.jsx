import React,{ useEffect, useRef } from "react";
import { gsap } from "gsap";
import PageWrapper from "../components/PageWrapper";

const About = () => {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(ref.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
  }, []);

  return (
    <PageWrapper>
    <div ref={ref} className="max-w-3xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-semibold mb-6">About the Project</h2>

      <p className="text-slate-300 mb-4">
        This project is an AI-based authenticity verification system
        designed to detect fake news and document forgery.
      </p>

      <h3 className="text-xl font-semibold text-sky-400 mb-2">What is GCN?</h3>
      <p className="text-slate-300 mb-4">
        Graph Convolutional Networks (GCN) represent text as graphs where
        words are nodes and relationships form edges, allowing better
        contextual understanding.
      </p>

      <h3 className="text-xl font-semibold text-sky-400 mb-2">How It Works</h3>
      <ul className="list-disc list-inside text-slate-300 mb-4">
        <li>Text preprocessing and cleaning</li>
        <li>Graph-based feature extraction</li>
        <li>ML classification with confidence score</li>
      </ul>

      <h3 className="text-xl font-semibold text-sky-400 mb-2">Future Scope</h3>
      <p className="text-slate-300">
        Image forgery detection, deepfake analysis, and document metadata
        forensics.
      </p>
    </div>
    </PageWrapper>
  );
};

export default About;
