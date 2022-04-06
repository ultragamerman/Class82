import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from "react-native-vector-icons/Ionicons"
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import react from "react";
import { RFValue } from "react-native-responsive-fontsize";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class StoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <View><Image source={require("../assets/story_image_1.png")} style={styles.storyImage} /></View>
          <View>
            <Text>{this.props.story.title}</Text>
            <Text>{this.props.story.author}</Text>
            <Text>{this.props.story.description}</Text>
          </View>
          <View>
            <Ionicons name={"heart"} size={RFValue(25)} color={"white"} />
            <Text>Story Card!</Text>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  droidSafeArea:{
    marginTop:Platform.OS==="android"?StatusBar.currentHeight:0,
  },
});
