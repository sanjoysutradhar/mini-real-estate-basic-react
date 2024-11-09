import image01 from "../../images/team/team-01.png";
import image02 from "../../images/team/team-02.png";
import image03 from "../../images/team/team-03.png";
import image04 from "../../images/team/team-04.png";
import SectionHeader from "./SectionHeader";
import TeamMember from "./TeamMember";
function TeamMemberSection() {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <SectionHeader
              name="Our Team Members"
              title="Our Clients"
              details="There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form."
            />
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center">
          <TeamMember
            name="Melissa Tatcher"
            designation="Marketing Expert"
            image={image01}
          />
          <TeamMember
            name="Stuard Ferrel"
            designation="Digital Marketer"
            image={image02}
          />
          <TeamMember
            name="Eva Hudson"
            designation="Creative Designer"
            image={image03}
          />
          <TeamMember
            name="Jackie Sanders"
            designation="Founder of Facebook"
            image={image04}
          />
        </div>
      </div>
    </section>
  );
}

export default TeamMemberSection;
