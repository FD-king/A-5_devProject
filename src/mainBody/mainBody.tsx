import TechCard from "./techCard";
import type { Itechnology } from "../typesFolder/techCardType";
import { use } from "react";
import Stack from "./Stack";

const MainBody = ({
  techDataPromise,
}: {
  techDataPromise: Promise<Itechnology[]>;
}) => {
  const techData = use(techDataPromise);
  return (
    <div className="container mx-auto mt-20 grid grid-cols-4 gap-10 px-5">
      <div className="col-span-3 grid grid-cols-3 gap-10">
        {techData.map((tech: Itechnology) => {
          return <TechCard techData={tech} />;
        })}
      </div>

      <div className="col-span-1">
        <Stack />
      </div>
    </div>
  );
};

export default MainBody;
