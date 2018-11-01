import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Switch } from 'react-native';

import { connect } from 'react-redux';
import { ChangePage, ChangeBG, ChangeNightmode } from '.././redux/action';

class Settings extends React.Component {
  
	handlePurple=()=>{
		this.props.dispatch(ChangeBG("purple"));
	}
	
	handleTeal=()=>{
		this.props.dispatch(ChangeBG("teal"));
	}
	
	handleOrange=()=>{
		this.props.dispatch(ChangeBG("orange"));
	}
	
	handleReset=()=>{
		this.props.dispatch(ChangeBG("white"));
	}
	
	
	
	render() {
    return (
      <View style={styles.container}>
				<Button 
					title="Purple"
					onPress={this.handlePurple}
					/>
				<Button 
					title="Teal"
					onPress={this.handleTeal}
					/>
				<Button 
					title="Orange"
					onPress={this.handleOrange}
					/>
				<Switch 
					onValueChange={this.handleSwitch}
					/>
				<Button 
					title="Reset"
					onPress={this.handleReset}
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

export default connect(mapStateToProps)(Settings);

const styles = StyleSheet.create({
  container: {
		flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
