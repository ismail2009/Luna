import React from 'react';
import {
  ImageBackground,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import styles from './styles';
import LoginModal from '../../shared/components/Modals/LoginModal';
import CustomHeader from '../../shared/components/Header';
import MediaList from '../../shared/components/MediaList/container';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import StoreBubble from '../../shared/components/StoreBubble';
const initialLayout = {
  width: wp(90),
  backgroundColor: 'red',
  position: 'absolute',
};

// Dimensions.get('window').width
console.log(initialLayout, 'initialLayout');
class DrawingArtScreen extends React.Component {
  state = {
    visible: false,
    index: 0,
    routes: [],
    sceneMap: {},
  };
  componentDidMount() {
    const {
      state: {index, routes},
      props: {
        categories,
        route: {
          params: {category, user},
        },
      },
    } = this;
    const resultComp = {};
    const result = [];
    console.log(this.props);
    category.sub_categories.forEach(item => {
      resultComp[item.id] = () => (
        <MediaList
          itemId={item.id}
          navigation={this.props.navigation}
          // getCategoryContent={this.props.getCategoryContent}
        />
      );
      const obj = {
        key: item.id,
        title: item.name,
      };
      result.push(obj);
    });
    this.setState({
      routes: result,
      sceneMap: resultComp,
    });
  }

  render() {
    const {
      setIndex,
      state: {index, routes, sceneMap},
      props: {
        categories,
        route: {params},
      },
    } = this;
    console.log(this.props, 'sdongsfd');

    ////////////////////////////////
    // PURPLE_DARK: 'rgb(81, 81, 229)',
    // PURPLE_LIGHT: 'rgb(95,95, 249)',
    return (
      <ImageBackground
        resizeMode={'cover'}
        source={require('../../assets/images/songs-bg/background.png')}
        style={styles.container}>
        <ScrollView style={{flex: 1}}>
          <CustomHeader
            bgColor1={'#5151E5'}
            bgColor2={'#5F5FF9'}
            title={'Luna TV'}
            username={params?.user?.userDetail?.name}
            actions={{
              goBack: () => this.props.navigation.goBack(),
            }}
            isTab
            tabConfig={{
              index,
              routes,
              sceneMap,
              setIndex,
              initialLayout,
              rgb1: [81, 81, 229],
              rgb2: [95, 95, 249],
            }}
          />
          {/*<StoreBubble bgColor={'#5151E5'} />*/}

          {/*<LoginModal*/}
          {/*  modalVisible={this.state.visible}*/}
          {/*  closeModal={this.closeModal}*/}
          {/*/>*/}
        </ScrollView>
      </ImageBackground>
    );
  }
  renderItem = ({item, index}) => (
    <TouchableOpacity
      onPress={() => this.props.navigation.navigate('FullScreenVideo')}
      style={[styles.primaryButton, {marginHorizontal: '1.5%'}]}>
      <View style={styles.iconStyle}>{item.image}</View>
    </TouchableOpacity>
  );
  closeModal = () => this.setState({visible: false});
  openModal = () => this.setState({visible: true});
  setIndex = value => this.setState({index: value});
}

export default DrawingArtScreen;
