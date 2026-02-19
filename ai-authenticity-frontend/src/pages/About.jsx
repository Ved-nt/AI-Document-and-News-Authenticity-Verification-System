import React from "react";
import { gsap } from "gsap";
import PageWrapper from "../components/PageWrapper";

const About = () => {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          About the Project
        </h2>

        {/* Project Overview */}
        <section className="mb-8">
          <p className="text-slate-300 mb-4">
            The <span className="text-sky-400 font-semibold">
              AI Document & News Authenticity Verification System
            </span>{" "}
            is designed to detect fake news and identify potential document
            forgery using Artificial Intelligence and Machine Learning.
          </p>

          <p className="text-slate-300">
            With the rapid spread of misinformation and digitally altered
            documents, this system aims to provide a fast, intelligent, and
            reliable way to verify textual authenticity.
          </p>
        </section>

        {/* Problem Statement */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-sky-400 mb-3">
            Problem Statement
          </h3>
          <p className="text-slate-300">
            Fake news and forged documents can cause misinformation, financial
            fraud, and social disruption. Traditional verification methods are
            slow and manual. This project provides an AI-driven automated
            solution to detect authenticity in real-time.
          </p>
        </section>

        {/* How System Works */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-sky-400 mb-3">
            How the System Works
          </h3>
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            <li>User enters news or document text in the frontend.</li>
            <li>Frontend sends the text to the FastAPI backend.</li>
            <li>
              The backend processes the text using a trained Machine Learning
              model.
            </li>
            <li>
              The model predicts whether the content is <b>REAL</b> or{" "}
              <b>FAKE</b> and provides a confidence score.
            </li>
            <li>
              The result is displayed with color-coded indicators and a
              confidence progress bar.
            </li>
          </ul>
        </section>

        {/* GCN Section */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-sky-400 mb-3">
            What is GCN?
          </h3>
          <p className="text-slate-300 mb-4">
            Graph Convolutional Networks (GCN) are a type of neural network
            designed to work with graph-structured data. Instead of treating
            text as plain sequences, GCN models relationships between words as
            interconnected nodes in a graph.
          </p>
          <p className="text-slate-300">
            This helps the system understand deeper contextual relationships,
            improving fake news detection accuracy.
          </p>
        </section>

        {/* Technology Stack */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-sky-400 mb-3">
            Technology Stack
          </h3>
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            <li>Frontend: React, Tailwind CSS</li>
            <li>Backend: FastAPI (Python)</li>
            <li>Machine Learning Model: GCN-based classifier</li>
            <li>API Communication: Axios (REST API)</li>
          </ul>
        </section>

        {/* Team Members */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-sky-400 mb-3">
            Team Members
          </h3>
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            <li>Vedant Sharma – Frontend Development</li>
            <li>Divyansh Singhal – Integration</li>
          </ul>
        </section>

        {/* Future Scope */}
        <section>
          <h3 className="text-xl font-semibold text-sky-400 mb-3">
            Future Scope
          </h3>
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            <li>Image and document forgery detection using CNN models</li>
            <li>Deepfake video analysis</li>
            <li>Metadata forensic analysis</li>
            <li>Cloud deployment for public access</li>
            <li>Integration with browser extensions</li>
          </ul>
        </section>
      </div>
    </PageWrapper>
  );
};

export default About;
