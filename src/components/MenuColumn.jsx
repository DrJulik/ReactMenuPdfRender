import React from "react";

import MenuCategory from "./MenuCategory";

const MenuColumn = props => {
	const { column, categories } = props;
	return (
		<div>
			<>
				<h2>{column.title}</h2>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						background: "#aed1d6",
						boxShadow: "#000 1px 2px 5px",
						width: 450,
						height: "50%",
						minHeight: 500,
						margin: "10px",
						padding: "5%"
					}}
				>
					{categories.map(category => {
						return (
							<MenuCategory
								key={category.id}
								id={category.id}
								name={category.name}
								items={category.itemIds}
							></MenuCategory>
						);
					})}
				</div>
			</>
		</div>
	);
};

export default MenuColumn;
