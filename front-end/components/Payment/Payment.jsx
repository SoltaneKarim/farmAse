import React, { useState, useEffect } from "react";
import axios from "axios";
import {
	Text,
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
	ScrollView,
	Linking,
} from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "./GlobalStyle.js";
import { useSelector } from "react-redux";
import { useRouter } from "expo-router";

const Care = () => {
	const [form, setForm] = useState({ amount: "50000" });
	const [link, setLink] = useState("");
	const user = useSelector((state) => state.user);
	const router = useRouter();

	const handlePayNowClick = async () => {
		console.log("hello");
		try {
			// Send the payment request
			const response = await axios.post(
				"http://192.168.100.62:5000/payment",
				form,
			);
			console.log("response", response);
			//   setLink(result.link)
			const { result } = response.data;

			// Always open the payment URL, regardless of the payment status
			Linking.openURL(result.link);

			// Optionally, you can also create the user here if needed
			const userResponse = await axios.post(
				"http://192.168.100.62:5000/chat/users",
				{
					specificId: user.id,
					fullname: user.fullName,
					messages: [],
				},
			);

			// Handle the response, such as showing a success message or redirecting the user
			console.log("User created successfully:", userResponse.data);
			router.push("chatbest");
		} catch (error) {
			// Handle errors, such as displaying an error message to the user
			console.error("Error:", error);
		}
	};

	// const handleUrlChange = async (event) => {
	//   const { url } = event;

	//   // Check if the URL matches your success_link
	//   if (url.includes('http://192.168.100.44:5000/success')) {
	//     // Handle successful payment
	//     router.push('paymentSuccess'); // Navigate to the success screen
	//   }
	// };

	// Add an event listener to handle URL changes
	// useEffect(() => {
	//   const handleAppStateChange = (nextAppState) => {
	//     if (nextAppState === 'active') {
	//       Linking.getInitialURL().then((url) => {
	//         if (url) {
	//           handleUrlChange({ url });
	//         }
	//       });
	//       Linking.addEventListener('url', handleUrlChange);
	//     } else {
	//       Linking.removeEventListener('url', handleUrlChange);
	//     }
	//   };

	//   // Add the listener when the component mounts
	//   Linking.addEventListener('url', handleUrlChange);
	//   Linking.getInitialURL().then((url) => {
	//     if (url) {
	//       handleUrlChange({ url });
	//     }
	//   });

	//   // Remove the event listener when the component unmounts to avoid memory leaks
	//   return () => {
	//     Linking.removeEventListener('url', handleUrlChange);
	//   };
	// }, []);

	return (
		<ScrollView>
			<View style={styles.paymentSuccess}>
				<TouchableOpacity onPress={handlePayNowClick}>
					<View style={[styles.button, styles.buttonFlexBox]}>
						<Text style={styles.primaryButton}>Pay Now</Text>
					</View>
				</TouchableOpacity>
				<View style={styles.content}>
					{/* <WebView
          source={{ uri: link }}
          scalesPageToFit={true}
        /> */}

					<Image
						style={styles.backgroundIcon}
						contentFit="cover"
						source={require("../../assets/icons/Background.png")}
					/>
					<Image
						style={[styles.vectorIcon, styles.vectorIconLayout1]}
						contentFit="cover"
						source={require("../../assets/icons/taswira2-removebg.png")}
					/>
					<Image
						style={[styles.vectorIcon1, styles.vectorIconLayout1]}
						contentFit="cover"
						source={require("../../assets/icons/taswira2-removebg.png")}
					/>
					<Image
						style={[styles.vectorIcon2, styles.vectorIconPosition1]}
						contentFit="cover"
						source={require("../../assets/icons/taswira2-removebg.png")}
					/>
					<Image
						style={[styles.vectorIcon3, styles.vectorIconPosition]}
						contentFit="cover"
						source={require("../../assets/icons/taswira2-removebg.png")}
					/>
					<Image
						style={[styles.vectorIcon4, styles.vectorIconLayout]}
						contentFit="cover"
						source={require("../../assets/icons/taswira2-removebg.png")}
					/>
					<Image
						style={[styles.vectorIcon5, styles.vectorIconLayout]}
						contentFit="cover"
						source={require("../../assets/icons/taswira2-removebg.png")}
					/>
					<View style={[styles.icon, styles.iconFlexBox]}>
						<Image
							style={styles.icon1}
							contentFit="cover"
							source={require("../../assets/icons/Icon.png")}
						/>
					</View>
					<View style={styles.content1}>
						<Text style={styles.price}>Price</Text>
						<Text style={[styles.text, styles.premiumTypo]}>$125.5</Text>
					</View>
					<View style={[styles.content2, styles.buttonFlexBox]}>
						<Text style={[styles.getPremium, styles.premiumTypo]}>
							Get Premium
						</Text>
						<Text style={styles.getNewFeatures}>Get new features</Text>
					</View>
					<View style={styles.line} />
					<Text style={[styles.management, styles.managementTypo]}>
						Management
					</Text>
					<Text style={[styles.veterinarian, styles.managementTypo]}>
						Veterinarian
					</Text>
					<Text style={[styles.chat, styles.chatTypo]}>Chat</Text>
					<Text style={[styles.healthCare, styles.chatTypo]}>Health-care</Text>
					<Image
						style={[styles.xIcon, styles.iconLayout]}
						contentFit="cover"
						source={require("../../assets/icons/X.png")}
					/>
					<Image
						style={[styles.xIcon1, styles.iconLayout]}
						contentFit="cover"
						source={require("../../assets/icons/X.png")}
					/>
				</View>
				<Text style={[styles.management1, styles.management1Typo]}>
					Management
				</Text>
				<Text style={[styles.veterinarian1, styles.management1Typo]}>
					Veterinarian
				</Text>
				<Text style={[styles.chat1, styles.chat1Typo]}>Chat</Text>
				<Text style={[styles.healthCare1, styles.chat1Typo]}>Health-care</Text>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	iheb: {
		width: "100%",
	},
	buttonFlexBox: {
		alignItems: "center",
		position: "absolute",
	},
	vectorIconLayout1: {
		maxHeight: "100%",
		maxWidth: "100%",
		left: "28.02%",
		right: "70.95%",
		width: "7.03%",
		height: "4.81%",
		position: "absolute",
		overflow: "hidden",
	},
	vectorIconPosition1: {
		bottom: "54.42%",
		top: "21.00%",
	},
	vectorIconPosition: {
		bottom: "43.65%",
		top: "35.54%",
	},
	vectorIconLayout: {
		left: "70.97%",
		right: "25.99%",
		maxHeight: "100%",
		maxWidth: "100%",
		width: "7.03%",
		height: "4.81%",
		position: "absolute",
		overflow: "hidden",
	},
	iconFlexBox: {
		flexDirection: "row",
		backgroundColor: Color.primaryGreen500,
	},
	premiumTypo: {
		fontFamily: FontFamily.latoBlack,
		fontWeight: "900",
		textAlign: "center",
	},
	managementTypo: {
		width: 144,
		lineHeight: 18,
		top: 260,
		fontSize: FontSize.size_sm,
		textAlign: "center",
		color: Color.grayscaleText,
		fontFamily: FontFamily.latoLight,
		fontWeight: "500",
		position: "absolute",
	},
	chatTypo: {
		top: 350,
		width: 144,
		lineHeight: 18,
		fontSize: FontSize.size_sm,
		textAlign: "center",
		color: Color.grayscaleText,
		fontFamily: FontFamily.latoLight,
		fontWeight: "500",
		position: "absolute",
	},
	iconLayout: {
		left: "71.00%",
		right: "24.77%",
		width: "7.34%",
		height: "4.62%",
		maxHeight: "100%",
		maxWidth: "100%",
		position: "absolute",
		overflow: "hidden",
	},
	icon2Position: {
		top: 28,
		position: "absolute",
	},
	management1Typo: {
		top: 215,
		width: 144,
		lineHeight: 18,
		fontSize: FontSize.size_sm,
		textAlign: "center",
		color: Color.grayscaleText,
		fontFamily: FontFamily.latoLight,
		fontWeight: "500",
		position: "absolute",
	},
	chat1Typo: {
		top: 295,
		width: 144,
		lineHeight: 18,
		fontSize: FontSize.size_sm,
		textAlign: "center",
		color: Color.grayscaleText,
		fontFamily: FontFamily.latoLight,
		fontWeight: "500",
		position: "absolute",
	},
	primaryButton: {
		fontSize: 14,
		lineHeight: 21,
		textAlign: "center",
		// fontFamily: FontFamily.latoLight,
		fontWeight: "500",
		color: Color.grayscaleText,
	},
	button: {
		top: 350,
		borderRadius: Border.br_xs,
		paddingHorizontal: Padding.p_13xl,
		paddingVertical: Padding.p_base,
		justifyContent: "center",
		flexDirection: "row",
		backgroundColor: Color.primaryGreen500,
		width: 327,
	},
	backgroundIcon: {
		borderRadius: 8,
		height: 488,
		width: 327,
		left: 18,
		top: -30,
	},
	vectorIcon: {
		bottom: "26.35%",
		top: "57.85%",
	},
	vectorIcon1: {
		top: "74.62%",
		bottom: "15.58%",
	},
	vectorIcon2: {
		maxHeight: "100%",
		maxWidth: "100%",
		left: "28.62%",
		right: "70.95%",
		width: "7.03%",
		height: "4.81%",
		position: "absolute",
		// overflow: "hidden",
	},
	vectorIcon3: {
		maxHeight: "100%",
		maxWidth: "100%",
		left: "28.02%",
		right: "70.95%",
		width: "7.03%",
		height: "4.81%",
		position: "absolute",
		overflow: "hidden",
	},
	vectorIcon4: {
		bottom: "43.65%",
		top: "36.00%",
	},
	vectorIcon5: {
		bottom: "54.42%",
		top: "21%",
	},
	icon1: {
		width: 40,
		height: 40,
	},
	icon: {
		left: 155,
		borderRadius: 64,
		padding: 12,
		top: -55,
		position: "absolute",
	},
	price: {
		color: Color.grayscaleWhite,
		lineHeight: 20,
		fontSize: FontSize.size_lg,
		textAlign: "center",
		fontFamily: FontFamily.latoLight,
		fontWeight: "500",
	},
	text: {
		fontSize: 28,
		lineHeight: 32,
		fontFamily: FontFamily.latoBlack,
		fontWeight: "900",
		letterSpacing: 1,
		color: Color.grayscaleWhite,
	},
	content1: {
		top: 448,
		borderBottomRightRadius: Border.br_base,
		borderBottomLeftRadius: Border.br_base,
		backgroundColor: Color.primaryBlue500,
		paddingHorizontal: Padding.p_base,
		paddingVertical: 20,
		justifyContent: "space-between",
		left: 18,
		// alignItems: "center",
		// flexDirection: "row",
		width: "100%",
		position: "absolute",
	},
	getPremium: {
		fontSize: 24,
		lineHeight: 32,
		fontFamily: FontFamily.latoBlack,
		fontWeight: "900",
		color: Color.grayscaleText,
		top: -80,
		left: 25,
	},
	getNewFeatures: {
		lineHeight: 22,
		fontFamily: FontFamily.latoRegular,
		color: Color.grayscaleLightText,
		width: 295,
		marginTop: 8,
		fontSize: FontSize.size_sm,
		textAlign: "center",
		top: -85,
		left: 25,
	},
	content2: {
		top: 88,
		left: 16,
	},
	line: {
		top: 300,
		borderStyle: "dashed",
		borderColor: "#3B3737",
		borderRadius: 0.001,
		borderTopWidth: 1,
		width: 280,
		height: 1,
		left: 41,
		position: "absolute",
		top: 234,
	},
	management: {
		left: 33,
	},
	veterinarian: {
		left: 174,
	},
	chat: {
		left: 30,
	},
	healthCare: {
		left: 176,
	},
	xIcon: {
		bottom: "26.54%",
		top: "58%",
	},
	xIcon1: {
		top: "75%",
		bottom: "15.58%",
	},
	content: {
		top: 138,
		height: 520,
		// width: 327,
		left: 0,
		position: "absolute",
	},
	headerChild: {
		backgroundColor: Color.grayscaleWhite,
	},
	premiumStatus: {
		left: 121,
		lineHeight: 24,
		fontFamily: FontFamily.latoBlack,
		fontWeight: "900",
		textAlign: "center",
		letterSpacing: 1,
		fontSize: FontSize.size_lg,
		top: 56,
		color: Color.grayscaleText,
	},
	management1: {
		left: 60,
	},
	veterinarian1: {
		left: 200,
	},
	chat1: {
		left: 55,
	},
	healthCare1: {
		left: 200,
	},
	paymentSuccess: {
		backgroundColor: "#CDEDD8",
		// flex: 1,
		// width: "100%",
		height: 812,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default Care;
