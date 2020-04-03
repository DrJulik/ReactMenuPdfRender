import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MenuColumn from "./MenuColumn";
import { DragDropContext } from "react-beautiful-dnd";
import PdfRender from "./PdfRender";

const MenuWrapperFunc = () => {
	const { state, updateCategory, updateCategories, renderPdf } = useContext(
		GlobalContext
	);

	const onDragEnd = result => {
		const { source, destination, draggableId } = result;

		// if item is dropped outside of droppable
		if (!destination) return;

		// if user dropped item where it was
		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			return;
		}

		// dropped within the same category
		const start = state.categories[source.droppableId];
		const finish = state.categories[destination.droppableId];

		if (start === finish) {
			const newItemIds = Array.from(start.itemIds);
			newItemIds.splice(source.index, 1);
			newItemIds.splice(destination.index, 0, draggableId);

			const newCategory = {
				...start,
				itemIds: newItemIds
			};

			const updatedCategory = {
				...state.categories,
				[newCategory.id]: newCategory
			};

			// console.log(updatedCategory);
			updateCategory(updatedCategory);
			return;
		}

		// dropped across different categories

		const startMenuIds = Array.from(start.itemIds);
		startMenuIds.splice(source.index, 1);
		const newStart = {
			...start,
			itemIds: startMenuIds
		};

		const finishMenuIds = Array.from(finish.itemIds);
		finishMenuIds.splice(destination.index, 0, draggableId);
		const newFinish = {
			...finish,
			itemIds: finishMenuIds
		};

		const newState = {
			...state.categories,
			[newStart.id]: newStart,
			[newFinish.id]: newFinish
		};

		// console.log(newState);
		updateCategories(newState);
	};

	const showPdf = () => {
		renderPdf(!state.showRender);
		// this.setState({ showRender: !state.showRender });
	};
	return (
		<>
			<DragDropContext onDragEnd={onDragEnd}>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "98vh"
					}}
				>
					{state.columnOrder.map(columnId => {
						const column = state.columns[columnId];
						const categories = column.categoryIds.map(
							categoryId => state.categories[categoryId]
						);

						return (
							<MenuColumn
								key={column.id}
								column={column}
								categories={categories}
							/>
						);
					})}
					{state.showRender && (
						<PdfRender
							categories={state.categories}
							items={state.items}
						></PdfRender>
					)}

					<button className="btn" onClick={showPdf}>
						Render my Menu
					</button>
				</div>
			</DragDropContext>
		</>
	);
};

export default MenuWrapperFunc;
