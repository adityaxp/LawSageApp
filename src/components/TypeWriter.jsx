import React, { useState, useEffect } from "react";
import { Platform, Text, View } from "react-native";

export const TypeWriter = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = text.split(" ");

  const parseDisplayText = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <Text
            key={index}
            style={{
              fontFamily: "semibold",
              fontSize: Platform.OS === "ios" ? 16.5 : 14,
            }}
          >
            {part.slice(2, -2)}
          </Text>
        );
      } else {
        return part;
      }
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentWordIndex < words.length) {
        setDisplayText((prevText) => prevText + words[currentWordIndex] + " ");
        setCurrentWordIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [currentWordIndex, words, speed]);

  return (
    <View>
      <Text
        style={{
          paddingLeft: 10,
          paddingRight: 10,
          textAlign: "left",
          fontFamily: "regular",
          fontSize: Platform.OS === "ios" ? 16.5 : 14,
        }}
      >
        {parseDisplayText(displayText)}
      </Text>
    </View>
  );
};
