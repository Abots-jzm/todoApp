import React from "react";
import classes from "./ActiveTodo.module.css";
import { useAppDispatch } from "../store/hooks";
import { todoActions } from "../store/todoSlice";

type Props = {
	children: React.ReactNode;
	id: number;
};

const ActiveTodo: React.FC<Props> = (props) => {
	const dispatch = useAppDispatch();

	function completeTodo() {
		dispatch(todoActions.complete(props.id));
	}

	return (
		<div className={classes.todo} onClick={completeTodo}>
			<div className={classes.checkbox}>&nbsp;</div>
			<div className={classes.text}>{props.children}</div>
		</div>
	);
};

export default ActiveTodo;
