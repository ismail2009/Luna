import React from 'react';
import {
  ImageBackground,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  Text,
} from 'react-native';
import styles from './styles';
// import LoginModal from '../../shared/components/Modals/LoginModal';
import CustomHeader from '../../shared/components/Header';

import StoreBubble from '../../shared/components/StoreBubble';
import {SoundButton} from '../../shared/components/Button';
import {headers} from '../../shared/styles';
import {colors} from '../../shared/styles/theme.style';
import getIUri from '../../shared/utils/getIUri';

class GamesScreen extends React.Component {
  state = {
    visible: false,
  };
  render() {
    const {
      state: {visible},
      props: {
        route: {
          params: {category, user},
        },
      },
    } = this;
    console.log(category, 'category');
    return (
      <ImageBackground
        resizeMode={'cover'}
        source={{uri: getIUri(category.bg_image)}}
        style={styles.container}>
        <ScrollView style={{flex: 1}}>
          <CustomHeader
            bgColor1={category.title_color}
            bgColor2={category.bg_color}
            username={user?.userDetail?.name}
            title={'العاب'}
            actions={{
              goBack: () => this.props.navigation.goBack(),
            }}
          />
          {/*<StoreBubble bgColor={'#A80E54'} />*/}

          <View style={styles.listStyle}>
            <FlatList
              data={category.sub_categories}
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
        </ScrollView>
      </ImageBackground>
    );
  }
  renderItem = ({item, index}) => {
    const uri = getIUri(item.image);
    console.log(uri, 'uri');
    return (
      <SoundButton
        onPress={() =>
          this.props.navigation.navigate('ContentScreen', {
            subCategory: item,
            isLink: true,
          })
        }
        style={[styles.primaryButton, {marginHorizontal: '1.5%'}]}>
        <View style={[styles.iconStyle]}>
          <Image
            style={styles.imageStyle}
            source={{
              uri,
            }}
          />
        </View>
        <Text style={[headers.primary, {color: colors.WHITE_COLOR}]}>
          {item.name}
        </Text>
      </SoundButton>
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

export default GamesScreen;
