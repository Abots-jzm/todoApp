import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TodoItem = {
	id: number;
	content: string;
};

type InitialState = {
	active: TodoItem[];
	completed: TodoItem[];
	currentId: number;
};

const initialState: InitialState = {
	active: [],
	completed: [],
	currentId: 0,
};

const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		create(state, action: PayloadAction<string>) {
			state.active.push({ id: state.currentId, content: action.payload });
			state.currentId++;
		},
		complete(state, action: PayloadAction<number>) {
			state.completed.push(state.active[action.payload]);
			state.active.splice(action.payload, 1);
		},
		uncomplete(state, action: PayloadAction<number>) {
			state.active.push(state.completed[action.payload]);
			state.completed.splice(action.payload, 1);
		},
		delete(state, action: PayloadAction<number>) {
			state.completed.splice(action.payload, 1);
		},
		deleteAll(state) {
			state.completed = [];
		},
	},
});

export const todoActions = todoSlice.actions;
export default todoSlice.reducer;
