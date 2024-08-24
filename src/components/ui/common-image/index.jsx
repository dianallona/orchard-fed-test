import Image from "next/image";
import { memo } from "react";

const CommonImage = (props) => {
  const { alt, defaultImageUrl, smallScreenImageUrl, ...others } = props;

  return (
    <picture {...others}>
      <source media="(max-width: 320px)" srcSet={smallScreenImageUrl} />
      <Image src={defaultImageUrl} alt={alt} width={500} height={300} fill />
    </picture>
  );
};

export default memo(CommonImage);
