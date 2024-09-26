import { icons } from "modules/Header/constants/svgIcons";
import { Link } from "react-router-dom";

export const AccountIcons = () => {
  
  return (
    <>
      {icons &&
        icons.map((icon) => (
          <Link key={icon.src} to={icon.to}>
            <img src={icon.src} alt={icon.alt} />
          </Link>
        ))}
    </>
  );
};
