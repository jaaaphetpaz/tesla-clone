import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleNav = () => {
    setMenu(!menu);
  };

  return (
    <div className="flex justify-between items-center px-12 p-4 text-sm font-bold">
      <div>
        <a href="https://tesla.com">
          <img
            src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idGRzLWljb24gdGRzLWljb24tbG9nby13b3JkbWFyayB0ZHMtc2l0ZS1sb2dvLWljb24iIHZpZXdCb3g9IjAgMCAzNDIgMzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjFhOS43IDkuNyAwIDAgMCA3IDdoMTFsLjUuMXYyNy42aDYuOFY3LjNMMjYgN2gxMWE5LjggOS44IDAgMCAwIDctN0gwem0yMzguNiAwaC02Ljh2MzQuOEgyNjNhOS43IDkuNyAwIDAgMCA2LTYuOGgtMzAuM1Ywem0tNTIuMyA2LjhjMy42LTEgNi42LTMuOCA3LjQtNi45bC0zOC4xLjF2MjAuNmgzMS4xdjcuMmgtMjQuNGExMy42IDEzLjYgMCAwIDAtOC43IDdoMzkuOXYtMjFoLTMxLjJ2LTdoMjR6bTExNi4yIDI4aDYuN3YtMTRoMjQuNnYxNGg2Ljd2LTIxaC0zOHpNODUuMyA3aDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3ptMCAxMy44aDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3ptMCAxNC4xaDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3pNMzA4LjUgN2gyNmE5LjYgOS42IDAgMCAwIDctN2gtNDBhOS42IDkuNiAwIDAgMCA3IDd6IiBmaWxsPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4="
            className="h-3"
            alt="Tesla Logo"
          />
        </a>
      </div>
      <div className="hidden lg:inline">
        <ul className="flex justify-center hover:cursor-pointer">
          <a href="https://www.tesla.com/models">
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              Model S
            </li>
          </a>
          <a href="https://www.tesla.com/model3">
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              Model 3
            </li>
          </a>
          <a href="https://www.tesla.com/modelx">
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              Model X
            </li>
          </a>
          <a href="https://www.tesla.com/modely">
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              Model Y
            </li>
          </a>
          <a href="https://www.tesla.com/solarroof">
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              Solar Roof
            </li>
          </a>
          <a href="https://www.tesla.com/solarpanels">
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              Solar Panels
            </li>
          </a>
          <a href="https://www.tesla.com/powerwall">
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              Powerwall
            </li>
          </a>
        </ul>
      </div>
      <div className="hidden lg:inline">
        <ul className="flex justify-center hover:cursor-pointer">
          <a href="https://shop.tesla.com/">
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">Shop</li>
          </a>
          <a href="https://tesla.com/teslaaccount">
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              Account
            </li>
          </a>
          <li
            onClick={handleNav}
            className="py-1 px-3 hover:rounded hover:bg-black/5"
          >
            Menu
          </li>
        </ul>
      </div>
      <div className="lg:hidden">
        <button
          onClick={handleNav}
          className="inline-flex items-center rounded-md py-2 px-4 text-sm font-bold bg-black/5 shadow-sm hover:bg-black/10"
        >
          Menu
        </button>
      </div>
      <div
        className={
          menu
            ? "bg-white absolute top-0 right-0 w-80 h-full z-10"
            : "fixed right-[100%]"
        }
      >
        <div className="flex justify-end pr-8 pt-8">
          <TfiClose
            onClick={handleNav}
            className="rounded p-1 hover:bg-black/5 "
            size={28}
          />
        </div>
        <ul className="pt-8 px-6">
          <a href="https://tesla.com/models">
            <li className="py-3 pl-3 hover:round hover:bg-black/5">Model S</li>
          </a>
          <a href="https://tesla.com/model3">
            <li className="py-3 pl-3 hover:round hover:bg-black/5">Model 3</li>
          </a>
          <a href="https://tesla.com/modelx">
            <li className="py-3 pl-3 hover:round hover:bg-black/5">Model X</li>
          </a>
          <a href="https://tesla.com/modely">
            <li className="py-3 pl-3 hover:round hover:bg-black/5">Model Y</li>
          </a>
          <a href="https://tesla.com/solarroof">
            <li className="py-3 pl-3 hover:round hover:bg-black/5">
              Solar Roof
            </li>
          </a>
          <a href="https://tesla.com/solarpanels">
            <li className="py-3 pl-3 hover:round hover:bg-black/5">
              Solar Panels
            </li>
          </a>
          <a href="https://tesla.com/powerwall">
            <li className="py-3 pl-3 hover:round hover:bg-black/5">
              Powerwall
            </li>
          </a>
          <a href="https://tesla.com/inventory/new/m3">
            <li className="py-3 pl-3 hover:round hover:bg-black/5">
              Existing Inventory
            </li>
          </a>
          <a href="https://tesla.com/inventory/used/m3">
            <li className="py-3 pl-3 hover:round hover:bg-black/5">
              Used inventory
            </li>
          </a>
          <a href="https://tesla.com/tradein">
            <li className="py-3 pl-3 hover:round hover:bg-black/5">Trade-In</li>
          </a>
          <a href="https://tesla.com/drive">
            <li className="py-3 pl-3 hover:round hover:bg-black/5">
              Demo Drive
            </li>
          </a>
          <a href="https://tesla.com/findus">
            <li className="py-3 pl-3 hover:round hover:bg-black/5">Find Us</li>
          </a>
          <a href="https://tesla.com/support">
            <li className="py-3 pl-3 hover:round hover:bg-black/5">Support</li>
          </a>
          <a href="https://shop.tesla.com/">
            <li className="py-3 pl-3 hover:round hover:bg-black/5">Shop</li>
          </a>
          <a href="https://tesla.com/teslaaccount">
            <li className="py-3 pl-3 hover:round hover:bg-black/5">Account</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
