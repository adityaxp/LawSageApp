import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";

export const TypeWriter = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = text.split(" ");

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
          textAlign: "justify",
          fontFamily: "regular",
        }}
      >
        {displayText}
      </Text>
    </View>
  );
};
