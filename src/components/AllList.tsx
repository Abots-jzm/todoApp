import React from "react";
import ActiveList from "./ActiveList";
import CompletedList from "./CompletedList";

const AllList: React.FC = () => {
	return (
		<>
			<ActiveList />
			<CompletedList />
		</>
	);
};

export default AllList;
