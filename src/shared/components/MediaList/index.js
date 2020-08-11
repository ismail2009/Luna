import React, {Component} from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import getIUri from '../../utils/getIUri';

class MediaList extends Component {
  componentDidMount() {
    const {itemId} = this.props;
    console.log('stattsdjsadjskdnk');
    try {
      this.props.getCategoryContent(itemId);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const {navigation, route, itemId, categoryContent} = this.props;
    console.log(itemId, 'itemId');
    console.log(this.props, 'media list');
    return (
      <View
        style={{
          width: wp(100),
          alignSelf: 'center',
          alignItems: 'center',
          // backgroundColor: 'red',
          marginTop: 50,
        }}>
        <FlatList
          data={categoryContent}
          renderItem={({item, index}) => (
            <MediaItem item={item} index={index} navigation={navigation} />
          )}
          keyExtractor={({index}) => `item-${index}`}
          horizontal={false}
          numColumns={3}
          getItemLayout={getItemLayout}
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
          columnWrapperStyle={{
            alignSelf: 'center',
          }}
          ItemSeparatorComponent={() => <View style={{paddingVertical: 10}} />}
        />
      </View>
    );
  }
}
const MediaItem = ({item, index, navigation}) => {
  const uri = getIUri(item.image);
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('FullScreenVideo', {uri: item.video_file})
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
    </TouchableOpacity>
  );
};
const getItemLayout = (data, index) => {
  const productHeight = 110;
  return {
    length: productHeight,
    offset: productHeight * index,
    index,
  };
};
export default MediaList;
