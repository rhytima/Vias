import React, { Component } from 'react';
import { Button, TextInput, Text, View, StyleSheet } from 'react-native';
import history from './history';
import {withRouter} from 'react-router-dom';

class LoginPage extends Component {
  
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
    //const { username, password } = this.state;

    //Alert.alert('Credentials', `${username} + ${password}`);

  }

  onSignUp() {
	  this.setState({
		buttonText: 'Sign Up',
		showSignUp: false
	  });
  }

  handleClick() {
    console.log("test");
    //history.push("/test");
    history.push("/"+ this.state.username + ".vias.com");
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
        onPress={this.handleClick.bind(this)}/>
		<>{(this.state.showSignUp) ? <Text style={styles.text}>Do not have an account <Text style={styles.hyperlinkStyle} onClick={this.onSignUp.bind(this)}> Sign Up</Text> here</Text> : ""}</>
      </View>
    );
  }
}

export default withRouter(LoginPage);

const styles = StyleSheet.create({
  container: {
	margin: 'auto',
	marginTop: '81px',
    padding: '10px',
    border: '1px solid #c9c9c9',
    borderRadius: '5px',
    backgroundColor: '#ffffff',
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