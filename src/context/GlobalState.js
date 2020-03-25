import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import uuid from "uuid/v4";

const initialState = {
	menuColumns: {
		[uuid()]: {
			name: "Menu Items",

			categories: [
				{
					id: uuid(),
					title: "Appetizers",
					items: [
						{ id: uuid(), name: "Chicken Fingers" },
						{ id: uuid(), name: "PB Fingers" }
					]
				},
				{
					id: uuid(),
					title: "Main Courses",
					items: []
				},
				{
					id: uuid(),
					title: "Desserts",
					items: []
				}
			]
		},
		[uuid()]: {
			name: "Active Menu",

			categories: [
				{
					id: uuid(),
					title: "Appetizers",
					items: []
				},
				{
					id: uuid(),
					title: "Main Courses",
					items: []
				},
				{
					id: uuid(),
					title: "Desserts",
					items: []
				}
			]
		}
	}
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	return (
		<GlobalContext.Provider
			value={{
				columns: state.menuColumns
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
