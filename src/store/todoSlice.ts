import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
	active: string[];
	completed: string[];
};

const initialState: InitialState = {
	active: [],
	completed: [],
};

const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		create(state, action: PayloadAction<string>) {
			state.active.push(action.payload);
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
