import classes from "./App.module.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import ActiveList from "./components/ActiveList";
import AllList from "./components/AllList";
import CompletedList from "./components/CompletedList";
import DeleteAll from "./components/DeleteAll";

function App() {
	return (
		<div className={classes.app}>
			<Routes>
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
		</div>
	);
}

export default App;
