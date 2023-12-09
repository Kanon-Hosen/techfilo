import ProfileCard from "./_components/ProfileCard";
import StudioHero from "./_components/StudioHero";
import { Team } from "./fakeTeam";

function Studio() {
  return (
    <div>
      <StudioHero></StudioHero>
      <div className="my-24 md:px-10 px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-20">
            {Team?.map((t, i) =><ProfileCard teams={t} key={i} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Studio;
