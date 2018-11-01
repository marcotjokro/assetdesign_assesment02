import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import combine from './redux/combine';
import { connect } from 'react-redux';

import Main from './comps/Main';

const store = createStore(
	combine,
	applyMiddleware(
		Thunk
	)
)

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Provider store={store}>
					<Main />
				</Provider>
      </View>
    );
  }
}

function mapStateToProps(state){
	return {
		compPage: state.Page.page,
		bgcolor: state.Page.bgcolor
	}
}
