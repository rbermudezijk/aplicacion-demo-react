'use strict';

import React, { Component }  from 'react';
import { StyleSheet, Text, 
         TextInput,  View,
         Button,    Image,
         ActivityIndicator,} from 'react-native';

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: '#656565',
  },
  container:{
    padding: 30,
    marginTop: 65,
    alignItems: 'center',
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  }
});

const layout = {
  searchInput: {
    underlineColorAndroid: 'transparent',
    style: styles.searchInput,
    placeholder: 'Buscar por nombre o C.P.',
  },
  searchButton: {
    onPress: () => {},
    color: '#48BBEC',
    title: 'Buscar',
  },
};

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
          <View style={styles.flowRight}>
            <TextInput {...layout.searchInput}/>
            <Button {...layout.searchButton}/>
          </View>
        </View>
      );
    }
  }