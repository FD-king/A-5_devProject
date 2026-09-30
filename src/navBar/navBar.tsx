import navBarLogo from "../assets/logo-text.png";
const NavBar = () => {
  return (
    <div className="grid grid-cols-3 gap-120 items-center justify-items-center container mx-auto">
      <div>
        <img src={navBarLogo} alt="" />
      </div>
      <div className="flex gap-7.25">
        <a className="text-[#DB2777]" href="">
          Home
        </a>
        <a href="">Technologies</a>
        <a href="">Projects</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </div>
      <div>
        <a className="text-[#334155] mr-5" href="">
          Sign In
        </a>
        <button className="btn btn-active px-5 bg-[#D91B7E] rounded-full">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default NavBar;
