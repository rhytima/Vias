import React, { Component } from 'react';
import { Alert, Button, TextInput, Text, View, StyleSheet } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
	  email: '',
	  buttonText: 'Login',
	  showSignUp: true
    };
  }
  
  onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
  }

  onSignUp() {
	  this.setState({
		buttonText: 'Sign Up',
		showSignUp: false
	  });
  }

  render() {
    return (
      <View style={styles.container}>
		<>{(!this.state.showSignUp) ? 
			<TextInput
			value={this.state.email}
			onChangeText={(email) => this.setState({ email })}
			placeholder={'Email'}
			style={styles.input}
			/>
			: "" }
        </>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        <Button
          title={this.state.buttonText}
          style={styles.input}
          onPress={this.onLogin.bind(this)}
        />
		<>{(this.state.showSignUp) ? <Text style={styles.text}>Do not have an account <Text style={styles.hyperlinkStyle} onClick={this.onSignUp.bind(this)}> Sign Up</Text> here</Text> : ""}</>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
	margin: 'auto',
	marginTop: '81px',
    padding: '10px',
    border: '1px solid #c9c9c9',
    borderRadius: '5px',
    background: '#f5f5f5',
    width: '420px',
    display: 'flex'
  },
  input: {
    width: '100%',
    height: '44px',
    padding: '10px',
    borderWidth: '1px',
    border: '1px solid #bfbfbf',
    marginBottom: '10px',
  },
  text:{
	padding: '15px'
  },
  hyperlinkStyle:{
	color: 'blue',
	cursor: 'pointer'
  }
});