import React from "react";
import List from "../UI/List";
import ActiveTodo from "./ActiveTodo";
import { useAppSelector } from "../store/hooks";
import { AnimatePresence } from "framer-motion";

const ActiveList: React.FC = () => {
	const activeTodos = useAppSelector((state) => state.active);

	if (activeTodos.length === 0) return null;

	return (
		<List>
			<AnimatePresence>
				{activeTodos.map((todo, index) => (
					<ActiveTodo key={todo.id} id={index}>
						{todo.content}
					</ActiveTodo>
				))}
			</AnimatePresence>
		</List>
	);
};

export default ActiveList;
