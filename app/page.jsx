// pages/index.js
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Prerequisites from "../components/Prerequisites";
import ExamDetails from "../components/ExamDetails";
import Modules from "../components/Modules";
import Learn from "../components/Learn";
import Opportunities from "../components/Opportunities";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-black overflow-hidden">
      <Head>
        <title>AI+ Ethical Hacker™ Certification</title>
        <meta
          name="description"
          content="AI+ Ethical Hacker certification details and information."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <Prerequisites />
      <ExamDetails />
      <Modules />
      <Learn />
      <Opportunities />
      <Footer />
    </div>
  );
}
