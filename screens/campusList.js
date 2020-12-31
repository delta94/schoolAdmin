import React, { Component } from 'react';
import {
    Card, CardItem, Left, Right, Text
} from "native-base";
import { FontAwesome } from '@expo/vector-icons';
import {
    FlatList,
    TouchableOpacity
} from "react-native";
class CampusList extends Component {

    renderCampus=({item})=>(
        <TouchableOpacity onPress={()=>this.props.nav.navigate('campus',item)}>
        <Card>
            <CardItem header>
                <Left>
                <Text>{item.Campus}</Text>
                </Left>
                <Right>
                <FontAwesome name="arrow-right" size={24} color="lightgrey" />
                </Right>
            </CardItem>
        </Card>
        </TouchableOpacity>
    )
    render() {
        return (
            <FlatList
            data={this.props.campusList}
            renderItem={this.renderCampus}
            keyExtractor={(item)=>item.CampusId.toString()}
            />
        );
    }
}

export default CampusList;