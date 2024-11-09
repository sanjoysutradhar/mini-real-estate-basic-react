import FeatureItem from "./FeatureItem";
import SectionHeader from "./SectionHeader";

const featureList = [
  {
    id: 1,
    title: "Premium Property Listings",
    details:
      "Discover an array of hand-picked properties that meet the highest standards of luxury and comfort.",
  },
  {
    id: 2,
    title: "Personalized Property Matching",
    details:
      "Our advanced matching system pairs you with properties that align with your specific needs and desires.",
  },
  {
    id: 3,
    title: "Expert Guidance and Support",
    details:
      "Benefit from the expertise of our dedicated team of real estate professionals.",
  },
  {
    id: 4,
    title: "Virtual Tours",
    details:
      "Take advantage of our cutting-edge virtual tours and 3D walkthroughs to explore properties from the comfort of your home.",
  },
];

export default function FeatureSection() {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <SectionHeader
          name="Features"
          title="Main Features Of Play"
          details="There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form."
        />

        <div className="-mx-4 flex flex-wrap">
          {featureList.map((list) => (
            <FeatureItem
              key={list.id}
              title={list.title}
              details={list.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
