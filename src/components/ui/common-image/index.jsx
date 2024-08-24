import classNames from "classnames";
import Image from "next/image";

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
        priority
      />
    </picture>
  );
};

export default CommonImage;
