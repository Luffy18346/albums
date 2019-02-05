import React, { Component } from "react";
import { Text, View, StyleSheet, Platform } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>
        {props.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'ios' ? 16 : 0,
    height: 60,
    backgroundColor: "#F8F8F8"
  },
  textStyle: {
    fontSize: 20
  }
});

export default Header;
