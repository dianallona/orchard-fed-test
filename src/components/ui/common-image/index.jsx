import Image from "next/image";
import { memo } from "react";

const CommonImage = (props) => {
  const { alt, defaultImageUrl, smallScreenImageUrl, ...others } = props;

  return (
    <picture {...others}>
      <source media="(max-width: 425px)" srcSet={smallScreenImageUrl} />
      <Image
        src={defaultImageUrl}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />
    </picture>
  );
};

export default memo(CommonImage);
