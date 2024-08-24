import classNames from "classnames";
import { default as CommonImage } from "../ui/common-image";

const images = [
  {
    alt: "component-01_Image-01",
    defaultImageUrl: "/assets/component-01/Image-01@2x.jpg",
    smallScreenImageUrl: "/assets/component-02/Image-01.jpg",
  },
  {
    alt: "component-01_Image-02",
    defaultImageUrl: "/assets/component-01/Image-02@2x.jpg",
    smallScreenImageUrl: "/assets/component-02/Image-02.jpg",
  },
  {
    alt: "component-01_Image-03",
    defaultImageUrl: "/assets/component-01/Image-03@2x.jpg",
    smallScreenImageUrl: "/assets/component-02/Image-03.jpg",
  },
];

const ComponentO1 = () => {
  const getImageList = () => {
    return images.map((values, index) => (
      <CommonImage
        className={classNames({
          "sm:row-span-2": index === 0,
        })}
        key={`${values.alt}_${index}`}
        {...values}
      />
    ));
  };

  return (
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
            bodies. Author Mark Schatzer believes our body naturally devolops an
            appetite for the foods and nutrients it needs to be healthy, but
            that artificial flavourings are getting in the way. This can be
            reversed by focusing on high-quality ingredients and being mindful
            as your appetite guides you to consume according to your body&apos;s
            needs.
          </p>
        </div>
        <div className="grid gap-4">
          <h2 className="text-alert font-medium text-base">BE MINDFUL</h2>
          <p className="text-base font-semibold">
            Sourcing local or organic food is a good way to start being more
            mindful about what you&apos;re cooking and eating
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComponentO1;
