/* eslint-disable @next/next/no-img-element */
// components/Opportunities.js
export default function Opportunities() {
  return (
    <>
      <section className="bg-black text-white py-12 ml-8 md:ml-[335px] ">
        <h2 className="text-3xl font-bold my-12">
          Industry Opportunities after Course Completion
        </h2>
        <div className="flex gap-4 flex-wrap">
          <div className="card bg-[#171A24] py-10 px-2 flex flex-col justify-center items-center gap-4 w-[270px]">
            <img src="/card-icon.svg" alt="icon" />
            <p className="text-[20px]">Cybersecurity Analyst</p>
            <p className="text-[#A9A7B0] text-[15px]">
              Analyzes cyber threats using AI tools, monitors security systems,
              and recommends solutions to enhance network safety.
            </p>
          </div>

          <div className="card bg-[#171A24] py-10 px-2 flex flex-col justify-center items-center gap-4 w-[270px]">
            <img src="/card-icon.svg" alt="icon" />
            <p className="text-[20px]">Cybersecurity Analyst</p>
            <p className="text-[#A9A7B0] text-[15px]">
              Analyzes cyber threats using AI tools, monitors security systems,
              and recommends solutions to enhance network safety.
            </p>
          </div>

          <div className="card bg-[#171A24] py-10 px-2 flex flex-col justify-center items-center gap-4 w-[270px]">
            <img src="/card-icon.svg" alt="icon" />
            <p className="text-[20px]">Cybersecurity Analyst</p>
            <p className="text-[#A9A7B0] text-[15px]">
              Analyzes cyber threats using AI tools, monitors security systems,
              and recommends solutions to enhance network safety.
            </p>
          </div>
        </div>

        <div className="flex gap-4  items-center my-10 mx-auto w-[30vw]">
          <div className="w-[30px] h-[30px] border border-white rounded-full flex justify-center items-center">
            <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          </div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
        </div>
      </section>
      <div className="border w-[80vw] mx-auto border-[#2A2E36]"></div>
    </>
  );
}
