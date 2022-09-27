import React from "react";
import List from "../UI/List";
import CompletedTodo from "./CompletedTodo";
import { useAppSelector } from "../store/hooks";
import { AnimatePresence } from "framer-motion";

const CompletedList: React.FC = () => {
	const completedTodos = useAppSelector((state) => state.completed);

	return (
		<List>
			<AnimatePresence>
				{completedTodos.map((todo, index) => (
					<CompletedTodo key={todo.id} id={index}>
						{todo.content}
					</CompletedTodo>
				))}
			</AnimatePresence>
		</List>
	);
};

export default CompletedList;
