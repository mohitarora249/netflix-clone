import Image from "next/image";
import useNavbarTransition from "./use-navbar-transition";

const Navbar = () => {
  const { showTransition } = useNavbarTransition();
  return (
    <div
      className={`flex items-center justify-between ${
        showTransition && "bg-black"
      } h-14 md:h-20 px-2 md:px-6 fixed top-0 w-full transition-all duration-300 ease-in z-10`}
    >
      <div className="relative h-8 md:h-10 w-32">
        <Image
          src={
            "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          }
          alt="Netflix logo."
          fill
        />
      </div>
      <div className="relative h-8 md:h-10 w-8 md:w-10">
        <Image
          src={
            "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          }
          alt="Profile Pic."
          fill
        />
      </div>
    </div>
  );
};

export default Navbar;
