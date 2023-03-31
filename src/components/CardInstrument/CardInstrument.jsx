import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

const CardInstrument = ({ id, name, cover }) => {
  return (
    <div>
      <div className="w-60 m-1 bg-white border border-gray-200 rounded-lg shadow  ">
        <Link
          href={{
            pathname: `/models/${id}`,
          }}
          as={`/models/${id}`}
          passHref={true}
        >
          <Image
            className="rounded-t-lg w-100% mt-5"
            src={cover}
            alt="Guitar Modele"
            width={300}
            height={300}
          />
        </Link>
        <div className="p-5 text-center">
          <Link
            href={{
              pathname: `/models/${id}`,
            }}
            as={`/models/${id}`}
          >
            <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-color-secondary">
              {name}
            </h5>
          </Link>
          <Link
            href={{
              pathname: `/models/${id}`,
            }}
            as={`/models/${id}`}
            className="inline-flex items-center px-3 py-2 transition-all hover:border-color-secondary text-sm hover:bg-color-secondary hover:text-white font-medium text-center text-color-secondary bg-transparent  border-1 border-black focus:ring-4 focus:outline-none"
          >
            <Icon icon="line-md:arrow-small-right" width="25" height="25" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardInstrument;
