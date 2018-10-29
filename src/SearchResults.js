
import React, { Component } from 'react';
import {
  StyleSheet, Image, View, TouchableHighlight, FlatList, Text
} from 'react-native'

type Props = {};

const layout = {
  touchable: {
    underlayColor: '#dddddd',
  },
}

export default class SearchResults extends Component<Props> {
    static navigationOptions = {
      title: 'Resultados',
    };

    constructor(...args){
      super(...args);
    }
    
    _keyExtractor = (
      (item, index) => index.toString()
    ).bind(this);

    _renderItem = ({item}) => 
      <TouchableHighlight {...layout.touchable}>
        <View>
          <Text>{item.title}</Text>
        </View>
      </TouchableHighlight>
    
    render() {
      const { params } = this.props.navigation.state;

      return (
        <FlatList
          data={params.listings}
          keyExtractor = {this._keyExtractor}
          renderItem={this._renderItem}
        />
      );
    }
}