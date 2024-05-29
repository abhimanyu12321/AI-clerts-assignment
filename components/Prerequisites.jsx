// components/Prerequisites.js
export default function Prerequisites() {
  return (
    <section className="bg-black text-white py-20">
      <div className="container md:ml-[335px] ">
        <h2 className="text-[48px] font-bold mb-6">Prerequisites</h2>
        <ul className="space-y-4 text-lg max-w-3xl font-medium text-[#A9A7B0]">
          <li className="flex gap-8  items-center">
            <div className="w-[6px] h-[6px] rounded-full bg-[#CFA935]"></div>
            <span>
              Programming Proficiency: Knowledge of Python, Java, C++,etc for
              automation and scripting.
            </span>
          </li>
          <li className="flex gap-8  items-center">
            <div className="w-[6px] h-[6px] rounded-full bg-[#CFA935]"></div>
            <span>
              Networking Fundamentals: Understanding of networking protocols,
              subnetting, firewalls, and routing.
            </span>
          </li>
          <li className="flex gap-8  items-center">
            <div className="w-[6px] h-[6px] rounded-full bg-[#CFA935]"></div>
            <span>
              Cybersecurity Basics: Familiarity with fundamental cybersecurity
              concepts, including encryption, authentication, access controls,
              and security protocols
            </span>
          </li>
          <li className="flex gap-8  items-center">
            <div className="w-[6px] h-[6px] rounded-full bg-[#CFA935]"></div>
            <span>
              Operating Systems Knowledge: Proficiency in using Windows and
              Linux operating systems.
            </span>
          </li>
          <li className="flex gap-8  items-center">
            <div className="w-[6px] h-[6px] rounded-full bg-[#CFA935]"></div>
            <span>
              Machine Learning Basics: Understanding of machine learning
              concepts, algorithms, and basic implementation.
            </span>
          </li>
          <li className="flex gap-8  items-center">
            <div className="w-[6px] h-[6px] rounded-full bg-[#CFA935]"></div>
            <span>
              Web Technologies: Understanding of web technologies, including
              HTTP/HTTPS protocols, and web servers.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
