/* eslint-disable @next/next/no-img-element */
// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="flex flex-col justify-center items-center">
            <img
              src="/footerlogo.svg"
              alt="AI CERTs Logo"
              className="h-10 mb-4 md:mb-0"
            />
            <h2 className="text-lg font-bold mt-20">Newsletter Signup</h2>
            <div className="flex flex-col ">
              <div className="flex my-2">
                <div className="mailicon flex justify-center items-center">
                  <img src="/mail.svg" alt="mail icon" />
                </div>
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="bg-black text-white p-2 rounded-l  outline-none border-b"
                />
                <button className="bg-black text-white p-2 rounded-r">
                  <span className="sr-only">Subscribe</span> &rarr;
                </button>
              </div>
            </div>

            <div className="flex mt-8 space-x-4">
              <img src="/facebook.svg" alt="Facebook" className="h-6 w-6" />
              <img src="/youtube.svg" alt="YouTube" className="h-6 w-6" />
              <img src="/instagram.svg" alt="Instagram" className="h-6 w-6" />
              <img src="/linkedin.svg" alt="LinkedIn" className="h-6 w-6" />
              <img src="/twitter.svg" alt="Twitter" className="h-6 w-6" />
            </div>
          </div>

          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-12">About</h3>
            <ul className="space-y-2 text-[#A9A7B0]">
              <li>
                <a href="#" className="hover:underline">
                  Why AI Certs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Accreditation
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Meet Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Trademarks
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Articles
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Press Release
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-12">Certifications</h3>
            <ul className="space-y-2 text-[#A9A7B0]">
              <li>
                <a href="#" className="hover:underline">
                  AI+ Professional™
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  AI+ Technical™
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blockchain+ Professional™
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blockchain+ Technical™
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  View All
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-12">Authorized</h3>
            <ul className="space-y-2 text-[#A9A7B0]">
              <li>
                <a href="#" className="hover:underline">
                  Authorized Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Authorized Trainers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* bottom section */}
      <div className="border w-[80vw] mx-auto border-[#2A2E36]"></div>
      <div className="text-left my-8 text-[#A9A7B0] ml-[135px]">
        <p>© AI CERTs™, Inc. All Rights Reserved</p>
      </div>
    </footer>
  );
}
