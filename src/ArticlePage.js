import React, { Component } from 'react';
import { TextInput, View, StyleSheet, Button } from 'react-native';
import {withRouter} from 'react-router-dom';

class ArticlePage extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      title: '',
      description: ''
    };
  }

  onArticleSubmit() {
    alert("Article submitted successfully");
    //not working on chrome browser in web
    /*Alert.alert(
      '',
      'Are you sure you want to delete?',  
      [
         {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
         {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
   )*/  
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.title}
          onChangeText={(title) => this.setState({ title })}
          placeholder={'Title'}
          style={styles.input}
        />
        <TextInput
          value={this.state.description}
          onChangeText={(description) => this.setState({ description })}
          placeholder={'Description'}
          multiline={true}
          numberOfLines={9}
          style={styles.description}
        />
        <Button 
          title="Submit" 
          style={styles.input} 
          onPress={this.onArticleSubmit}
        />
      </View>
    );
  }
}

export default withRouter(ArticlePage);

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
    description: {
        width: '100%',
        padding: '10px',
        borderWidth: '1px',
        border: '1px solid #bfbfbf',
        marginBottom: '10px',
    }
});