'use client';

import Image from 'next/image';
import { FaApple } from 'react-icons/fa6';
import { FaGooglePlay } from 'react-icons/fa';

export default function DownloadApp() {
  return (
    <section className="relative flex flex-col min-991:flex-row items-center justify-center bg-[#003b46] text-white pt-16 pb-10 px-6 md:px-12 overflow-hidden">
      {/* Background Design (Optional) */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30"
        style={{ backgroundImage: 'url(/assets/bg.png)' }}
      ></div>

      {/* Mobile Mockup */}
      <div className="relative w-[250px] h-[400px] md:w-[400px] md:h-[600px] lg:w-[500px] lg:h-[700px] overflow-hidden mt-16">
        <Image
          src="/assets/img2.png"
          alt="App Mockup"
          width={300}
          height={900}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Text & Download Buttons */}
      <div className="relative z-10 text-center min-991:text-left md:ml-10 max-w-lg">
        <p className="uppercase text-sm tracking-wide mb-2">Try on mobile</p>
        <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
          Download our app for free
        </h2>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="rounded-xl w-fit overflow-hidden bg-[#090914] border-2 px-6 py-2 border-[#7F60F9] flex items-center gap-2"
          >
            <FaApple size={26} />{' '}
            <div>
              <p className="text-[#ffffffba] text-[10px]">
                DOWNLOAD ON THE
                <span className="block text-white text-lg">App Store</span>
              </p>
            </div>
          </a>
          <a
            href="#"
            className="w-fit rounded-xl overflow-hidden bg-[#090914] border-2 px-8 py-2 border-[#6DDCFF] flex items-center gap-2"
          >
            <FaGooglePlay />{' '}
            <div>
              <p className="text-[#ffffffba] text-[10px]">
                GET IT ON
                <span className="block text-white text-lg">Google Play</span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
