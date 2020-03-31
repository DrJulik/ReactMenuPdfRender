export default (state, action) => {
	switch (action.type) {
		case "UPDATE_CATEGORIES":
			return {
				state: action.payload
			};
		default:
			return state;
	}
};
