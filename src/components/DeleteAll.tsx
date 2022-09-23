import React from "react";
import { Outlet } from "react-router-dom";
import classes from "./DeleteAll.module.css";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { todoActions } from "../store/todoSlice";

const DeleteAll: React.FC = () => {
	const dispatch = useAppDispatch();
	const completedTodos = useAppSelector((state) => state.completed);

	function deleteAll() {
		dispatch(todoActions.deleteAll());
	}

	if (completedTodos.length === 0) {
		return <div className={classes.empty}>You do not have any completed tasks</div>;
	}

	return (
		<>
			<Outlet />
			<button className={classes.deleteAll} onClick={deleteAll}>
				<span className="material-symbols-outlined">delete</span>
				delete all
			</button>
		</>
	);
};

export default DeleteAll;
