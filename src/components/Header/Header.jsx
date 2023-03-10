import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TAB = [
  { label: "Home", path: "" },
  { label: "Blog", path: "" },
  { label: "Experience", path: "" },
  { label: "Skills", path: "" },
  { label: "Portfolios", path: "" },
  { label: "Contact", path: "" },
  { label: "Sign in", path: "" },
];
const tabStyle =
  "mx-[5px] text-lg cursor-pointer transition duration-300 hover:scale-110 py-[5px] px-[15px]";
const Header = () => {
  const memberInfo = useSelector((state) => state.isMemberInfo);

  return (
    <header className="w-full h-[70px] bg-[#242424] text-white p-5 fixed top-0 left-0 z-[9999]">
      <section className="mx-auto w-[70%] flex justify-between items-center">
        <section>
          <p className="font-semibold text-xl">Kuo Shuan Lin's Web</p>
        </section>
        <section className="flex items-center">
          {TAB.filter(
            (tab) => memberInfo?.userName && tab.label !== "Sign in"
          ).map((tab) => (
            <Link
              to={`/${tab.label.toLocaleLowerCase().replace(/\s/g, "")}`}
              className={`${tabStyle} ${
                tab.label === "Sign in" &&
                "rounded-full bg-purple-400 !text-white font-bold hover:bg-purple-600"
              }`}
            >
              {tab.label}
            </Link>
          ))}
          {memberInfo?.userName && (
            <section className="text-sm">
              <p className="px-1">Hi! {memberInfo.userName}</p>
              <p className="p-1 bg-[#1d1d1d] rounded-lg">
                階級：{memberInfo.class}
              </p>
            </section>
          )}
        </section>
      </section>
    </header>
  );
};

export default Header;
