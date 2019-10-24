
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

    _renderItem = (({item, index}) => 
      <ListItem
        item={item}
        index={index}
        navigate={this.props.navigation.navigate}
      />);
    
    render() {
      const { listings } = this.props.navigation.state.params;

      return (
        <FlatList
          data={listings}
          keyExtractor = {this._keyExtractor}
          renderItem = {this._renderItem}
        />
      );
    }
}