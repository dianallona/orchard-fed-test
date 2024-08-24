import classNames from "classnames";
import Image from "next/image";
import { memo } from "react";

const CommonImage = ({
  alt,
  defaultImageUrl,
  smallScreenImageUrl,
  imageClassName,
  ...others
}) => {
  return (
    <picture {...others}>
      <source media="(max-width: 425px)" srcSet={smallScreenImageUrl} />
      <Image
        src={defaultImageUrl}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        className={classNames(imageClassName, "w-full h-auto")}
      />
    </picture>
  );
};

export default memo(CommonImage);
