import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface ConfigState {
	name: string;
	description: string;
}

// Define the initial state using that type
const initialState: ConfigState = {
	name: "Kittipich H.",
	description: "Kittipich Husa's Porfolio",
};

export const configSlice = createSlice({
	name: "config",
	initialState,
	reducers: {
		setConfig: (state, action: PayloadAction<Partial<ConfigState>>) => {
			return {
				...state,
				...action.payload,
			};
		},
	},
});

export const { setConfig } = configSlice.actions;

export default configSlice.reducer;
