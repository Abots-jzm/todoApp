import React, { useState } from "react";
import classes from "./AddTodo.module.css";
import { Outlet } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { todoActions } from "../store/todoSlice";

const AddTodo: React.FC = () => {
	const dispatch = useAppDispatch();
	const [input, setInput] = useState("");

	function createTodo(e: React.FormEvent) {
		e.preventDefault();
		dispatch(todoActions.create(input));
		setInput("");
	}

	return (
		<>
			<form className={classes.container} onSubmit={createTodo}>
				<input required value={input} className={classes.input} type="text" placeholder="add details" onChange={(e) => setInput(e.target.value)} />
				<button type="submit" className={classes.button} onClick={createTodo}>
					Add
				</button>
			</form>
			<Outlet />
		</>
	);
};

export default AddTodo;
