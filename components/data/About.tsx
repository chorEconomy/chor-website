import Image from 'next/image';
import aboutImg from '../../public/assets/about-img.png';

const About = () => {
  return (
    <section id="about" className="align-element mt-16 md:mt-[80px] mb-[100px]">
      <div className="text-center pb-10 md:pb-14">
        <div
          className=" flex justify-center items-center gap-1
        "
        >
          <span className="bg-[#008080] w-3  h-2 block"></span>
          <p className="font-semibold text-lg"> Process</p>
        </div>

        <h2 className="font-sub-heading !text-[#008080]">About the app</h2>
        <p className="pt-[18px] text-[#323232] font-medium text-lg md:text-2xl max-w-[800px] w-full mx-auto">
          Chore Economy helps you manage chores, instill responsibility, and
          track progress in one place
        </p>
      </div>
      <div className="grid gap-6 hero text-center md:text-left text-[#282828]">
        <div>
          <h4 className="text-[#008080] pb-3 font-bold text-lg md:text-2xl">
            Take a Look Around The App
          </h4>
          <p>
            Chore App is your all-in-one tool to streamline household chores,
            teach kids essential life skills, and encourage financial
            responsibility. Parents can easily list tasks, while kids choose the
            ones they want to complete. Track progress, reward efforts, and
            watch as kids learn accountability in a fun, practical way.
          </p>
          <p className="pt-4">
            But it doesn’t end there. Chore App also helps kids set savings
            goals, manage their earnings, and even use their money for
            parent-approved expenses. This hands-on approach makes learning
            about money, goal-setting, and responsibility engaging and
            effective.
          </p>
          <div className="flex gap-7 mt-8 ">
            <div className=" relative">
              <div className="absolute top-[2px] left-[2px] w-full h-full border-2 border-black bg-black rounded-[14px]"></div>
              <button className="primary-btn !bg-[#008080] !text-white">
                Download app
              </button>
            </div>{' '}
          </div>
        </div>
        <div className=" overflow-hidden rounded-lg">
          <Image src={aboutImg} alt="chore mockup" />
        </div>
      </div>
    </section>
  );
};
export default About;
