import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import classes from "./Header.module.css";

const Header: React.FC = () => {
	return (
		<>
			<h1 className={classes.title}>#todo</h1>
			<div className={classes.titleBar}>
				<NavLink to="/all" className={classes.section}>
					all
				</NavLink>
				<NavLink to="/active" className={classes.section}>
					active
				</NavLink>
				<NavLink to="/completed" className={classes.section}>
					completed
				</NavLink>
			</div>
			<Outlet />
		</>
	);
};

export default Header;
