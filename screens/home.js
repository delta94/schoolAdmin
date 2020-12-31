import React, { Component } from 'react';
import {
    Container
} from "native-base";
import CampusList from "./campusList";
import {connect} from "react-redux"
class Home extends Component {
    render() {
        return (
            <Container>
                <CampusList 
                campusList={this.props.admin.franchiseeList}
                nav={this.props.navigation}
                />
            </Container>
        );
    }
}

function mapStateToProps({admin}){
    return {admin}
}

export default connect(mapStateToProps)(Home)