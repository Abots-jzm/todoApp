import React, { useRef, useState } from "react";
import classes from "./AddTodo.module.css";
import { Outlet } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { todoActions } from "../store/todoSlice";

const AddTodo: React.FC = () => {
	const dispatch = useAppDispatch();
	const [input, setInput] = useState("");
	const inputField = useRef<HTMLInputElement>(null);

	function createTodo(e: React.FormEvent) {
		e.preventDefault();
		inputField.current?.focus();
		dispatch(todoActions.create(input));
		setInput("");
	}

	return (
		<>
			<form className={classes.container} onSubmit={createTodo}>
				<input ref={inputField} required value={input} className={classes.input} type="text" placeholder="add details" onChange={(e) => setInput(e.target.value)} />
				<button type="button" className={classes.button} onClick={createTodo}>
					Add
				</button>
			</form>
			<Outlet />
		</>
	);
};

export default AddTodo;
