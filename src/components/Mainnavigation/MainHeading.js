import classes from "./Mainheading.module.css";
const MainHeading = () => {
  return (
    <div className={classes["main-container"]}>
      <h1 className={classes["main-heading"]}>A UNIQUE PLACE IN FULL NATURE</h1>
      <div className={classes["main-content"]}>
        <p className={classes["temperature"]}>16:30</p>
        <p className={classes["temperature"]}> 18°C</p>
        <p className={classes["temperature"]}>CLOUDY</p>
      </div>
      <div className={classes.scroll}></div>
    </div>
  );
};
export default MainHeading;
