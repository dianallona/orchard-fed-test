import { default as CommonImage } from "../ui/common-image";

const images = [
  {
    defaultImage: "Image-01@2x.jpg",
    smallScreenImage: "Image-01.jpg",
  },
  {
    defaultImage: "Image-02@2x.jpg",
    smallScreenImage: "Image-02.jpg",
  },
  {
    defaultImage: "Image-03@2x.jpg",
    smallScreenImage: "Image-03.jpg",
  },
];

const ComponentO1 = () => {
  const getImageList = () => {
    return images.map((values, index) => (
      <CommonImage
        key={`component-01_${values.defaultImage}_${index}`}
        folderName="component-01"
        {...values}
      />
    ));
  };

  return (
    <section className="grid gap-14">
      <div className="grid gap-4">{getImageList()}</div>
      <div className="grid gap-14">
        <div className="grid gap-10">
          <h1 className="text-xl font-light underline underline-offset-[16px]">
            ANSWER YOUR BODY&apos;S NEEDS
          </h1>
          <p className="text-base font-light ">
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
