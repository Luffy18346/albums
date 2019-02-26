import React, { Component } from "react";
import { Text, View, StyleSheet, Platform, Image } from "react-native";
import Card from "../Card";
import CardSection from "../CardSection";

const AlbumDetail = props => {
  const { title, artist, thumbnail_image, image } = props.album;

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
