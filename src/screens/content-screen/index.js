import React from 'react';
import Sound from 'react-native-sound';
import {
  ImageBackground,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  Alert,
} from 'react-native';
import styles from './styles';
// import LoginModal from '../../shared/components/Modals/LoginModal';
import CustomHeader from '../../shared/components/Header';
import StoreBubble from '../../shared/components/StoreBubble';
import getIUri from '../../shared/utils/getIUri';
import LoadModal from '../../shared/components/Modals/LoadModal';
import SoundPlayer from '../../shared/utils/SoundPlayer';

class ArabicCharsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.soundPlayer = new SoundPlayer();

    this.state = {
      visible: false,
    };
  }
  componentDidMount() {
    const {
      props: {
        route: {
          params: {subCategory},
        },
      },
    } = this;
    try {
      this.props.getCategoryContent(subCategory.id);
    } catch (e) {
      console.log(e);
    }
  }
  onPlayPress = audio => {
    console.log('onPlayPress method');
    if (audio) {
      this.soundPlayer.playSound(audio);
    }
  };
  render() {
    const {
      props: {
        categoryContent,
        loading,
        route: {
          params: {subCategory, user},
        },
      },
    } = this;
    console.log(
      '=======================================================================================================',
    );
    console.log(this.props, 'content');
    return (
      <ImageBackground
        resizeMode={'cover'}
        source={{uri: getIUri(subCategory.bg_image)}}
        style={styles.container}>
        <ScrollView style={{flex: 1}}>
          <CustomHeader
            bgColor1={subCategory.title_color}
            bgColor2={subCategory.bg_color}
            username={user?.userDetail?.name}
            title={subCategory.name}
            actions={{
              goBack: () => this.props.navigation.goBack(),
            }}
          />
          {/*<StoreBubble bgColor={'#9B1C98'} />*/}
          <View style={styles.listContainer}>
            <FlatList
              data={categoryContent}
              renderItem={this.renderItem}
              keyExtractor={({index}) => `item-${index}`}
              style={{
                flex: 1,
              }}
              horizontal={false}
              numColumns={3}
              getItemLayout={this._getItemLayout}
              contentContainerStyle={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
              columnWrapperStyle={{
                alignSelf: 'center',
                justifyContent: 'flex-end',
              }}
              ItemSeparatorComponent={() => (
                <View style={{paddingVertical: 10}} />
              )}
            />
          </View>

          {/*<LoginModal*/}
          {/*  modalVisible={this.state.visible}*/}
          {/*  closeModal={this.closeModal}*/}
          {/*/>*/}
          <LoadModal modalVisible={loading} />
        </ScrollView>
      </ImageBackground>
    );
  }
  renderItem = ({item, index}) => {
    const {
      props: {
        route: {
          params: {subCategory, isLink, user},
        },
      },
    } = this;
    const uri = getIUri(item.image);
    const audio = getIUri(item.voice_file);
    // console.log(audio);
    return (
      <TouchableOpacity
        onPress={() =>
          isLink
            ? this.props.navigation.navigate('Browser', {
                game: item,
              })
            : this.onPlayPress(audio)
        }
        style={[
          styles.primaryButton,
          {marginHorizontal: '2%', backgroundColor: subCategory.title_color},
        ]}>
        <View style={[styles.iconStyle]}>
          <Image
            style={styles.imageStyle}
            source={{
              uri,
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };
  _getItemLayout = (data, index) => {
    const productHeight = 110;
    return {
      length: productHeight,
      offset: productHeight * index,
      index,
    };
  };
  closeModal = () => this.setState({visible: false});
  openModal = () => this.setState({visible: true});
}

export default ArabicCharsScreen;
