import MainHeading from "../Mainnavigation/MainHeading";
import MainNavigation from "../Mainnavigation/MainNavigation";
import SecondNav from "../Mainnavigation/SecondNav";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <header className={classes.header}>
      <MainNavigation />
      <SecondNav />
      <MainHeading />
    </header>
  );
};
export default Header;
