import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Draggable } from "react-beautiful-dnd";

const MenuItem = props => {
	const { state, deleteItem } = useContext(GlobalContext);
	const { item, index, categoryId } = props;
	return (
		<Draggable draggableId={item.id} index={index}>
			{(provided, snapshot) => {
				const deleteThisItem = id => {
					// Object.filter = (obj, predicate) =>
					// 	Object.keys(obj)
					// 		.filter(key => predicate(obj[key]))
					// 		.reduce((res, key) => ((res[key] = obj[key]), res), {});

					// const { ...oldItems } = state.items;
					// let items = Object.filter(oldItems, item => item.id !== id);
					// deleteItem({ items });

					const workingCat = state.categories[categoryId];
					const workingItems = workingCat.itemIds;

					const filteredItems = workingItems.filter(item => item !== id);

					const newCategory = {
						...workingCat,
						itemIds: filteredItems
					};

					const updatedCategory = {
						...state.categories,
						[newCategory.id]: newCategory
					};

					deleteItem(updatedCategory);
				};
				return (
					<>
						<div
							className="menu-item"
							ref={provided.innerRef}
							{...provided.draggableProps}
							{...provided.dragHandleProps}
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								position: "relative",
								padding: "16",
								margin: "10px auto",
								minHeight: "50px",
								backgroundColor: snapshot.isDragging ? "#e09873" : "#a37f6f",
								borderRadius: "5%",
								color: "white",
								...provided.draggableProps.style
							}}
						>
							<h4 style={{ color: "black" }}>{item.name}</h4>

							<button
								className="delete-btn"
								onClick={deleteThisItem.bind(this, item.id)}
							>
								X
							</button>
						</div>
					</>
				);
			}}
		</Draggable>
	);
};

export default MenuItem;
