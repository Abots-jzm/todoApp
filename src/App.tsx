import classes from "./App.module.css";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import ActiveList from "./components/ActiveList";
import AllList from "./components/AllList";
import CompletedList from "./components/CompletedList";
import DeleteAll from "./components/DeleteAll";
import { AnimatePresence } from "framer-motion";

function App() {
	const location = useLocation();

	return (
		<div className={classes.app}>
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.key}>
					<Route path="/" element={<Header />}>
						<Route index element={<Navigate to="/all" />} />
						<Route element={<AddTodo />}>
							<Route path="all" element={<AllList />} />
							<Route path="active" element={<ActiveList />} />
						</Route>
						<Route element={<DeleteAll />}>
							<Route path="completed" element={<CompletedList />} />
						</Route>
					</Route>
				</Routes>
			</AnimatePresence>
		</div>
	);
}

export default App;
