import React from "react";
import { View, Text, Image, Linking } from "react-native";

import Card from "./common/Card";
import CardSection from "./common/CardSection";
import Button from "./common/Button";

const Album = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const {
    thumbnailImage,
    headerContainerStyle,
    thumbnailContainerStyle,
    headerStyle,
    imageStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailImage} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerContainerStyle}>
          <Text style={headerStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={imageStyle} source={{ uri: image }} />
      </CardSection>
      <CardSection>
        <Button onClick={() => Linking.openURL(url)}>Buy Now</Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContainerStyle: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  headerStyle: {
    fontSize: 18
  },
  thumbnailImage: {
    height: 50,
    width: 50
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  thumbnailContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  }
};

export default Album;
