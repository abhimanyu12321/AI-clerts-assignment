// components/ExamDetails.js
export default function ExamDetails() {
  return (
    <section className="bg-[#171A24] text-white py-12">
      <h2 className="text-3xl font-bold mb-10 ml-10 md:ml-[335px]">
        Exam Details
      </h2>
      <div className="container mx-auto text-center flex flex-col md:flex-row justify-center gap-6 mb-4">
        <img src="/exam.png" alt="image" className=" w-[400px] h-[286px]" />
        <div className="right w-[400px] h-[286px] grid grid-cols-2 gap-4">
          <div className="flex flex-col justify-center items-center bg-[#2A2E36] ">
            <p>Modules</p>
            <p className="text-3xl font-bold">12</p>
          </div>

          <div className="flex flex-col justify-center items-center bg-[#2A2E36] ">
            <p>Examination</p>
            <p className="text-3xl font-bold">1</p>
          </div>

          <div className="flex flex-col justify-center items-center bg-[#2A2E36] ">
            <p>50 MCQs</p>
            <p className="text-xl font-bold">90 Minutes</p>
          </div>

          <div className="flex flex-col justify-center items-center bg-[#2A2E36] ">
            <p>Passing Score</p>
            <p className="text-3xl font-bold">70%</p>
          </div>
        </div>
      </div>
    </section>
  );
}
