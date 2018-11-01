import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

import { connect } from 'react-redux';
import { ChangePage, ChangeStatus } from '.././redux/action';

class Control extends React.Component {
  
	handleBusy=()=>{
		this.props.dispatch(ChangeStatus('Busy'));
	}
	
	handleAvailable=()=>{
		this.props.dispatch(ChangeStatus('Available'));
	}
	
	handleCustom=(text)=>{
		this.props.dispatch(ChangeStatus(text));
	}
	
	render() {
    return (
      <View style={styles.container}>
				<Button 
					title="Busy"
					onPress={this.handleBusy}
					/>
				<Button 
					title="Available"
					onPress={this.handleAvailable}
					/>
				<TextInput
					style={{width: 200}}
					onChangeText={this.handleCustom}
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

export default connect(mapStateToProps)(Control);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
