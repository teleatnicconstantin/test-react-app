import { Route, Routes } from "react-router-dom";
import { createContext, useCallback } from "react";

import Home from "./pages/Home";
import About from "./pages/About";

import NavBar from "./components/NavBar";
import { useAppSelector } from "./store/app/hook";
import { LocalizationContextType } from "./typings/types";

export const Localization = createContext<LocalizationContextType>({
  _trans: key => key,
});

function AppNavigation() {
  const { translations } = useAppSelector(state => state.translation);

  const _trans = useCallback(
    (key: string) => {
      return translations[key] ? String(translations[key]) : key;
    },
    [translations]
  );

  return (
    <Localization.Provider value={{ _trans }}>
      <div>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Localization.Provider>
  );
}

export default AppNavigation;
