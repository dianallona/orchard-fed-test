"use client";
import Link from "next/link";
import { useCallback } from "react";
import CommonImage from "../common-image";

const Card = ({ image, title, description, onClickImage }) => {
  const handleOnClickReadMore = useCallback((e) => {
    //Print the clicked element
    console.log(e?.target || null);
  }, []);

  return (
    <div>
      <CommonImage
        imageClassName="border-b-4 border-alert hover:scale-110 transition ease-in-out delay-150 duration-300 cursor-pointer"
        onClick={() => onClickImage(image)}
        {...image}
      />
      <h2 className="mt-8 text-base font-semibold">{title}</h2>
      <p className="mt-4 mb-8 text-base font-thin text-lightgray">
        {description}
      </p>
      <Link
        href="#"
        className="hover:font-semibold underline underline-offset-8 decoration-alert transition-all ease-in-out delay-100 duration-200"
        onClick={handleOnClickReadMore}
      >
        READ MORE
      </Link>
    </div>
  );
};

export default Card;
