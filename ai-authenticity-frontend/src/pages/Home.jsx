import React,{ useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

const Home = () => {
  const title = useRef(null);
  const desc = useRef(null);
  const buttons = useRef(null);

  useEffect(() => {
    gsap.fromTo(title.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
    gsap.fromTo(desc.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, delay: 0.2 });
    gsap.fromTo(buttons.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, delay: 0.4 });
  }, []);

  return (
    <PageWrapper>
    <section className="flex flex-col items-center justify-center px-6 py-32 text-center">
      <h1 ref={title} className="text-4xl md:text-5xl font-bold max-w-4xl">
        AI Document & News Authenticity Verification System
      </h1>

      <p ref={desc} className="mt-6 max-w-2xl text-slate-300">
        A machine learning–powered system that analyzes textual patterns
        and graph-based relationships to determine whether news or
        documents are authentic or forged.
      </p>

      <div ref={buttons} className="mt-10 flex flex-wrap gap-4">
        <Link
          to="/verify"
          className="px-6 py-3 rounded-lg bg-sky-500 text-slate-900 font-semibold hover:bg-sky-400 transition"
        >
          Verify News / Text
        </Link>

        <Link
          to="/document"
          className="px-6 py-3 rounded-lg border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-slate-900 transition"
        >
          Document Forgery Check
        </Link>

        <Link
          to="/about"
          className="px-6 py-3 rounded-lg text-slate-300 hover:text-sky-400 transition"
        >
          About Project
        </Link>
      </div>
    </section>
    </PageWrapper>
  );
};

export default Home;
