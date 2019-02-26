import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Platform,
  Image,
  Alert,
  Linking
} from "react-native";
import Button from "../Button";
import Card from "../Card";
import CardSection from "../CardSection";

const AlbumDetail = props => {
  const { title, artist, thumbnail_image, image, url } = props.album;

  const showAlert = () => {
    Alert.alert("You need to...");
  };

  return (
    <Card>
      <CardSection>
        <View>
          <Image
            style={{ width: 50, height: 50 }}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={styles.headerTextStyle}>
          <Text style={{ fontSize: 18 }}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={{ width: null, height: 300, flex: 1 }}
          source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <Button
          onPress={() => {
            Linking.openURL(url).catch(err =>
              console.error("An error occurred", err)
            );
          }}
        >
          <Text>Buy Now</Text>
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  headerTextStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingStart: 8
  }
});

export default AlbumDetail;
