import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { connect } from 'react-redux';
import { ChangePage } from '.././redux/action';

class Nav extends React.Component {
  
	handlePage1=()=>{
		this.props.dispatch(ChangePage(1));
	}
		
	handlePage2=()=>{
		this.props.dispatch(ChangePage(2));
	}
	
	render() {		
		return (
      <View>
				<Button 
					title="Page 1"
					onPress={this.handlePage1}
					/>
				<Button 
					title="Page 2"
					onPress={this.handlePage2}
					/>
      </View>
    );
  }
}

function mapStateToProps(state){
	return {
		compPage: state.Page.page
	}
}

export default connect(mapStateToProps)(Nav);

const styles = StyleSheet.create({
  container: {
    flex: 1,
		backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
		width: 500,
  },
});