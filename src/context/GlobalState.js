import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
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
	columnOrder: ["column-1", "column-2"],
	showRender: false,
	addingItem: false
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	// actions

	function toggleAdding(toggle) {
		dispatch({
			type: "TOGGLE_ADDING",
			payload: toggle
		});
	}
	function deleteItem(newItems) {
		dispatch({
			type: "DELETE_ITEM",
			payload: newItems
		});
	}
	function addItem(newItem) {
		dispatch({
			type: "ADD_ITEM",
			payload: newItem
		});
	}
	function updateCategory(newCategory) {
		dispatch({
			type: "UPDATE_CATEGORY",
			payload: newCategory
		});
	}
	function updateCategories(newCategories) {
		dispatch({
			type: "UPDATE_CATEGORIES",
			payload: newCategories
		});
	}
	function renderPdf(renderValue) {
		dispatch({
			type: "RENDER_PDF",
			payload: renderValue
		});
	}

	return (
		<GlobalContext.Provider
			value={{
				state: state,
				updateCategory,
				updateCategories,
				renderPdf,
				addItem,
				deleteItem,
				toggleAdding
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
