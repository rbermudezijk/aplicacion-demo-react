import React, {Component} from 'react';
import { Text, View, Image } from 'react-native';

const layout = {
    mainImage: {
      height: 300,
      width: 420,
    }
};

type Props = {};

export default class SearchItemDetail extends Component<Props> {
    static navigationOptions = {
      title: 'Detalles de la Casa'
    };

    constructor(...args) {
      super(...args);
    }

    render() {
        const { itemDetails } = this.props.navigation.state.params;
        
        return (
            <View>
                <Image
                  source={{uri: itemDetails.img_url}}
                  style={layout.mainImage}/>
            </View>
        )
    }
}