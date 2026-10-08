import { Suspense } from "react";
import HeroSection from "./heroSection/heroSection.tsx";
import MainBody from "./mainBody/mainBody.tsx";
import NavBar from "./navBar/navBar.tsx";

const TechCardFetch = async () => {
  const response = await fetch("/public/technologies.json");
  const data = await response.json();
  return data;
};

function App() {
  const techDataPromise = TechCardFetch();
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Suspense fallback={<div>Loading...</div>}>
        <MainBody techDataPromise={techDataPromise} />
      </Suspense>
    </div>
  );
}

export default App;
