import React from 'react';
import AppLoading from 'expo-app-loading';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import {Provider} from "react-redux";
import {createStore,applyMiddleware,compose} from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers"
import Routes from "./routes/routes";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducers,{},composeEnhancers(applyMiddleware(reduxThunk)));

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Provider store={store}>
        <Routes/>
      </Provider>
    );
  }
}
