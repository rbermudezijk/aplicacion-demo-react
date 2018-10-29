'use strict';

import React, { Component }  from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image,
         ActivityIndicator,} from 'react-native';

import urlPagination from './Utils';
import SearchService from './SearchService';

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: '#656565',
  },
  container: {
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
  },
  image: {
    width: 217,
    height: 138,
  },
});

const layout = {
  searchInput: {
    underlineColorAndroid: 'transparent',
    style: styles.searchInput,
    placeholder: 'Buscar por nombre o C.P.',
  },
  searchButton: {
    color: '#48BBEC',
    title: 'Buscar',
  },
  searchImage: {
    source: require('./assets/house.png'),
    style: styles.image
  }
};

type Props = {};

export default class SearchPage extends Component<Props> {
    static navigationOptions = {
      title: 'Buscador de Casas',
    };
  
    constructor (...args) {
      super(...args);
      this.state = {
        searchString: 'london',
        isLoading: false,
        message: '',
      };

      this.searchService = new SearchService();
    }

    _activeSpinner = (() => {
      return this.state.isLoading 
            ? <ActivityIndicator size='large'/>
            : null
    }).bind(this);

    _onSearchTextChanged = ((event) => {
      this.setState({searchString: event.nativeEvent.text});
    }).bind(this);

    _onSearchPressed = (() => {
      this.setState({isLoading: true});

      this.searchService.select(
        urlPagination({
          place_name: this.state.searchString,
          page: 1,
        })
      )
      .then( res =>
        this.props.navigation.navigate(
          'Results',{listings: res.listings}
        ) )
      .catch( error => this.setState({message: error.message}) )
      .finally( ()  => this.setState({isLoading: false}) )

    }).bind(this);

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
            <TextInput 
              value={this.state.searchString}
              onChange={this._onSearchTextChanged}
              {...layout.searchInput}/>
            <Button 
              onPress={this._onSearchPressed}
              {...layout.searchButton}/>
          </View>
          <Image {...layout.searchImage}/>
          {this._activeSpinner()}
          <Text style={styles.description}>
            {this.state.message}
          </Text>
        </View>
      );
    }
}