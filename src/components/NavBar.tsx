import { useContext } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { Localization } from "../AppNavigation";
import { locales } from "../constants";
import { useAppDispatch, useAppSelector } from "../store/app/hook";
import { setCurrentLocale } from "../store/features/translation/translation-slice";
import { Languages } from "../typings/types";

const navItems = [
  { key: "Home", href: "/" },
  { key: "About", href: "/about" },
];

const NavBar = () => {
  const dispatch = useAppDispatch();
  const { _trans } = useContext(Localization);
  const { locale: currentLocale } = useAppSelector(state => state.translation);

  const changeLangHandler = (newLocale: Languages) => {
    dispatch(setCurrentLocale(newLocale));
  };

  return (
    <div className="bg-black">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">TEST</h1>

        <ul className="flex">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
                to={item.href}>
                {_trans(item.key)}
              </Link>
            </li>
          ))}
          <li className="pl-10">
            <div
              className="inline-flex gap-3 rounded-md shadow-sm"
              role="group">
              {locales.map((locale, index) => (
                <button
                  key={locale}
                  type="button"
                  onClick={() => changeLangHandler(locale)}
                  className={classNames(
                    "font-medium text-white hover:underline",
                    {
                      underline: locale === currentLocale,
                    }
                  )}>
                  {locale.toUpperCase()}
                </button>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
