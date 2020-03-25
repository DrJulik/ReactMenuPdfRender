import React from "react";
import { Draggable } from "react-beautiful-dnd";

const MenuItem = props => {
	const { item, index } = props;
	return (
		<Draggable draggableId={item.id} index={index}>
			{(provided, snapshot) => {
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
								userSelect: "none",
								padding: "16",
								margin: "10px auto",
								minHeight: "50px",
								maxWidth: "70%",
								backgroundColor: snapshot.isDragging ? "#e09873" : "#a37f6f",
								borderRadius: "5%",
								color: "white",
								...provided.draggableProps.style
							}}
						>
							<h4 style={{ color: "black" }}>{item.name}</h4>
							<button className="delete-btn">X</button>
						</div>
					</>
				);
			}}
		</Draggable>
	);
};

export default MenuItem;
