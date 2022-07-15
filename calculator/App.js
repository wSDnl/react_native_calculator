import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Btn from './src/componentes/Btn'
import Display from './src/componentes/Display'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection:'row',
    flexWrap:'wrap',
  }
});

export default class App extends Component {

  state = {
    displayValue: '0'
  }

  addDigit = n => {
    this.setState({ displayValue: n })
  }

  clearMemory = () => {
    this.setState({ displayValue:'0' })
  }

  setOperation = operation => {  }

  render(){
    return (
      <View style={styles.container}>
        
        <Display value={ this.state.displayValue } />

        <View style={styles.buttons}>
          <Btn label='AC' operador onClick={ this.clearMemory }/>
          <Btn label='/' operador onClick={ this.setOperation }/>
          <Btn label='*' operador onClick={ this.setOperation }/>
          <Btn label='-' operador onClick={ this.setOperation }/>
          <Btn label='7' onClick={ this.addDigit }/>
          <Btn label='8' onClick={ this.addDigit }/>
          <Btn label='9' onClick={ this.addDigit }/>
          <Btn label='+' operador onClick={ this.setOperation }/>
          <Btn label='4' onClick={ this.addDigit }/>
          <Btn label='5' onClick={ this.addDigit }/>
          <Btn label='6' onClick={ this.addDigit }/>
          <Btn label='.' operador onClick={ this.addDigit }/>
          <Btn label='1' onClick={ this.addDigit }/>
          <Btn label='2' onClick={ this.addDigit }/>
          <Btn label='3' onClick={ this.addDigit }/>
          <Btn label='=' operador  onClick={ this.setOperation }/>
        </View>    
          
      </View>
    );
  }
}


