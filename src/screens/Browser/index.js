import React, {Component} from 'react';
import {StyleSheet, ActivityIndicator, View, Text} from 'react-native';
import {WebView} from 'react-native-webview';

class Browser extends Component {
  LoadingIndicatorView = () => (
    <ActivityIndicator
      color="#009b88"
      size="large"
      style={styles.ActivityIndicatorStyle}
    />
  );
  render() {
    const {
      params: {game},
    } = this.props.route;
    console.log('game', game);
    return (
      <WebView
        // source={{uri: params.link}}
        originWhitelist={['*']}
        source={{
          uri: game.game_link,
        }}
        renderLoading={this.LoadingIndicatorView}
        startInLoadingState={true}
        style={{
          flex: 1,
          marginTop: 20,
        }}
        onError={err => console.log(err, 'error ssdfdfdf')}
      />
    );
  }
}
const styles = StyleSheet.create({
  ActivityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
  },
});
export default Browser;
