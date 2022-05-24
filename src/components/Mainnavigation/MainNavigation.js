import React from "react";
import giftIcon from "../../assets/gift.svg";
import cartIcon from "../../assets/shopping-cart.svg";
import classes from "./MainNavigation.module.css";
const MainNavigation = () => {
  return (
    <div className={classes["nav-container"]}>
      <nav className={classes.navigation}>
        <ul className={classes["navigation-list"]}>
          <li className={classes["navigation-listitem"]}>
            <a className={classes["navigation-link"]} href="#">
              expences and offers
            </a>
          </li>
          <li className={classes["navigation-listitem"]}>
            <a className={classes["navigation-link"]} href="#">
              Region
            </a>
          </li>
          <li className={classes["navigation-listitem"]}>
            <a className={classes["navigation-link"]} href="#">
              Events
            </a>
          </li>
          <li className={classes["navigation-listitem"]}>
            <a className={classes["navigation-link"]} href="#">
              News
            </a>
          </li>
        </ul>

        <div className={classes.leftnavcontainer}>
          <a
            href="#"
            className={`${classes.linkclass} ${classes["navigation-link"]}`}
          >
            <img className={classes.icons} src={giftIcon} />
            <span className={classes.linkspan}>Gifts</span>
          </a>
          <a
            className={`${classes.linkclass} ${classes["navigation-link"]}`}
            href="#"
          >
            Contact and Access
          </a>
          <a
            className={`${classes.linkclass} ${classes["navigation-link"]}`}
            href="#"
          >
            {/* <CartIcon stroke="#fff" /> */}
            <img className={classes.icons} src={cartIcon} />
          </a>
        </div>
      </nav>
    </div>
  );
};
export default MainNavigation;
