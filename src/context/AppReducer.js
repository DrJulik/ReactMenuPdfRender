export default (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case "TOGGLE_ADDING":
			return {
				...state,
				addingItem: payload
			};
		case "DELETE_ITEM":
			return {
				...state,
				categories: action.payload
			};
		case "ADD_ITEM":
			return {
				...state,
				items: payload
			};
		case "UPDATE_CATEGORY":
			return {
				...state,
				categories: payload
			};
		case "UPDATE_CATEGORIES":
			return {
				...state,
				categories: payload
			};
		case "RENDER_PDF":
			return {
				...state,
				showRender: payload
			};
		default:
			return state;
	}
};
