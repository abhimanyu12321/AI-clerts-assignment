/* eslint-disable @next/next/no-img-element */
// components/Hero.js
export default function Hero() {
  return (
    <>
      <section
        className="bg-black text-white text-center py-16 flex   flex-col md:flex-row justify-center items-center gap-12"
        style={{
          backgroundImage: "url('/Heroback.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="left max-w-[717px]">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-yellow-500">AI</span>+
          </h1>
          <h1 className="text-5xl font-bold mb-4">Ethical Hacker™</h1>
          <p className="text-[18px] font-medium mb-8 max-w-2xl mx-auto text-[#FFFFFF]">
            CERTIFICATION NUMBER: 1100ABCD
          </p>
          <p className="text-[18px] leading-7 text-[#A9A7B0] my-10">
            The AI+ Ethical Hacker certification delves into the intersection of
            cybersecurity and artificial intelligence, a pivotal juncture in our
            era of rapid technological progress. Tailored for budding ethical
            hackers and cybersecurity experts, it offers comprehensive insights
            into AI transformative impact on digital offense and defense
            strategies. Unlike conventional ethical hacking courses, this
            program harnesses AI power to enhance cybersecurity approaches. It
            caters to tech enthusiasts eager to master the fusion of
            cutting-edge AI methods with ethical hacking practices amidst the
            swiftly evolving digital landscape. The curriculum encompasses four
            key areas, from course objectives and prerequisites to anticipated
            job roles and the latest AI technologies in Ethical Hacking.
          </p>
          <div className="space-x-4">
            <button className="bg-yellow-500 px-4 py-2 rounded m-2">
              Buy Exam Bundle
            </button>
            <button className="bg-yellow-500 px-4 py-2 rounded m-2">
              Download Blueprint
            </button>
            <button className="bg-black border border-yellow-500 text-yellow-500 px-4 py-2 rounded m-2">
              Find a Training Provider
            </button>
          </div>
        </div>
        <div className="right">
          <img
            src="/Hero-right.svg"
            alt="hero Right section image"
            className="w-[400px] h-[400px]"
          />
        </div>
      </section>
      <div className="border border-[#2A2E36] w-screen"></div>
      <img src="/Partners.svg" alt="Image" className="bg-black" />
      <div className="border border-[#2A2E36] w-screen mt-10"></div>

      <ul className="flex text-white gap-6 py-6 ml-10 md:ml-[335px]">
        <li>Prerequesites</li>
        <li>Exam Details</li>
        <li>Modules</li>
        <li>Skilss</li>
        <li>Opportunites</li>
      </ul>

      <div className="border border-[#2A2E36] w-screen"></div>
    </>
  );
}
