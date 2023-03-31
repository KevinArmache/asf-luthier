import React from "react";
import { useRouter } from "next/router";
import WebsiteLayout from "@/layouts/WebsiteLayout";
import Image from "next/image";
import modelsList from "../../json/data.json";

const id = ({ model }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading</h1>;
  }

  return (
    <WebsiteLayout>
      <section className="gallery border-l-2 border-r-2 border-black">
        <br />
        <div className="gallery__item">
          <input
            type="radio"
            id={`img-0`}
            defaultChecked
            name="gallery"
            className="gallery__selector"
          />
          <Image
            src={model.cover}
            alt="guitare-picture"
            width={500}
            height={500}
            className="gallery__img rounded-t-lg mt-5"
          />
          {/* <label htmlFor={`img-0`} className="gallery__thumb">
            <Image
              src={model.cover}
              alt="miniature-guitare"
              width={100}
              height={100}
            />
          </label> */}
        </div>

        {model.images?.map((image) => {
          return (
            <div key={image.id} className="gallery__item">
              <input
                type="radio"
                id={`img-${image.id}`}
                name="gallery"
                className="gallery__selector"
              />
              <Image
                className="gallery__img rounded-t-lg mt-5"
                src={image.src}
                alt="guitare-picture"
                width={500}
                height={500}
              />
              <label htmlFor={`img-${image.id}`} className="gallery__thumb">
                <Image
                  src={image.src}
                  alt="miniature-guitare"
                  width={100}
                  height={100}
                />
              </label>
            </div>
          );
        })}
      </section>
      {/* DETAILs */}
      <h2 className="text-2xl text-color-secondary m-5 p-5 border-b-1 border-black font-bold">
        {model.name}
      </h2>
      <h3 className="text-xl font-bold text-color-secondary">Categorie</h3>
      <span className="text-color-secondary text-lg">{model.categorie}</span>
      <h3 className="text-xl font-bold text-color-secondary ">Description</h3>
      <p className="m-2 md:w-40vw sm:w-70vw text-lg text-center text-color-secondary ">
        {model.description}
      </p>
      <h3 className="text-xl font-bold text-color-secondary">Details</h3>
      <div className="container-details text-center text-color-secondary">
        <span className="text-color-secondary text-lg">
          {" "}
          Nut width: {model.nutWidth}
        </span>
        <br />
        <span className="text-color-secondary text-lg">
          {" "}
          Scale length: {model.scaleLength}
        </span>
        <br />
        <span className="text-color-secondary text-lg">
          {" "}
          Weight: {model.weight}
        </span>
        <br />
        <span className="text-color-secondary text-lg"> Top: {model.top}</span>
        <br />
        <br />
        <br />
        <span className="text-color-secondary text-lg">
          Pictures Courtesy of {model.picturesCourtesy}
        </span>
      </div>
    </WebsiteLayout>
  );
};

// pages/posts/[id].js

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  // const parse = JSON.parse(data);
  const paths = modelsList.map((model) => {
    return {
      params: { id: model.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  const slug = context.params.id;

  let model = modelsList.find((element) => element.id === slug);
  return {
    // Passed to the page component as props
    props: { model },
  };
}

export default id;
