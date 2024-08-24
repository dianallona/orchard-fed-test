import Image from "next/image";
import { memo } from "react";

const CommonImage = (props) => {
  const { folderName, defaultImage, smallScreenImage } = props;

  return (
    <picture>
      <source
        media="(max-width: 320px)"
        srcSet={`/assets/${folderName}/${smallScreenImage}`}
      />
      <Image
        src={`/assets/${folderName}/${defaultImage}`}
        alt={`${folderName}-${defaultImage}`}
        layout="responsive"
        width={500}
        height={300}
      />
    </picture>
  );
};

export default memo(CommonImage);
