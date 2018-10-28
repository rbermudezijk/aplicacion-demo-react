'use strict';

import React, { Component }  from 'react';
import { StyleSheet, Text, 
         TextInput,  View,
         Button,    Image,
         ActivityIndicator,} from 'react-native';

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
  container:{
    padding: 30,
    marginTop: 65,
    alignItems: 'center',
  },
});

type Props = {};

export default class SearchPage extends Component<Props> {
    static navigationOptions = {
      title: 'Buscador de Casas',
    };
  
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.description}>
            ¡Busqueda de casas para comprar!
          </Text>
          <Text style={styles.description}>
            Búsqueda por ubicación o código postal.
          </Text>
        </View>
      );
    }
  }