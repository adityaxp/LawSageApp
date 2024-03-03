import { Image, View, Text } from "react-native";
import React from "react";
import { TextCycler } from "../../../components/TextCycler";
import { LinkButton } from "../../../components/LinkButton";
import gitHubImage from "../../../../assets/images/github-mark.png";
import huggingFaceImage from "../../../../assets/images/huggingface-logo-noborder.png";
import styles from "./styles/background.style";

export const Background = () => {
  const texts = [
    "Navigate legal complexities with confidence",
    "Empowering decisions with AI precision",
    "Harnessing AI for legal empowerment",
    "AI-driven expertise for every legal query",
  ];
  const githubURL = "https://github.com/adityaxp/LawSageApp";
  const huggingfaceURL = "https://huggingface.co/AdityaXPV";
  const interval = 5000;
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../../../../assets/images/auth-background.jpg")}
          style={styles.image}
        />
        <Text style={styles.text}>Law Sage v0.2</Text>
        <View style={styles.textCycler}>
          <TextCycler texts={texts} interval={interval} />
        </View>
        <View style={styles.socialButtonContainer}>
          <LinkButton image={gitHubImage} link={githubURL} />
          <LinkButton image={huggingFaceImage} link={huggingfaceURL} />
        </View>
      </View>
      <View style={styles.curve} />
    </View>
  );
};
