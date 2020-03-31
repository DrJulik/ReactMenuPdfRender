import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
	// menuColumns: {
	// 	MenuLibrary: {
	// 		name: "Menu Items",
	// 		categories: [
	// 			{
	// 				id: uuid(),
	// 				title: "Appetizers",
	// 				items: [
	// 					{ id: uuid(), name: "Chicken Fingers" },
	// 					{ id: uuid(), name: "PB Fingers" }
	// 				]
	// 			},
	// 			{
	// 				id: uuid(),
	// 				title: "Main Courses",
	// 				items: []
	// 			},
	// 			{
	// 				id: uuid(),
	// 				title: "Desserts",
	// 				items: []
	// 			}
	// 		]
	// 	},
	// 	SelectedItems: {
	// 		name: "Active Menu",
	// 		categories: [
	// 			{
	// 				id: uuid(),
	// 				title: "Appetizers",
	// 				items: []
	// 			},
	// 			{
	// 				id: uuid(),
	// 				title: "Main Courses",
	// 				items: []
	// 			},
	// 			{
	// 				id: uuid(),
	// 				title: "Desserts",
	// 				items: []
	// 			}
	// 		]
	// 	}
	// },

	items: {
		"item-1": {
			id: "item-1",
			name: "Chicken Fingers"
		},
		"item-2": {
			id: "item-2",
			name: "Chicken Dingers"
		},
		"item-3": {
			id: "item-3",
			name: "Chicken Bingers"
		}
	},
	categories: {
		"category-1": {
			id: "category-1",
			name: "Appetizers",
			itemIds: ["item-1", "item-2", "item-3"]
		},
		"category-2": {
			id: "category-2",
			name: "Main Courses",
			itemIds: []
		},
		"category-3": {
			id: "category-3",
			name: "Desserts",
			itemIds: []
		},
		"category-4": {
			id: "category-4",
			name: "Appetizers",
			itemIds: []
		},
		"category-5": {
			id: "category-5",
			name: "Main Courses",
			itemIds: []
		},
		"category-6": {
			id: "category-6",
			name: "Desserts",
			itemIds: []
		}
	},
	columns: {
		"column-1": {
			id: "column-1",
			title: "Menu Library",
			categoryIds: ["category-1", "category-2", "category-3"]
		},
		"column-2": {
			id: "column-2",
			title: "Selected Items",
			categoryIds: ["category-4", "category-5", "category-6"]
		}
	},
	columnOrder: ["column-1", "column-2"]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	// actions

	function updateCategories(newState) {
		dispatch({
			type: "UPDATE_CATEGORIES",
			payload: newState
		});
	}

	return (
		<GlobalContext.Provider
			value={{
				state: initialState,
				updateCategories
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
