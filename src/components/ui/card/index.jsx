import Link from "next/link";
import { memo } from "react";
import CommonImage from "../common-image";

const Card = ({ image, title, description }) => {
  return (
    <div>
      <CommonImage
        imageClassName="border-b-4 border-alert hover:scale-110 transition ease-in-out delay-150 duration-300"
        {...image}
      />
      <h2 className="mt-8 text-base">{title}</h2>
      <p className="mt-4 mb-8 text-sm font-thin">{description}</p>
      <Link
        href="#"
        className="hover:font-semibold underline underline-offset-8 decoration-alert"
      >
        READ MORE
      </Link>
    </div>
  );
};

export default memo(Card);
