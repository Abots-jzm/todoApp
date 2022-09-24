import React, { useState } from "react";
import classes from "./ActiveTodo.module.css";
import { useAppDispatch } from "../store/hooks";
import { todoActions } from "../store/todoSlice";

type Props = {
	children: React.ReactNode;
	id: number;
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
		<div className={classes.todo} onClick={completeTodo}>
			<div className={classes.checkbox}>&nbsp;</div>
			<div className={textClasses}>{props.children}</div>
		</div>
	);
};

export default ActiveTodo;
