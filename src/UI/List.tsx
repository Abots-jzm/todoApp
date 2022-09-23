import React from "react";
import classes from "./List.module.css";

type Props = {
	children: React.ReactNode;
};

const List: React.FC<Props> = (props) => {
	return <div className={classes.list}>{props.children}</div>;
};

export default List;
