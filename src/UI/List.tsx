import React from "react";
import classes from "./List.module.css";
import { motion } from "framer-motion";

type Props = {
	children: React.ReactNode;
	layoutId?: string;
};

const List: React.FC<Props> = (props) => {
	return (
		<motion.div layout className={classes.list}>
			{props.children}
		</motion.div>
	);
};

export default List;
