import * as React from "react";
import {
	StyleSheet,
	View,
	Text,
	SafeAreaView,
	ScrollView,
	TouchableOpacity,
	Image,
} from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "./GlobalStyle.js";
import { useRouter } from "expo-router";
const IPhone13ProMax3 = () => {
	const router = useRouter();
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ScrollView>
				<View style={[styles.iphone13ProMax3, styles.signInLayout]}>
					<View style={styles.signInParent}>
						<View style={[styles.signIn, styles.signInLayout]}>
							<View style={styles.signInChild} />
							<View style={[styles.frameParent, styles.frameParentShadowBox]}>
								<View style={styles.hollaKevinParent}>
									<Text style={[styles.hollaKevin, styles.augs2022Typo]}>
										Holla, tochtacha!
									</Text>
									<Text
										style={[
											styles.checkYourPlants,
											styles.aboutToRipenFlexBox,
										]}>
										Check your plants today
									</Text>
								</View>

								<View style={styles.groupParent}>
									<Image
										style={styles.frameLayout}
										contentFit="cover"
										source={require("../../assets/search-normal.png")}
									/>
									<TouchableOpacity onPress={() => router.push("notification")}>
										<Image
											style={[styles.frameItem, styles.frameLayout]}
											contentFit="cover"
											source={require("../../assets/notification.png")}
										/>
									</TouchableOpacity>
								</View>
							</View>
						</View>
						<TouchableOpacity
							onPress={() => router.push("weather")}
							style={[styles.rectangleParent, styles.groupChildLayout]}>
							<View >
								<View style={[styles.groupChild, styles.groupChildLayout]} />
								<View style={styles.frameGroup}>
									<View>
										<View style={styles.frameView}>
											<View style={styles.frameView}>
												<Image
													style={styles.vuesaxoutlinelocationIcon}
													contentFit="cover"
													source={require("../../assets/location.png")}
												/>
												<Text
													style={[
														styles.colomaduIndonesia,
														styles.partlyCloudyTypo,
													]}>
													Colomadu, Indonesia
												</Text>
											</View>
											<Text style={[styles.augs2022, styles.augs2022Typo]}>
												20 Augs 2022
											</Text>
										</View>
										<Image
											style={styles.frameInner}
											contentFit="cover"
											source={require("../../assets/Sun.png")}
										/>
									</View>
									<View style={styles.frameParent1}>
										<View style={styles.frameView}>
											<Image
												style={styles.sunCloudIcon}
												contentFit="cover"
												source={require("../../assets/Sun.png")}
											/>
											<View style={styles.parent}>
												<Text style={[styles.text, styles.textPosition]}>
													20
												</Text>
												<Text style={[styles.c, styles.cFlexBox]}>°C</Text>
											</View>
										</View>
										<View style={styles.partlyCloudyParent}>
											<Text style={styles.partlyCloudyTypo}>Partly cloudy</Text>
											<View style={styles.t34Parent}>
												<Text style={styles.t34Typo}>T:34°</Text>
												<Text style={[styles.r22, styles.t34Typo]}>R:22°</Text>
											</View>
										</View>
									</View>
								</View>
							</View>
						</TouchableOpacity>

						<View style={[styles.groupItem, styles.groupItemPosition]} />
						<Text style={[styles.news, styles.newsLayout]}>News</Text>
						<Text style={[styles.contactAnExpert, styles.chiliPlantTypo]}>
							Contact an expert
						</Text>
						<View style={[styles.rectangleGroup, styles.groupLayout]}>
							<View style={[styles.groupInner, styles.groupLayout]} />
							<View style={styles.rectangleView} />
							<View style={[styles.aboutToRipenWrapper, styles.newsLayout]}>
								<Text style={[styles.aboutToRipen, styles.aboutToRipenFlexBox]}>
									About to ripen
								</Text>
							</View>
							<View style={[styles.chiliPlantParent, styles.chiliPosition]}>
								<Text style={[styles.chiliPlant, styles.chiliPlantTypo]}>
									Chili plant
								</Text>
								<View style={styles.vuesaxoutlinelocationGroup}>
									<Image
										style={styles.vuesaxoutlinelocationIcon1}
										contentFit="cover"
										source={require("../../assets/Base-color.png")}
									/>
									<Text style={[styles.ranjiganWangon, styles.homeTypo]}>
										Ranjigan, wangon
									</Text>
								</View>
							</View>
						</View>
						<View style={[styles.rectangleContainer, styles.groupLayout]}>
							<View style={[styles.groupInner, styles.groupLayout]} />
							<View style={styles.rectangleView} />
							<View style={[styles.aboutToRipenWrapper, styles.newsLayout]}>
								<Text style={[styles.aboutToRipen, styles.aboutToRipenFlexBox]}>
									About to ripen
								</Text>
							</View>
							<View style={[styles.chiliPlantParent, styles.chiliPosition]}>
								<Text style={[styles.chiliPlant, styles.chiliPlantTypo]}>
									Chili plant
								</Text>
								<View style={styles.vuesaxoutlinelocationGroup}>
									<Image
										style={styles.vuesaxoutlinelocationIcon1}
										contentFit="cover"
										source={require("../../assets/Base-color.png")}
									/>
									<Text style={[styles.ranjiganWangon, styles.homeTypo]}>
										Ranjigan, wangon
									</Text>
								</View>
							</View>
						</View>
						<View style={[styles.groupView, styles.groupViewPosition]}>
							<View style={[styles.groupInner, styles.groupLayout]} />
							<View style={styles.rectangleView} />
							<View style={[styles.aboutToRipenWrapper, styles.newsLayout]}>
								<Text style={[styles.aboutToRipen, styles.aboutToRipenFlexBox]}>
									About to ripen
								</Text>
							</View>
							<View style={[styles.chiliPlantContainer, styles.chiliPosition]}>
								<Text style={[styles.chiliPlant, styles.chiliPlantTypo]}>
									Chili plant
								</Text>
								<View style={styles.vuesaxoutlinelocationGroup}>
									<Image
										style={styles.vuesaxoutlinelocationIcon1}
										contentFit="cover"
										source={require("../../assets/Base-color.png")}
									/>
									<Text style={[styles.ranjiganWangon, styles.homeTypo]}>
										Bojong, wangon
									</Text>
								</View>
							</View>
						</View>
						<View style={[styles.rectangleParent1, styles.groupViewPosition]}>
							<View style={[styles.groupInner, styles.groupLayout]} />
							<View style={styles.rectangleView} />
							<View style={[styles.aboutToRipenWrapper, styles.newsLayout]}>
								<Text style={[styles.aboutToRipen, styles.aboutToRipenFlexBox]}>
									About to ripen
								</Text>
							</View>
							<View style={[styles.chiliPlantParent, styles.chiliPosition]}>
								<Text style={[styles.chiliPlant, styles.chiliPlantTypo]}>
									Chili plant
								</Text>
								<View style={styles.vuesaxoutlinelocationGroup}>
									<Image
										style={styles.vuesaxoutlinelocationIcon1}
										contentFit="cover"
										source={require("../../assets/Base-color.png")}
									/>
									<Text style={[styles.ranjiganWangon, styles.homeTypo]}>
										Ranjigan, wangon
									</Text>
								</View>
							</View>
						</View>
						<Image
							style={[
								styles.vuesaxboldgalleryIcon,
								styles.vuesaxboldgalleryIconLayout,
							]}
							contentFit="cover"
							source={require("../../assets/Base-color.png")}
						/>
						<Image
							style={[
								styles.vuesaxboldgalleryIcon1,
								styles.vuesaxboldgalleryIconLayout,
							]}
							contentFit="cover"
							source={require("../../assets/Base-color.png")}
						/>
						<Image
							style={[
								styles.vuesaxboldgalleryIcon2,
								styles.vuesaxboldgalleryIconPosition,
							]}
							contentFit="cover"
							source={require("../../assets/Base-color.png")}
						/>
						<Image
							style={[
								styles.vuesaxboldgalleryIcon3,
								styles.vuesaxboldgalleryIconPosition,
							]}
							contentFit="cover"
							source={require("../../assets/Base-color.png")}
						/>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	signInLayout: {
		overflow: "hidden",
		height: 926,
	},
	frameParentShadowBox: {
		shadowOpacity: 1,

		shadowOffset: {
			width: 0,
			height: 4,
		},
	},
	augs2022Typo: {
		opacity: 0.7,
		textAlign: "left",
		color: Color.colorWhite,
		fontFamily: FontFamily.interMedium,
		fontWeight: "500",
	},
	aboutToRipenFlexBox: {
		textAlign: "center",
		color: Color.colorWhite,
	},
	frameLayout: {
		height: 30,
		width: 30,
	},
	groupChildLayout: {
		height: 152,
		// left: 10,
		width: "90%",
		position: "absolute",
	},
	partlyCloudyTypo: {
		lineHeight: 23,
		fontSize: 16,
		textAlign: "left",
		color: Color.colorWhite,
		fontFamily: FontFamily.interMedium,
		fontWeight: "500",
	},
	textPosition: {
		left: 0,
		top: 0,
	},
	cFlexBox: {
		textAlign: "left",
		color: Color.colorWhite,
		position: "absolute",
	},
	t34Typo: {
		color: Color.colorGray_200,
		lineHeight: 23,
		fontSize: 16,
		textAlign: "left",
		fontFamily: FontFamily.interMedium,
		fontWeight: "500",
	},
	groupItemPosition: {
		width: "100%",
		left: 0,
		position: "absolute",
		backgroundColor: Color.colorWhite,
	},
	newsLayout: {
		height: 31,
		position: "absolute",
	},
	chiliPlantTypo: {
		lineHeight: 18,
		color: Color.colorGray_100,
		textAlign: "center",
		fontSize: FontSize.size_sm,
	},
	groupLayout: {
		height: 229,
		width: 180,
		position: "absolute",
	},
	chiliPosition: {
		height: 47,
		left: 9,
		top: 165,
		position: "absolute",
	},
	homeTypo: {
		fontSize: FontSize.size_xs,
		textAlign: "center",
	},
	groupViewPosition: {
		left: 222,
		height: 229,
		width: 180,
		position: "absolute",
	},
	vuesaxboldgalleryIconLayout: {
		height: 30,
		width: 28,
		left: 105,
		position: "absolute",
	},
	vuesaxboldgalleryIconPosition: {
		left: 300,
		height: 30,
		width: 27,
		position: "absolute",
	},
	signInChild: {
		width: 212,
		height: 214,
		display: "none",
		transform: [
			{
				rotate: "-0.06deg",
			},
		],
	},
	hollaKevin: {
		lineHeight: 21,
		fontSize: FontSize.size_sm,
		alignSelf: "stretch",
		opacity: 0.7,
	},
	checkYourPlants: {
		marginTop: 4,
		fontFamily: FontFamily.interSemiBold,
		fontWeight: "600",
		fontSize: 16,
		textAlign: "center",
		lineHeight: 21,
		alignSelf: "stretch",
	},
	hollaKevinParent: {
		width: 188,
	},
	frameItem: {
		marginLeft: 8,
	},
	groupParent: {
		marginLeft: 93,
		flexDirection: "row",
	},
	frameParent: {
		height: "4.97%",
		width: "76.43%",
		top: "2.89%",
		right: "11.64%",
		bottom: "92.14%",
		left: "11.93%",
		shadowRadius: 4,
		elevation: 4,
		alignItems: "center",
		flexDirection: "row",
		shadowColor: "rgba(0, 0, 0, 0.25)",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		transform: [
			{
				rotate: "-0.06deg",
			},
		],
		position: "absolute",
	},
	signIn: {
		bottom: 1,
		backgroundColor: "#5db075",
		width: 427,
		transform: [
			{
				rotate: "-0.06deg",
			},
		],
		right: -10,
		position: "absolute",
	},
	groupChild: {
		bottom: 0,
		borderRadius: 16,
		backgroundColor: "rgba(255, 255, 255, 0.4)",
		right: 0,
	},
	vuesaxoutlinelocationIcon: {
		height: 27,
		width: 27,
	},
	colomaduIndonesia: {
		marginLeft: 6.7,
	},
	frameView: {
		alignItems: "center",
		flexDirection: "row",
		left: 10,
	},
	augs2022: {
		fontSize: 13,
		lineHeight: 20,
		marginLeft: 48.01,
	},
	frameInner: {
		width: 329,
		height: 1,
		opacity: 0.2,
		marginTop: 11.16,
	},
	sunCloudIcon: {
		width: 50,
		height: 50,
	},
	text: {
		fontSize: 49,
		lineHeight: 74,
		fontFamily: FontFamily.interSemiBold,
		fontWeight: "600",
		textAlign: "left",
		color: Color.colorWhite,
		position: "absolute",
	},
	c: {
		top: 8,
		left: 66,
		fontSize: 27,
		lineHeight: 39,
		fontFamily: FontFamily.interRegular,
	},
	parent: {
		width: 98,
		height: 74,
		marginLeft: 14.51,
	},
	r22: {
		marginLeft: 13.4,
	},
	t34Parent: {
		marginTop: 4.47,
		flexDirection: "row",
	},
	partlyCloudyParent: {
		marginLeft: 44.66,
	},
	frameParent1: {
		marginTop: 15.63,
		alignItems: "center",
		flexDirection: "row",
	},
	frameGroup: {
		right: 18,
		bottom: 19,
		width: 324,
		height: 119,
		position: "absolute",
	},
	rectangleParent: {
		left: 38,
		top:250,
		// bottom: 658,
		shadowRadius: 4.47,
		elevation: 4.47,
		shadowOpacity: 1,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowColor: "rgba(0, 0, 0, 0.25)",
	},
	groupItem: {
		top: 294,
		borderRadius: 30,
		height: 632,
	},
	news: {
		top: 310,
		left: 10,
		fontSize: 20,
		lineHeight: 26,
		width: 108,
		color: Color.colorGray_100,
		height: 31,
		textAlign: "center",
		fontFamily: FontFamily.interSemiBold,
		fontWeight: "600",
	},
	contactAnExpert: {
		top: 314,
		left: 274,
		width: 128,
		height: 22,
		fontFamily: FontFamily.interMedium,
		fontWeight: "500",
		position: "absolute",
	},
	groupInner: {
		borderRadius: Border.br_xs,
		borderStyle: "solid",
		borderColor: Color.colorWhitesmoke,
		borderWidth: 1,
		left: 0,
		top: 0,
		backgroundColor: Color.colorWhite,
	},
	rectangleView: {
		borderTopLeftRadius: Border.br_xs,
		borderTopRightRadius: Border.br_xs,
		backgroundColor: Color.colorGray_300,
		height: 151,
		width: 180,
		left: 0,
		top: 0,
		position: "absolute",
	},
	aboutToRipen: {
		fontSize: FontSize.size_3xs,
		lineHeight: 13,
		fontFamily: FontFamily.interMedium,
		fontWeight: "500",
	},
	aboutToRipenWrapper: {
		top: 7,
		left: 71,
		borderRadius: Border.br_81xl,
		backgroundColor: Color.colorGray_400,
		width: 102,
		paddingHorizontal: Padding.p_3xs,
		paddingVertical: Padding.p_7xs,
		flexDirection: "row",
	},
	chiliPlant: {
		fontFamily: FontFamily.interSemiBold,
		fontWeight: "600",
	},
	vuesaxoutlinelocationIcon1: {
		width: 12,
		height: 12,
	},
	ranjiganWangon: {
		lineHeight: 16,
		color: Color.colorDarkgray,
		marginLeft: 4,
		fontFamily: FontFamily.interMedium,
		fontWeight: "500",
	},
	vuesaxoutlinelocationGroup: {
		marginTop: 4,
		alignItems: "center",
		flexDirection: "row",
	},
	chiliPlantParent: {
		width: 135,
	},
	rectangleGroup: {
		left: 27,
		height: 229,
		top: 382,
	},
	rectangleContainer: {
		top: 631,
		left: 27,
		height: 229,
	},
	chiliPlantContainer: {
		width: 125,
	},
	groupView: {
		top: 382,
	},
	rectangleParent1: {
		top: 631,
	},
	vuesaxboldgalleryIcon: {
		top: 454,
	},
	vuesaxboldgalleryIcon1: {
		top: 711,
	},
	vuesaxboldgalleryIcon2: {
		top: 454,
	},
	vuesaxboldgalleryIcon3: {
		top: 711,
	},
	vuesaxboldhome2Icon: {
		width: 24,
		height: 24,
	},
	home: {
		color: Color.colorDarkslategray,
		marginTop: 6,
		fontFamily: FontFamily.interRegular,
	},
	vuesaxboldhome2Parent: {
		paddingHorizontal: Padding.p_9xs,
		paddingVertical: 0,
		alignItems: "center",
		flex: 1,
	},
	vectorIcon: {
		width: 20,
		height: 24,
	},
	icTimeIcon: {
		width: 23,
		height: 24,
	},
	frameParent2: {
		top: 846,
		shadowColor: "rgba(204, 204, 204, 0.12)",
		shadowRadius: 32,
		elevation: 32,
		height: 81,
		paddingHorizontal: 24,
		paddingTop: 20,
		paddingBottom: 32,
		flexDirection: "row",
		shadowOpacity: 1,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		borderRadius: Border.br_8xl,
	},
	signInParent: {
		bottom: -1,
		width: 430,
		height: 927,
		right: 0,
		position: "absolute",
	},
	iphone13ProMax3: {
		width: "100%",
		flex: 1,
		backgroundColor: Color.colorWhite,
		borderRadius: Border.br_8xl,
	},
});

export default IPhone13ProMax3;