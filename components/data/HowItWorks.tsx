import { howItWorks } from '../common/constants';

const HowItWorks = () => {
  return (
    <section className="align-element my-10  py-10 md:py-16">
      <div className="text-center pb-10 md:pb-14">
        <div
          className=" flex justify-center items-center gap-1
        "
        >
          <span className="bg-[#008080] w-3  h-2 block"></span>
          <p className="font-semibold text-lg"> Process</p>
        </div>

        <h2 className="font-sub-heading !text-[#008080]">How The App Works</h2>
      </div>
      <ul className="flex flex-col md:flex-row gap-4">
        {howItWorks.map((dat) => (
          <li key={dat.id}>
            <span className="bg-[#008080] mx-auto grid place-items-center rounded-full w-[60px] h-[60px] md:w-[80px] md:h-[80px] font-bold text-white text-xl ">
              0{dat.id}
            </span>
            <div className="text-center pt-9">
              <h4 className="text-[#008080] font-bold text-lg md:text-xl pb-3">
                {dat.title}
              </h4>
              <p>{dat.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default HowItWorks;
