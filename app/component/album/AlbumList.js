import React, { Component } from "react";
import axios from "axios";
import { Text, View, StyleSheet, Platform, ScrollView } from "react-native";
import AlbumDetail from "./AlbumDetail";

// const AlbumList = () => <Text>AlbumList</Text>;

class AlbumList extends Component {
  state = {
    albumList: []
  };

  componentWillMount() {
    axios
      .get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(response => this.setState({ albumList: response.data }));
  }

  renderAlbumList() {
    return this.state.albumList.map(album => (
      <AlbumDetail key={album.title} album={album} />
    ));
  }

  render() {
    return <ScrollView>{this.renderAlbumList()}</ScrollView>;
  }
}

export default AlbumList;
