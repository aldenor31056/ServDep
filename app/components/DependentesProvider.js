import React, {Component} from 'react';
import { Alert, View, ListView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Header } from './common';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import DependentesList from './DependentesList';



import reducers from '../reducers';
import { createStore, combineReducers } from 'redux'

class DependentesProvider extends Component {

    constructor(props) {
        super(props);
    }    

  render() {
      return (
              <Provider store={createStore(reducers)}>
                  <View style={{ flex: 1 }}>
                       <Header headerText="Dependentes" />
                       <DependentesList  />
                  </View>
              </Provider> 
      );
  }
}

export default DependentesProvider;