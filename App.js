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

// create a component

const App = () => <Header title='Albums' />;

// Render it to device
export default App;
