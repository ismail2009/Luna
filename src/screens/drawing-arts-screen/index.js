import React from 'react';
import {
  ImageBackground,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Text,
} from 'react-native';
import styles from './styles';
const {CachedImage} = require('react-native-cached-images');
import LoginModal from '../../shared/components/Modals/LoginModal';
import CustomHeader from '../../shared/components/Header';
// import StoreBubble from '../../shared/components/StoreBubble';
import {headers} from '../../shared/styles';
import {colors} from '../../shared/styles/theme.style';
import getIUri from '../../shared/utils/getIUri';
import {SoundButton} from '../../shared/components/Button';

class DrawingArtScreen extends React.Component {
  state = {
    visible: false,
  };

  render() {
    const {
      state: {visible},
      props: {
        categories,
        route: {
          params: {category, user},
        },
      },
    } = this;

    return (
      <ImageBackground
        resizeMode={'cover'}
        source={require('../../assets/images/arts-bg/background.png')}
        style={styles.container}>
        <ScrollView style={{flex: 1}}>
          <CustomHeader
            bgColor1={'#6B68C1'}
            bgColor2={'#9486E0'}
            username={user?.userDetail?.name}
            title={'الوان'}
            actions={{
              goBack: () => this.props.navigation.goBack(),
            }}
          />
          {/*<StoreBubble bgColor={'#6B68C1'} />*/}
          <View style={styles.listContainer}>
            <FlatList
              data={category.sub_categories}
              renderItem={this.renderItem}
              keyExtractor={({index}) => `item-${index}`}
              style={styles.container}
              contentContainerStyle={styles.listStyle}
              numColumns={3}
              columnWrapperStyle={styles.column}
              getItemLayout={this._getItemLayout}
            />
          </View>

          {/*<LoginModal*/}
          {/*  modalVisible={this.state.visible}*/}
          {/*  closeModal={this.closeModal}*/}
          {/*/>*/}
        </ScrollView>
      </ImageBackground>
    );
  }
  renderItem = ({item, index}) => {
    const uri = getIUri(item.image);
    return (
      <View>
        <SoundButton
          style={styles.primaryButton}
          onPress={() =>
            this.props.navigation.navigate('DrawSketchScreen', {uri})
          }>
          <View style={styles.iconStyle}>
            <CachedImage
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'contain',
              }}
              source={{
                uri,
              }}
            />
          </View>
          <Text style={[headers.primary, {color: colors.WHITE_COLOR}]}>
            {item.name}
          </Text>
        </SoundButton>
      </View>
    );
  };
  _getItemLayout = (data, index) => {
    const productHeight = 100 + 10;
    return {
      length: productHeight,
      offset: productHeight * index,
      index,
    };
  };
  closeModal = () => this.setState({visible: false});
  openModal = () => this.setState({visible: true});
}

export default DrawingArtScreen;
