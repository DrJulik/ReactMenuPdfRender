import React, { Component } from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
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

// Create Document Component
class Quixote extends Component {
	componentDidUpdate(prevProps) {
		if (prevProps !== this.props) {
			console.log(this.props);
			this.forceUpdate();
		}
	}

	render() {
		const { categories, items } = this.props;
		return (
			<Document>
				<Page size="A4" style={styles.page}>
					<View style={styles.smallText}>
						<Text>Restaurant Name</Text>
						<Text>Today's Date</Text>
					</View>
					<View>
						<Text style={styles.mainTitle}>Menu of the Day</Text>
						<View>
							<Text style={styles.categotyTitle}>
								{categories["category-4"].name}
							</Text>
							<Text
								render={() =>
									categories["category-4"].itemIds !== [] && (
										<View style={{ background: "red" }}>
											{categories["category-4"].itemIds.map(itemId => {
												const item = items[itemId];
												console.log(item);
												return <Text key={item.id}>{item.name}</Text>;
											})}
										</View>
									)
								}
							></Text>
						</View>
						<View>
							<Text style={styles.categotyTitle}>
								{categories["category-5"].name}
							</Text>
						</View>
						<View>
							<Text style={styles.categotyTitle}>
								{categories["category-6"].name}
							</Text>
						</View>
					</View>
				</Page>
			</Document>
		);
	}
}
export default Quixote;
