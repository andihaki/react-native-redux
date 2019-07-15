import React, { Component } from "react";
// import firebase from "firebase";
import { Text } from "react-native";
import { connect } from "react-redux";
import { emailChanged } from "../actions";
import {
  Button,
  Card,
  CardSection,
  Input,
  Spinner
} from "../components/common";

class LoginForm extends Component {
  state = { email: "", password: "", error: "", loading: false };
  buttonPressHandler() {
    const { email, password } = this.state;
    this.setState({ error: "", loading: true });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.onLoginSuccess())
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => this.onLoginSuccess())
          .catch(() => this.onLoginFailed());
      });
  }
  onLoginFailed() {
    this.setState({ error: "Authentication Failed" });
  }
  onLoginSuccess() {
    this.setState({ email: "", password: "" });
  }
  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return <Button onPress={() => this.buttonPressHandler()}>Login</Button>;
  }
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={() => this.onEmailChange()}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  }
};

export default connect(
  null,
  emailChanged
)(LoginForm);
