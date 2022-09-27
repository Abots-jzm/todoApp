import React, { useState } from "react";
import classes from "./ActiveTodo.module.css";
import { useAppDispatch } from "../store/hooks";
import { todoActions } from "../store/todoSlice";
import { motion } from "framer-motion";

type Props = {
	children: React.ReactNode;
	id: number;
};

const todoVariant = {
	hidden: {
		opacity: 0,
		x: -50,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.3,
		},
	},
};

const ActiveTodo: React.FC<Props> = (props) => {
	const dispatch = useAppDispatch();

	const [isStrikeThrough, setIsStrikeThrough] = useState(false);

	function completeTodo() {
		setIsStrikeThrough(true);

		setTimeout(() => {
			dispatch(todoActions.complete(props.id));
		}, 200);
	}

	const textClasses = `${classes.text} ${isStrikeThrough ? classes.strikeThrough : ""}`;

	return (
		<motion.div className={classes.todo} onClick={completeTodo} variants={todoVariant} initial="hidden" animate="visible" layout="position">
			<div className={classes.checkbox}>&nbsp;</div>
			<div className={textClasses}>{props.children}</div>
		</motion.div>
	);
};

export default ActiveTodo;
