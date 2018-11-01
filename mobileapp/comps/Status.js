import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { connect } from 'react-redux';
import { ChangePage, ChangeStatus } from '.././redux/action';

class Status extends React.Component {
  render() {
    return (
      <View style={styles.container}>
				<Text>the page is {this.props.compPage}</Text>
				<Text>the status is {this.props.status}</Text>
      </View>
    );
  }
}

function mapStateToProps(state){
	return {
		compPage: state.Page.page,
		status: state.Page.status
	}
}

export default connect(mapStateToProps)(Status);

const styles = StyleSheet.create({
  container: {
		flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
