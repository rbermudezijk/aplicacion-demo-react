
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import ListItem from './ListItem';

type Props = {};

export default class SearchResults extends Component<Props> {
    static navigationOptions = {
      title: 'Resultados',
    };

    constructor(...args){
      super(...args);
    }
    
    _keyExtractor = (
      (item, index) => index.toString()
    );

    _onPressItem = (
      (index) => console.log(index)
    );

    _renderItem = (({item, index}) => 
      <ListItem
        item={item}
        index={index}
        onPressItem={this._onPressItem}
      />);
    
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