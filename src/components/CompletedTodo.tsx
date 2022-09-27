import React from "react";
import classes from "./CompletedTodo.module.css";
import Tick from "../assets/check-solid.svg";
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

const CompletedTodo: React.FC<Props> = (props) => {
	const dispatch = useAppDispatch();

	function uncompleteTodo() {
		dispatch(todoActions.uncomplete(props.id));
	}

	function deleteTodo(e: React.MouseEvent) {
		e.stopPropagation();
		dispatch(todoActions.delete(props.id));
	}

	return (
		<motion.div layout className={classes.todo} onClick={uncompleteTodo} variants={todoVariant} initial="hidden" animate="visible">
			<div className={classes.checkbox}>
				<img src={Tick} alt="Tick" />
			</div>
			<div className={classes.text}>{props.children}</div>
			<div className={classes.delete} onClick={deleteTodo}>
				<span className="material-symbols-outlined">delete</span>
			</div>
		</motion.div>
	);
};

export default CompletedTodo;
