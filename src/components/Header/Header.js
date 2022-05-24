import { Fragment } from "react";
import MainHeading from "../Mainnavigation/MainHeading";
import MainNavigation from "../Mainnavigation/MainNavigation";
import SecondNav from "../Mainnavigation/SecondNav";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <MainNavigation />
        <SecondNav />
        <MainHeading />
      </header>
      <h1>This is body</h1>
      <h1>This is body</h1>
      <h1>This is body</h1>
      <h1>This is body</h1>
      <h1>This is body</h1>
      <h1>This is body</h1>
    </Fragment>
  );
};
export default Header;
