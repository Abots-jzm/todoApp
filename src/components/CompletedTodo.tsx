import React from "react";
import classes from "./CompletedTodo.module.css";
import Tick from "../assets/check-solid.svg";
import { useAppDispatch } from "../store/hooks";
import { todoActions } from "../store/todoSlice";

type Props = {
	children: React.ReactNode;
	id: number;
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
		<div className={classes.todo} onClick={uncompleteTodo}>
			<div className={classes.checkbox}>
				<img src={Tick} alt="Tick" />
			</div>
			<div className={classes.text}>{props.children}</div>
			<div className={classes.delete} onClick={deleteTodo}>
				<span className="material-symbols-outlined">delete</span>
			</div>
		</div>
	);
};

export default CompletedTodo;
