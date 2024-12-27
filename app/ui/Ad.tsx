import Image from "next/image";
import addOne from "../../public/Images/adTwo_ajinostores.svg";
import addTwo from "../../public/Images/adOne_ajinostores.svg";

const Ad = () => {
  return (
    <section className="flex flex-col md:flex-row py-10 justify-center items-center gap-7">
      <div className="relative max-w-[570px] w-full max-h-[300px] cursor-pointer group">
        <Image
          src={addOne}
          alt=""
          className="w-full h-full object-fill transition-all group-hover:scale-90"
        />
        <ul className="absolute md:left-[190px] left-[100px] top-[70px] md:top-[120px] z-10 flex flex-col items-center justify-center">
          <li>
            <h1 className="text-white font-semibold text-2xl">LOOKBOOK 2023</h1>
          </li>
          <li>
            <h2 className="text-white font-semibold text-base">MAKE LOVE THIS BOOK</h2>
          </li>
        </ul>
      </div>

      <div className="relative max-w-[570px] w-full max-h-[300px] cursor-pointer group">
        <Image
          src={addTwo}
          alt=""
          className="w-full h-full object-fill transition-all group-hover:scale-90"
        />
        <ul className="absolute md:left-[190px] left-[100px] top-[70px] md:top-[120px] z-10 flex flex-col items-center justify-center">
          <li>
            <h1 className="text-white font-semibold text-xl">SUMMER SALE</h1>
          </li>
          <li>
            <h1 className="text-white font-semibold text-4xl">UP TO 70%</h1>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Ad;
