// Index.ios.js - place code in here for IOS!!!!

// Import a library to help create a component
// import React from "react";
import { AppRegistry } from "react-native";

// import Header from "./src/components/Header";
// import AlbumList from "./src/containers/AlbumList";

// // Create a component
// const App = () => (
//   // flex : 1 expand seluruh konten
//   <View style={{ flex: 1 }}>
//     <Header headerText={"Albums"} />
//     <AlbumList />
//   </View>
// );

// // Render it to the device
// AppRegistry.registerComponent("albums", () => App);

//// untuk login
import App from "./src/App";

AppRegistry.registerComponent("albums", () => App);
