import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import classes from "./Header.module.css";

const Header: React.FC = () => {
	return (
		<>
			<h1 className={classes.title}>#todo</h1>
			<div className={classes.titleBar}>
				<NavLink to="/all" className={({ isActive }) => (isActive ? classes.section : undefined)}>
					<div>all</div>
				</NavLink>
				<NavLink to="/active" className={({ isActive }) => (isActive ? classes.section : undefined)}>
					<div>active</div>
				</NavLink>
				<NavLink to="/completed" className={({ isActive }) => (isActive ? classes.section : undefined)}>
					<div>completed</div>
				</NavLink>
			</div>
			<Outlet />
		</>
	);
};

export default Header;
