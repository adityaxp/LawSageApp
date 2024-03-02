import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import styles from "./styles/textCycler.style";

const TypingText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prevText) => {
        if (currentIndex < text.length) {
          currentIndex++;
          return text.slice(0, currentIndex);
        } else {
          clearInterval(intervalId);
          return prevText;
        }
      });
    }, 100);

    const cursorIntervalId = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(intervalId);
      clearInterval(cursorIntervalId);
    };
  }, [text]);

  return (
    <View style={styles.container}>
      <Text style={styles.tagline}>
        {displayedText} {showCursor ? "|" : " "}
      </Text>
    </View>
  );
};

export const TextCycler = ({ texts, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View>
      <TypingText text={texts[currentIndex]} />
    </View>
  );
};
