import Link from "next/link";
import classes from "./HeaderNav.module.css";

const HeaderNav = () => {
  return (
    <div className={classes.container}>
      <Link className={classes.homeLink} href="/">
        NextJS Upskill Course
      </Link>
      <Link className={classes.links} href="/add-new">
        Create New Todo
      </Link>
      <Link className={classes.links} href="/completed">
        Check Completed Todos
      </Link>
    </div>
  );
};

export default HeaderNav;
