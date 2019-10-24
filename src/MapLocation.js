import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

type Props = {};

export default class MapLocation extends Component<Props> {
   static navigationOptions={
     title: 'Ubicación en el Mapa',
   }

   constructor(...args){
       super(...args);
   }

   render() {
       const {latitude, longitude} = this.props.navigation.state.params;
       
       return <View style={styles.container}>
         <MapView
           style={styles.map}
           region={{
             latitude,
             longitude,
             latitudeDelta: 0.11, 
             longitudeDelta: 0.11,
           }}>
           <MapView.Marker
             coordinate={{latitude,longitude}}
             title={'Ubicación de departamento.'}
           />
         </MapView>
       </View>
   }
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject
    },
    map: {
      ...StyleSheet.absoluteFillObject
    }
})