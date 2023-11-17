import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "./src/utils/firebase";

export default function App() {
	const [user, setUser] = useState(undefined);
	useEffect(() => {}, []);
	firebase.auth().onAuthStateChanged((response) => {
		setUser(response);
	});
	return (
		<View style={styles.container}>
			{user ? <Text>logged in</Text> : <Text>not logged in</Text>}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
