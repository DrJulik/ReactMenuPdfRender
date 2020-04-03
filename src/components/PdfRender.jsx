import React, { Component } from "react";
import {
	PDFViewer,
	Page,
	Text,
	View,
	Document,
	StyleSheet
} from "@react-pdf/renderer";

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
	categoryTitle: {
		fontSize: "24"
	},
	category: {
		flexDirection: "column",
		margin: "20 0"
	}
});

class PdfRender extends Component {
	render() {
		const { categories, items } = this.props;
		return (
			<PDFViewer style={{ height: "50%", width: "25%" }}>
				<Document>
					<Page size="A4" style={styles.page}>
						<View style={styles.smallText}>
							<Text>Restaurant Name</Text>
							<Text>Today's Date</Text>
						</View>
						<View>
							<Text style={styles.mainTitle}>Menu of the Day</Text>
							<View>
								<Text style={styles.categoryTitle}>
									{categories["category-4"].name}
								</Text>
								<View style={styles.category}>
									{categories["category-4"].itemIds !== [] && (
										<View style={styles.category}>
											{categories["category-4"].itemIds.map(itemId => {
												const item = items[itemId];

												return <Text key={item.id}>{item.name}</Text>;
											})}
										</View>
									)}
								</View>
							</View>
							<View>
								<Text style={styles.categoryTitle}>
									{categories["category-5"].name}
								</Text>
								<View style={styles.category}>
									{categories["category-5"].itemIds !== [] && (
										<View style={styles.category}>
											{categories["category-5"].itemIds.map(itemId => {
												const item = items[itemId];

												return <Text key={item.id}>{item.name}</Text>;
											})}
										</View>
									)}
								</View>
							</View>
							<View>
								<Text style={styles.categoryTitle}>
									{categories["category-6"].name}
								</Text>
								<View style={styles.category}>
									{categories["category-6"].itemIds !== [] && (
										<View style={styles.category}>
											{categories["category-6"].itemIds.map(itemId => {
												const item = items[itemId];

												return <Text key={item.id}>{item.name}</Text>;
											})}
										</View>
									)}
								</View>
							</View>
						</View>
						<Text>{this.props.refresh}</Text>
					</Page>
				</Document>
			</PDFViewer>
		);
	}
}
export default PdfRender;
