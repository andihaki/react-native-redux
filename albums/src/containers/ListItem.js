import React, { Component } from "react";
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from "react-native";
import { connect } from "react-redux";
import { CardSection } from "../components/common";
import * as actions from "../actions";

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return <Text style={{ flex: 1 }}>{library.description}</Text>;
    }
  }
  render() {
    const { titleStyle } = styles;
    const { title, id } = this.props.library;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectedLibrary(id)}>
        <CardSection>
          <Text style={titleStyle}>{title}</Text>
        </CardSection>
        {this.renderDescription()}
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return { expanded };
};

export default connect(
  mapStateToProps,
  actions
)(ListItem);
