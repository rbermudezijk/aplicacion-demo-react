import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ActionButton from 'react-native-action-button';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const layout = {
    iconButton: {
        width: 20,
        height: 20,        
    },
    icon: {
      width: 20,
      height: 20,
      margin: 10,
      marginLeft: 20,
    },
    iconText: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#656565',
    },
    mainImage: {
      height: 300,
      width: 420,
    },
    textDefault: {
      fontSize: 20,
      marginTop: 20,
      textAlign: 'center',
      color: '#656565',
    },
    title: {
      fontSize: 20,
      marginTop: 20,
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#48BBEC',
    },
    flowRight: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'stretch',
    },
};

type Props = {};

export default class SearchItemDetail extends Component<Props> {
    static navigationOptions = {
      title: 'Detalles de la Casa'
    };

    constructor(...args) {
      super(...args);
    }

    showMap = (()=>{
      const { itemDetails } = this.props.navigation.state.params;
      
      this.props.navigation.navigate(
        'MapLocation', {
          latitude: itemDetails.latitude,
          longitude: itemDetails.longitude,
        }
      );

    }).bind(this);

    render() {
        const { itemDetails } = this.props.navigation.state.params;

        return (
          <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
            <Image
              source={{uri: itemDetails.img_url}}
              style={layout.mainImage}/>
            <Text style={layout.title}>
              {itemDetails.title}
            </Text>
            <Text style={layout.textDefault}>
              {itemDetails.summary}
            </Text>
            {itemDetails.bathroom_number !== '' ?
            <View style={layout.flowRight}>
              <Image
                source={require('./assets/bath-icon.png')}
                style={layout.icon}/>
              <Text style={layout.iconText}>
                Baños: {itemDetails.bathroom_number}
              </Text>
            </View> : null}
            {itemDetails.bedroom_number !== '' ?
            <View style={layout.flowRight}>
              <Image
                source={require('./assets/bed-icon.png')}
                style={layout.icon}/>
              <Text style={layout.iconText}>
                Cuartos: {itemDetails.bedroom_number}
              </Text>
            </View> : null}
            {itemDetails.car_spaces !== '' ?
            <View style={layout.flowRight}>
              <Image
                source={require('./assets/car-icon.png')}
                style={layout.icon}/>
              <Text style={layout.iconText}>
                Estacionamientos: {itemDetails.car_spaces}
              </Text>
            </View> : null}
            <ActionButton 
              onPress={this.showMap}
              renderIcon={ ()=> (<MaterialIcons name="location-on" color='white' size={30}/>)}
            ></ActionButton>
          </View>
        )
    }
}