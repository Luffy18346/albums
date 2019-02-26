/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

// import a couple of library to help create a component
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Header from "./app/component/Header";
import AlbumList from "./app/component/album/AlbumList";

// create a component

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerTitle="Albums" />
      <AlbumList />
    </View>
  );
};

// Render it to device
export default App;
