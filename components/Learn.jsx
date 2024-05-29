// components/Learn.js
export default function Learn() {
  return (
    <section className="bg-[#171A24] text-white py-20">
      <h2 className="text-3xl font-bold mb-12 ml-8 md:ml-[335px]">
        What You Will Learn
      </h2>

      <div className="text-lg max-w-3xl mx-auto space-y-4 ml-2 md:ml-[335px] grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
        <div className="flex gap-4">
          <img src="/plus.svg" alt="plus icon" className="w-[25px] h-[25px]" />
          <div className="flex flex-col gap-4">
            <p>AI-Integrated Cybersecurity Techniques</p>
            <p className="text-[#A9A7B0]">
              Learners will develop the ability to integrate AI tools and
              technologies into cybersecurity practices. This includes using AI
              for ethical hacking tasks such as reconnaissance, vulnerability
              assessments, penetration testing, and incident response.  
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <img src="/plus.svg" alt="plus icon" className="w-[25px] h-[25px]" />
          <div className="flex flex-col gap-4">
            <p>Threat Analysis and Anomaly Detection</p>
            <p className="text-[#A9A7B0]">
              Students will gain skills in applying machine learning algorithms
              to detect unusual patterns and behaviors that indicate potential
              security threats. This skill is crucial for preemptively
              identifying and mitigating risks before. 
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <img src="/plus.svg" alt="plus icon" className="w-[25px] h-[25px]" />
          <div className="flex flex-col gap-4">
            <p>Automated Security Protocol Optimization</p>
            <p className="text-[#A9A7B0]">
              Students will be equipped to utilize AI to dynamically adjust and
              optimize security protocols based on real-time data analysis and
              threat assessment. Learners will explore how AI algorithms can
              predict and respond to potential security breaches by
              automatically tweaking firewall rules, security configurations,
              and other protective measures. 
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <img src="/plus.svg" alt="plus icon" className="w-[25px] h-[25px]" />
          <div className="flex flex-col gap-4">
            <p>AI for Identity and Access Management (IAM)</p>
            <p className="text-[#A9A7B0]">
              Learners will understand how to apply AI to enhance IAM systems,
              crucial for maintaining secure access to resources within an
              organization. This involves using AI to improve authentication
              processes and manage user permissions more dynamically and
              securely. 
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 justify-center items-center my-6">
        <div className="w-[30px] h-[30px] border border-white rounded-full flex justify-center items-center">
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
        </div>
        <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
        <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
        <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
      </div>
    </section>
  );
}
