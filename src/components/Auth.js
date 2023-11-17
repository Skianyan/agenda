import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";

const Auth = () => {
	const [show, setShow] = useState(false);

	return (
		<>
			<StatusBar barStyle={"light-content"} />
			<SafeAreaView style={styles.container}>
				{!show ? (
					<>
						<TouchableOpacity
							onPress={() => {
								setShow(!show);
							}}
						>
							<Text style={styles.texto}>Register</Text>
						</TouchableOpacity>
					</>
				) : (
					<>
						<RegisterForm />
					</>
				)}
			</SafeAreaView>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	texto: {
		color: "white",
		fontSize: 20,
	},
});

export default Auth;
