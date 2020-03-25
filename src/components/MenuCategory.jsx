import React from "react";
import { Droppable } from "react-beautiful-dnd";
import MenuItem from "./MenuItem";

const MenuCategory = props => {
	const { title, id, category } = props;
	return (
		<Droppable droppableId={id}>
			{(provided, snapshot) => {
				return (
					<div
						{...provided.droppableProps}
						ref={provided.innerRef}
						style={{
							padding: "20px",

							width: "100%",
							background: snapshot.isDraggingOver ? "#7584ad" : "inherit",
							transition: "background 0.2s ease"
						}}
					>
						<h3 style={{ margin: "10px 0" }}>{title}</h3>
						{category.items.map((item, index) => {
							return <MenuItem key={item.id} item={item} index={index} />;
						})}
						{provided.placeholder}
					</div>
				);
			}}
		</Droppable>
	);
};

export default MenuCategory;
