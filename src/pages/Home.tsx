import { useContext } from "react";

import { Localization } from "../AppNavigation";

const Home = () => {
  const { _trans } = useContext(Localization);

  return (
    <div className="max-w-[1240px] mx-auto px-4 pt-5">
      <h1 className="text-3xl font-bold">{_trans("home_page_title")}</h1>

      <p>{_trans("home_page_description")}</p>
    </div>
  );
};

export default Home;
