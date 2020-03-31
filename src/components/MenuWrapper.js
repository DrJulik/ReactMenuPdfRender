import React, { Component, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MenuColumn from "./MenuColumn";
import { DragDropContext } from "react-beautiful-dnd";
import Quixote from "./Quixote";
import {
	PDFViewer,
	Page,
	Text,
	View,
	Document,
	StyleSheet
} from "@react-pdf/renderer";
const styles = StyleSheet.create({
	page: {
		margin: "30",
		flexDirection: "column",
		backgroundColor: "#E4E4E4"
	},
	smallText: {
		fontSize: "12",
		alignItems: "flex-start"
	},
	mainTitle: {
		fontSize: "32",
		margin: "10 0",
		alignSelf: "center"
	},
	categotyTitle: {
		fontSize: "22"
	}
});

class MenuWrapper extends Component {
	state = {
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
				itemIds: ["item-2", "item-3"]
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
				itemIds: ["item-1"]
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
		counter: 10
	};

	onDragEnd = result => {
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
		const start = this.state.categories[source.droppableId];
		const finish = this.state.categories[destination.droppableId];

		if (start === finish) {
			const newItemIds = Array.from(start.itemIds);
			newItemIds.splice(source.index, 1);
			newItemIds.splice(destination.index, 0, draggableId);

			const newCategory = {
				...start,
				itemIds: newItemIds
			};

			const newState1 = {
				...this.state,
				categories: {
					...this.state.categories,
					[newCategory.id]: newCategory
				}
			};

			this.setState(newState1);

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
			...this.state,
			categories: {
				...this.state.categories,
				[newStart.id]: newStart,
				[newFinish.id]: newFinish
			}
		};

		this.setState(newState);
	};

	componentDidMount() {
		setInterval(() => {
			if (this.state.counter > 0) {
				this.setState({ counter: this.state.counter - 1 });
			}
		}, 2500);
	}

	render() {
		return (
			<DragDropContext onDragEnd={this.onDragEnd}>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "100vh"
					}}
				>
					{this.state.columnOrder.map(columnId => {
						const column = this.state.columns[columnId];
						const categories = column.categoryIds.map(
							categoryId => this.state.categories[categoryId]
						);

						return (
							<MenuColumn
								key={column.id}
								column={column}
								categories={categories}
							/>
						);
					})}

					<PDFViewer style={{ height: "780px", width: "550px" }}>
						<Document>
							<Page size="A4" style={styles.page}>
								<Text>{this.state.counter}</Text>
								<View style={styles.smallText}>
									<Text>Restaurant Name</Text>
									<Text>Today's Date</Text>
								</View>
								<View>
									<Text style={styles.mainTitle}>Menu of the Day</Text>
									<View>
										<Text style={styles.categotyTitle}>
											{this.state.categories["category-4"].name}
										</Text>
										<Text>
											{this.state.categories["category-4"].itemIds.map(
												itemId => {
													const item = this.state.items[itemId];

													return <Text key={item.id}>{item.name}</Text>;
												}
											)}
										</Text>
									</View>
									<View>
										<Text style={styles.categotyTitle}>
											{this.state.categories["category-5"].name}
										</Text>
									</View>
									<View>
										<Text style={styles.categotyTitle}>
											{this.state.categories["category-6"].name}
										</Text>
									</View>
								</View>
							</Page>
						</Document>
					</PDFViewer>
				</div>
			</DragDropContext>
		);
	}
}

export default MenuWrapper;
