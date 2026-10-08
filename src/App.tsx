import { Suspense } from "react";
import HeroSection from "./heroSection/heroSection.tsx";
import MainBody from "./mainBody/mainBody.tsx";
import NavBar from "./navBar/navBar.tsx";
import { Toaster } from "react-hot-toast";

const TechCardFetch = async () => {
  const response = await fetch("/public/technologies.json");
  const data = await response.json();
  return data;
};

function App() {
  const techDataPromise = TechCardFetch();
  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />;
      <div className="container mx-auto">
        <NavBar />
        <HeroSection />
        <Suspense fallback={<div>Loading...</div>}>
          <MainBody techDataPromise={techDataPromise} />
        </Suspense>
      </div>
    </>
  );
}

export default App;
