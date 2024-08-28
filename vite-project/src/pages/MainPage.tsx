import { useState } from "react";
import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoMdMenu,
} from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
function MainPage() {
  const [isOpenSm, setIsOpenSm] = useState(false);
  const [isOpenLg, setIsOpenLg] = useState(false);

  const openMenuSm = (): void => {
    setIsOpenSm(true);
  };

  const closeMenuSm = (): void => {
    setIsOpenSm(false);
  };

  const openMenuLg = (): void => {
    setIsOpenLg(true);
  };

  const closeMenuLg = (): void => {
    setIsOpenLg(false);
  };

  return (
    <>
      <header className="flex justify-between items-center m-2 p-4 border-2 rounded-lg ">
        <h1 className="text-3xl font-semibold xs:text-lg xs2:text-lg">TITLE</h1>

        <nav className="flex list-none gap-2 mr-2 max-sm:hidden items-center ">
          {" "}
          <li className="font-semibold">Home</li>
          <li className="font-semibold">Profile</li>
          <li className="font-semibold">About</li>
          <li className="font-semibold">Details</li>
          <li>
            {isOpenLg == true ? (
              <>
                {" "}
                <CiMenuKebab
                  onClick={() => closeMenuLg()}
                  className="font-semibold "
                />
                <article className=" absolute mt-[40px] -ml-[50px] gap-2 flex border-2 p-2 rounded-md bg-[#eee] cursor-pointer">
                  <IoLogoFacebook className="max-sm:text-3xl text-[#3b5998] cursor-pointer" />
                  <IoLogoInstagram className="max-sm:text-3xl text-pink-500 cursor-pointer" />
                  <IoLogoGithub className="max-sm:text-3xl" />
                </article>
              </>
            ) : (
              <>
                <CiMenuKebab
                  onClick={() => openMenuLg()}
                  className="font-semibold cursor-pointer "
                />
              </>
            )}
          </li>
        </nav>

        {isOpenSm === false ? (
          <IoMdMenu
            onClick={() => openMenuSm()}
            className="md:hidden  cursor-pointer max-sm:text-3xl max-sm:font-semibold lg:hidden"
          />
        ) : (
          <>
            {" "}
            <div className="">
              <IoClose
                className="max-sm:text-3xl cursor-pointer"
                onClick={() => closeMenuSm()}
              />
              <ul className="xs2:left-[369px] xs:left-[310px]   max-sm:absolute max-sm:-ml-[300px] max-sm:mt-[25px]  max-sm:border-2 max-sm:shadow-md max-sm:w-[300px] max-sm:font-semibold">
                <li className="max-sm:p-2">Home</li>
                <li className="max-sm:p-2">About</li>
                <li className="max-sm:p-2">Details</li>

                <article className=" max-sm:m-4 max-sm:flex max-sm:items-center max-sm:gap-2 max-sm:justify-between  ">
                  <div className="max-sm:flex max-sm:items-center">
                    <img
                      src={`https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png`}
                      alt="프로필이미지"
                      className="w-10 h-10 rounded-2xl"
                    />
                    <p>
                      <span className="pl-2 font-bold">사용자</span>님
                    </p>
                  </div>

                  <div className="max-sm:flex max-sm:gap-1">
                    <IoLogoFacebook className="max-sm:text-3xl max-sm:text-[#3b5998] cursor-pointer" />
                    <IoLogoInstagram className="max-sm:text-3xl max-sm:text-pink-500 cursor-pointer" />
                    <IoLogoGithub className="max-sm:text-3xl cursor-pointer " />
                  </div>
                </article>
              </ul>
            </div>
          </>
        )}
      </header>
    </>
  );
}

export default MainPage;
