import React from "react";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";

export const Skeleton = ({ width, height, radius, margin }) => {
  return (
    <ShimmerPlaceHolder
      LinearGradient={LinearGradient}
      style={{
        width: width,
        height: height,
        borderRadius: radius,
        marginLeft: margin,
      }}
    />
  );
};
