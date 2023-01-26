import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Greeting from "greetings";

const LocalPage = ({ route }) => {
  return (
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
        alignItems: "center",
        justifyContent: "center"
      }}
    >

      <Greeting color={"orange"} title={"Hello from bundle!"}/>

    </View>
  );
};

export default LocalPage;
