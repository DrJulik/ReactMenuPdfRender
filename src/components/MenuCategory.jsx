import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Droppable } from "react-beautiful-dnd";
import MenuItem from "./MenuItem";

const MenuCategory = props => {
	const { state, toggleAdding } = useContext(GlobalContext);
	const { id, name, items } = props;

	const addItem = () => {
		toggleAdding(!state.addingItem);
		console.log("add item");
	};
	return (
		<div
			className="category"
			style={{
				padding: "25px 15px",
				width: "100%",
				position: "relative",
				// background: snapshot.isDraggingOver ? "#7584ad" : "inherit",
				transition: "background 0.2s ease"
			}}
		>
			<h3 style={{ margin: "10px 0" }}>{name}</h3>{" "}
			<button className="add-btn" onClick={addItem}>
				+
			</button>
			<Droppable droppableId={id}>
				{provided => (
					<div {...provided.droppableProps} ref={provided.innerRef}>
						{state.addingItem && <input></input>}
						{items.map((itemId, index) => {
							const item = state.items[itemId];

							return (
								<MenuItem
									key={item.id}
									item={item}
									name={item.name}
									index={index}
									categoryId={id}
								/>
							);
						})}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</div>
	);
};

export default MenuCategory;
