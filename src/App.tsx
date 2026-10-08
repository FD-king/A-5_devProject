import { Suspense } from "react";
import HeroSection from "./heroSection/heroSection.tsx";
import MainBody from "./mainBody/mainBody.tsx";
import NavBar from "./navBar/navBar.tsx";
import { Toaster } from "react-hot-toast";
import Footer from "./footer/footer.tsx";

const TechCardFetch = async () => {
  const response = await fetch(`${import.meta.env.BASE_URL}technologies.json`);
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
        <Footer />
      </div>
    </>
  );
}

export default App;
