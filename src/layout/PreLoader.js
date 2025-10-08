import { useEffect } from "react";
import { portfolio } from "../utils";

const PreLoader = () => {
  useEffect(() => {
    portfolio.preloader();
  }, []);

  return (
    <div id="preloader">
      <div className="loader_line"></div>
    </div>
  );
};
export default PreLoader;
