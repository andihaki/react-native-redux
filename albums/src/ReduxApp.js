import React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import { Header } from "./components/common";
import LibraryList from "./containers/LibraryList";

const ReduxApp = props => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1}}>
        <Header headerText="Tech Stack" />
        <LibraryList />
        {props.children}
      </View>
    </Provider>
};

export default ReduxApp;
