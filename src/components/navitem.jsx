// import Link from "next/link";
const NavItem = ({ text, href }) => {
  return (
    <div className="w-28 h-full text-center text-xl min-w-16 ">
      <a href={href}>
        <p className="hover:text-black hover:bg-white h-full p-4">{text}</p>
      </a>
    </div>
  );
};

export default NavItem;
