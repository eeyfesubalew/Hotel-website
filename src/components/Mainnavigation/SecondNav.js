import classes from "./SecondNav.module.css";
import dropdown from "../../assets/arrow-down.svg";
const SecondNav = () => {
  return (
    <div className={classes["second-main-nav"]}>
      <div className={classes["secondnav-container"]}>
        <nav className={classes.secondnav}>
          <ul className={classes["secondnav-list"]}>
            <li className={classes["secondnav-item"]}>
              <a className={classes["secondnav-link"]} href="#">
                the governor's domain
              </a>
            </li>
            <li className={classes["secondnav-item"]}>
              <a
                className={`${classes["secondnav-link"]} ${classes["secondnav-link-cont"]}`}
                href="#"
              >
                the hotel
                <img src={dropdown} className={classes.icons} />
              </a>
            </li>
            <li className={classes["secondnav-item"]}>
              <a className={classes["secondnav-link"]} href="#">
                the governor's table
              </a>
            </li>
            <li className={classes["secondnav-item"]}>
              <a className={classes["secondnav-link"]} href="#">
                the governor's domain
              </a>
            </li>
            <li className={classes["secondnav-item"]}>
              <a className={classes["secondnav-link"]} href="#">
                Events
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default SecondNav;
