import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MenuColumn from "./MenuColumn";
import { DragDropContext } from "react-beautiful-dnd";

// const onDragEnd = (result, columns, setColumns) => {
// 	if (!result.destination) return;
// 	const { source, destination } = result;

// 	if (source.droppableId !== destination.droppableId) {
// 		const sourceColumn = columns[source.droppableId];
// 		const destColumn = columns[destination.droppableId];
// 		const sourceItems = [...sourceColumn.items];
// 		const destItems = [...destColumn.items];
// 		const [removed] = sourceItems.splice(source.index, 1);
// 		destItems.splice(destination.index, 0, removed);
// 		setColumns({
// 			...columns,
// 			[source.droppableId]: {
// 				...sourceColumn,
// 				items: sourceItems
// 			},
// 			[destination.droppableId]: {
// 				...destColumn,
// 				items: destItems
// 			}
// 		});
// 	} else {
// 		const column = columns[source.droppableId];
// 		const copiedItems = [...column.items];
// 		const [removed] = copiedItems.splice(source.index, 1);
// 		copiedItems.splice(destination.index, 0, removed);
// 		setColumns({
// 			...columns,
// 			[source.droppableId]: {
// 				...column,
// 				items: copiedItems
// 			}
// 		});
// 	}
// };

const MenuWrapper = () => {
	const { columns } = useContext(GlobalContext);
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh"
			}}
		>
			<DragDropContext
				// onDragEnd={result => {
				// 	onDragEnd(result, columns, setColumns);
				// }}
				onDragEnd={result => {
					console.log(result);
				}}
			>
				{Object.entries(columns).map(([id, column]) => {
					return (
						<MenuColumn
							key={id}
							id={id}
							column={column}
							catTitle={column.categories[0].title}
						/>
					);
				})}
			</DragDropContext>
		</div>
	);
};

export default MenuWrapper;
