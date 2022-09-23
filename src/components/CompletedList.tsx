import React from "react";
import List from "../UI/List";
import CompletedTodo from "./CompletedTodo";
import { useAppSelector } from "../store/hooks";

const CompletedList: React.FC = () => {
	const completedTodos = useAppSelector((state) => state.completed);
	return (
		<List>
			{completedTodos.map((todo, index) => (
				<CompletedTodo key={index} id={index}>
					{todo}
				</CompletedTodo>
			))}
		</List>
	);
};

export default CompletedList;
