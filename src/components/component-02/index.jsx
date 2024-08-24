import Card from "../ui/card";

const cardContents = [
  {
    image: {
      alt: "component-02_Image-01",
      defaultImageUrl: "/assets/component-02/Image-01@2x.jpg",
      smallScreenImageUrl: "/assets/component-02/Image-01.jpg",
    },
    title: "Summer Lunch Menu By Mark Best",
    description: `AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.`,
  },
  {
    image: {
      alt: "component-02_Image-02",
      defaultImageUrl: "/assets/component-02/Image-02@2x.jpg",
      smallScreenImageUrl: "/assets/component-02/Image-02.jpg",
    },
    title: "A Traditional Christmas Eve, Mark Best Style",
    description: `One of Australia's best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests.`,
  },
  {
    image: {
      alt: "component-02_Image-03",
      defaultImageUrl: "/assets/component-02/Image-03@2x.jpg",
      smallScreenImageUrl: "/assets/component-02/Image-03.jpg",
    },
    title: "Taking Taste Further",
    description: `This exclusive cookbook gives you all the know-how you need. We've designed it to make sure you get the most of our products - and the best out of your food.`,
  },
];

const Component02 = () => {
  const getCardContents = () => {
    return cardContents.map((values, index) => (
      <Card key={`${values.image.alt}_${index}`} {...values} />
    ));
  };
  return (
    <section className="grid gap-12">
      <h1 className="text-2xl font-thin text-center">ALL THE BEST FROM AEG</h1>
      <div className="grid md:grid-cols-3 md:gap-6 lg:gap-12 gap-12">
        {getCardContents()}
      </div>
    </section>
  );
};

export default Component02;
