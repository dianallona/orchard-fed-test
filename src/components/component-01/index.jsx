"use client";
import classNames from "classnames";
import { memo, useCallback, useState } from "react";
import { default as CommonImage } from "../ui/common-image";
import Modal from "../ui/modal";

const images = [
  {
    alt: "component-01_Image-01",
    defaultImageUrl: "/assets/component-01/Image-01@2x.jpg",
    smallScreenImageUrl: "/assets/component-01/Image-01.jpg",
  },
  {
    alt: "component-01_Image-02",
    defaultImageUrl: "/assets/component-01/Image-02@2x.jpg",
    smallScreenImageUrl: "/assets/component-01/Image-02.jpg",
  },
  {
    alt: "component-01_Image-03",
    defaultImageUrl: "/assets/component-01/Image-03@2x.jpg",
    smallScreenImageUrl: "/assets/component-01/Image-03.jpg",
  },
];

const ComponentO1 = () => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [active, setActive] = useState(null);

  const handleOnClickCommonImage = useCallback((value) => {
    // Sets the content of the modal
    setActive(value);

    // Triggers the opening of the modal
    setIsOpenDialog(true);
  }, []);

  /** Get the list of the images */
  const getImageList = () => {
    return images.map((values, index) => (
      <MemoizedCommonImageComponent
        className={classNames({
          "sm:row-span-2": index === 0,
        })}
        key={`${values.alt}_${index}`}
        imageClassName="hover:scale-105 transition ease-in-out delay-150 duration-300 cursor-pointer"
        onClick={() => handleOnClickCommonImage(values)}
        {...values}
      />
    ));
  };

  return (
    <>
      <section className="grid gap-14 xl:gap-7 xl:grid-cols-3">
        <div className="grid gap-4 sm:grid-cols-2 sm:grid-rows-2 xl:col-span-2">
          {getImageList()}
        </div>
        <div className="flex flex-col gap-8">
          <div className="grid gap-8">
            <div className="grid gap-4">
              <h1 className="text-xl xl:text-2xl xl:font-thin font-light">
                ANSWER YOUR BODY&apos;S NEEDS
              </h1>
              <hr />
            </div>
            <p className="text-base font-light xl:text-lg">
              The way ingredients are sourced affects the way we nourish our
              bodies. Author Mark Schatzer believes our body naturally devolops
              an appetite for the foods and nutrients it needs to be healthy,
              but that artificial flavourings are getting in the way. This can
              be reversed by focusing on high-quality ingredients and being
              mindful as your appetite guides you to consume according to your
              body&apos;s needs.
            </p>
          </div>
          <div className="grid gap-4">
            <h2 className="text-alert font-medium text-base">BE MINDFUL</h2>
            <p className="text-base xl:text-lg font-semibold">
              Sourcing local or organic food is a good way to start being more
              mindful about what you&apos;re cooking and eating
            </p>
          </div>
        </div>
      </section>

      <Modal
        open={isOpenDialog}
        onClose={() => {
          //Close the modal
          setIsOpenDialog(false);

          //Remove active state
          setActive(false);
        }}
      >
        {active && (
          <CommonImage
            alt={`${active?.alt}_modal`}
            imageClassName="!h-[calc(100vh-200px)]"
            {...active}
          />
        )}
      </Modal>
    </>
  );
};

/** Utilize react memo, since the CommonImage component above is being rendered in a loop */
const MemoizedCommonImageComponent = memo(CommonImage);

export default ComponentO1;
