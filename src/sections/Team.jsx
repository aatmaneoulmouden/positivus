import { Button, Heading, Member } from "../components";
import { members } from "../data";

const Team = () => {
  const displayTeamMembers = members.map((member, index) => (
    <Member key={index} {...member} />
  ));
  return (
    <section className="section">
      <div className="container max-w-full">
        <Heading
          title="Team"
          subtitle="Meet the skilled and experienced team behind our successful digital marketing strategies"
          paragraphWidth="lg:max-w-[473px]"
        />
        <div className="content-wrapper mt-10 lg:mt-20">
          <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {displayTeamMembers}
          </div>
          <Button
            role="button"
            type="secondary"
            scrollto="team"
            label="See all team"
            classes="w-full md:w-fit block ml-auto mt-9 lg:mt-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
