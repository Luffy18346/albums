import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Platform,
  TouchableHighlight,
  TouchableOpacity,
  Alert
} from "react-native";

const Button = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
      <Text style={styles.textStyle}>
        {
          /* {props.text} */
          props.children
        }
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007aff"
  },
  textStyle: {
    alignSelf: "center",
    color: "#007aff",
    fontWeight: "400",
    paddingTop: 10,
    paddingBottom: 10
  }
});

export default Button;
