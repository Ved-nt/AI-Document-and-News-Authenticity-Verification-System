import React from "react";
import {gsap} from "gsap";
import PageWrapper from "../components/PageWrapper";

const About = () => {
  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold mb-6">About the Project</h2>

        <p className="text-slate-300 mb-4">
          This project uses AI and Machine Learning techniques to detect fake news and document forgery.
        </p>

        <h3 className="text-xl font-semibold text-sky-400 mb-2">What is GCN?</h3>
        <p className="text-slate-300 mb-4">
          Graph Convolutional Networks model text as graphs, improving contextual understanding.
        </p>

        <h3 className="text-xl font-semibold text-sky-400 mb-2">Future Scope</h3>
        <p className="text-slate-300">
          Image forgery detection, deepfake analysis, and metadata forensics.
        </p>
      </div>
    </PageWrapper>
  );
};

export default About;
