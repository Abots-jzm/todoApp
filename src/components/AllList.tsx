import React from "react";
import ActiveList from "./ActiveList";
import CompletedList from "./CompletedList";
import { LayoutGroup } from "framer-motion";

const AllList: React.FC = () => {
	return (
		<LayoutGroup>
			<ActiveList />
			<CompletedList />
		</LayoutGroup>
	);
};

export default AllList;
