import React from "react";

import MenuCategory from "./MenuCategory";

const MenuColumn = props => {
	const { column } = props;
	return (
		<div>
			<>
				<h2>{column.name}</h2>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						background: "#aed1d6",
						boxShadow: "#000 1px 2px 5px",
						width: 450,
						height: "50rem",
						minHeight: 500,
						margin: "10px"
					}}
				>
					{column.categories.map(category => {
						return (
							<MenuCategory
								key={category.id}
								id={category.id}
								title={category.title}
								category={category}
							></MenuCategory>
						);
					})}
				</div>
			</>
		</div>
	);
};

export default MenuColumn;

/* <h2>{column.name}</h2>
			<div style={{ margin: 8 }}>
				<Droppable droppableId={id} key={id}>
					{(provided, snapshot) => {
						return (
							<>
								<div
									{...provided.droppableProps}
									ref={provided.innerRef}
									style={{
										background: snapshot.isDraggingOver
											? "lightblue"
											: "lightgrey",
										padding: 4,
										width: 350,
										height: "50rem",
										minHeight: 500
									}}
								>
									<h3 style={{ margin: "10px 0" }}>{catTitle}</h3>
									{column.items.map((item, index) => {
										return <MenuItem key={item.id} item={item} index={index} />;
									})}
									{provided.placeholder}
								</div>
							</>
						);
					}}
				</Droppable>
			</div> */
