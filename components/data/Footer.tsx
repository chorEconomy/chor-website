import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#D9E6E6] pb-10 md:pb-16 pt-16 md:pt-[100px]">
      <div className="align-element">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Left Section - Logo and Description */}
          <div>
            <Image
              src="/assets/logo.png"
              width={120}
              height={50}
              alt="Chore Logo"
            />
            <p className="mt-4 text-sm text-gray-700">
              Chore helps parents assign chores, track earnings, and teach kids
              financial responsibility. Kids complete tasks, earn money, save
              for goals, and learn to manage expenses all in one easy-to-use
              app.
            </p>
          </div>

          {/* Middle Section - Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  About The App
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How The App Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  App Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  App Screenshots
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section - Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 uppercase mb-4">
              Newsletter
            </h4>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button className="bg-[#008080] text-white py-[15px] rounded-md text-sm font-semibold hover:bg-teal-700">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="text-center text-gray-600 text-xs mt-10 border-t pt-5">
          &copy; Copyright 2022, All Rights Reserved by Chore
        </div>
      </div>
    </footer>
  );
};

export default Footer;
