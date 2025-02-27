import Image from 'next/image';
import { features } from '../common/constants';
import img from '../../public/assets/featureImg.png';

const Feature = () => {
  return (
    <section id="features" className="align-element my-10  py-10 md:py-16">
      <div className="text-center pb-10 md:pb-14">
        <div
          className=" flex justify-center items-center gap-1
        "
        >
          <span className="bg-[#008080] w-3  h-2 block"></span>
          <p className="font-semibold text-lg"> Process</p>
        </div>

        <h2 className="font-sub-heading !text-[#008080]">Amazing Features</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <ul className="grid gap-14 lg:gap-[100px]" role="list">
          {features.slice(0, 4).map((data) => (
            <li key={data.id} role="listitem">
              <p className="font-bold md:text-lg pb-5">{data.title}</p>
              <div className="flex flex-row-reverse md:flex-row items-start gap-4">
                <p className="flex-1">{data.text}</p>
                <div className="h-[50px] w-[50px] border-y-2 overflow-hidden rounded-md border-[#008080]">
                  <Image
                    className="object-cover w-full h-full"
                    src={data.img}
                    alt={data.title || ''}
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Image
            src={img}
            className="object-cover h-full w-full"
            alt="chor image"
          />
        </div>
        <ul className="grid  gap-14 lg:gap-[100px]" role="list">
          {features.slice(4).map((data) => (
            <li key={data.id} role="listitem">
              <p className="font-bold md:text-lg pb-5">{data.title}</p>
              <div className="flex items-start flex-row-reverse gap-4">
                <p className="flex-1">{data.text}</p>
                <div className="h-[50px] w-[50px] border-y-2 overflow-hidden rounded-md border-[#008080]">
                  <Image
                    className="object-cover w-full h-full"
                    src={data.img}
                    alt={data.title || ''}
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Feature;
