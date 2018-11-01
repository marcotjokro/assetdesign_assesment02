import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { connect } from 'react-redux';
import { ChangePage } from '.././redux/action';

import Nav from './Nav';
import Control from './Control';
import Status from './Status';
import Settings from './Settings';

class Main extends React.Component {
	render() {
		
		var comp = null;
		if(this.props.compPage === 1){
			comp = <Control />
		} else if(this.props.compPage === 2){
			comp = <Settings />
		}

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', width: 500, height: '100%', backgroundColor: this.props.bgcolor}}>
        <Nav />
				{comp}
				<Status />
      </View>
    );
  }
}

function mapStateToProps(state){
	return{
		compPage: state.Page.page,
		bgcolor: state.Page.bgcolor
	}
}

export default connect(mapStateToProps)(Main);

const styles = StyleSheet.create({
  container: {
    flex: 1,
		backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
		marginTop: 100,
  },
});
