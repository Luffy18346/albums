import React, { Component } from "react";
import { Text, View, StyleSheet, Platform } from "react-native";

const Header = props => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>{props.headerTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    height: 60,
    backgroundColor: "#F8F8F8",
    alignItems: "center",
    justifyContent: "center",
    position: 'relative',
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        marginTop: 16
      },
      android: {
        elevation: 3
      }
    })
  },
  textStyle: {
    fontSize: 20,
    color: '#880000'
  }
});

export default Header;
