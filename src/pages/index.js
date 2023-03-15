import Image from "next/image";
import { Inter } from "next/font/google";
import Guitar from "../assets/guitar.jpg";
import WebsiteLayout from "@/layouts/WebsiteLayout";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <WebsiteLayout>
        <div className=" container-image-home 2xl:w-40vw xl:w-50vw sm:w-50vw ">
          <div className="container-image ">
            <Image
              className="border-1 border-color-secondary w-100%"
              src={Guitar}
              alt="Guitar Image Home"
              width={500}
              height={500}
            />
          </div>
          <div className=" lg:p-8 md:p-4 sm:p-4 p-4  text-color-secondary font-normal">
            <p className="text-xl lg:text-20px md:text-20px sm:text-16px text-18px text-center">
              I have been passionnate about music ever since I was very young,
              after studying cabinet-making and instrument building for 9 years,
              I opened my workshop next to Paris in Vincennes, France. I am now
              specialised in building classical and romantic guitars, following
              the Spanish and French traditions.
            </p>
            <span className="border-1 border-black mx-auto  w-75% block mt-5"></span>
          </div>
        </div>
      </WebsiteLayout>
    </>
  );
}

// MD:CSS EST POUR ECRAN LARGE ET PRIS D'ABORD EN PRIORITE
// CSS DIRECT EST SOIT PRIS EN PRIORITE SI
// IL YA PAS DE MD: SOIT PRIS EN SECOND LORSQUE IL YA UN MD:
