import React, {Component} from 'react';
import {StyleSheet, View, Text, Alert, TouchableOpacity} from 'react-native';
const {ImageCacheManager} = require('react-native-cached-images');
import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';
import {SketchCanvas} from '@terrylinla/react-native-sketch-canvas';
import {SoundButton} from '../../shared/components/Button';
import SettingSvg from '../../assets/images/SVG/setting.svg';
import ArrowSvg from '../../assets/images/SVG/arrow-back.svg';
const defaultImageCacheManager = ImageCacheManager();

export default class example extends Component {
  state = {
    image: '',
  };
  componentWillMount() {
    const {
      props: {
        route: {
          params: {uri},
        },
      },
    } = this;
    this.getCacheInfo();
  }
  getCacheInfo() {
    const {
      props: {
        route: {
          params: {uri},
        },
      },
    } = this;
    // defaultImageCacheManager.getCacheInfo().then(({size, files}) => {
    //   console.log(size, files);
    //   const dir = files[1].path.replace(files[1].filename, '');
    //   // console.log(dir, 'dir');
    //   this.setState({image: {filename: files[1].filename, dir}});
    //   // alert('Cache Info', `files: ${files.length}\nsize:`);
    // });
    defaultImageCacheManager.seedAndCacheUrl(uri).then(path => {
      console.log(path, 'path');
      this.setState({image: path});
    });
  }
  render() {
    const {
      props: {
        route: {
          params: {uri},
        },
      },
    } = this;
    console.log(
      '=======================================================================================================',
    );
    console.log(uri, 'uri');
    console.log(this.state, 'state');
    // 11 let dirs = Platform.OS === 'ios' ? RNFS.LibraryDirectoryPath : RNFS.ExternalDirectoryPath; //External file, absolute path to the shared directory (android only)

    return (
      <View style={styles.container}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <RNSketchCanvas
            ref={ref => (this.canvas = ref)}
            containerStyle={{backgroundColor: 'transparent', flex: 1}}
            canvasStyle={{backgroundColor: 'transparent', flex: 1}}
            defaultStrokeIndex={0}
            defaultStrokeWidth={5}
            closeComponent={
              <View
                style={[styles.functionButton, {backgroundColor: '#FFFFFF'}]}>
                <SoundButton
                  onPress={() => this.props.navigation.goBack()}
                  style={{
                    width: 30,
                    alignSelf: 'flex-end',
                  }}>
                  {<ArrowSvg />}
                </SoundButton>
              </View>
            }
            undoComponent={
              <View
                style={[styles.functionButton, {backgroundColor: '#C1306B'}]}>
                <Text style={{color: 'white'}}>تراجع</Text>
              </View>
            }
            clearComponent={
              <View
                style={[styles.functionButton, {backgroundColor: '#C1306B'}]}>
                <Text style={{color: 'white'}}>مسح الكل</Text>
              </View>
            }
            eraseComponent={
              <View
                style={[styles.functionButton, {backgroundColor: '#C1306B'}]}>
                <Text style={{color: 'white'}}>ممحاة</Text>
              </View>
            }
            strokeComponent={color => (
              <View
                style={[{backgroundColor: color}, styles.strokeColorButton]}
              />
            )}
            user={'user1'}
            strokeSelectedComponent={(color, index, changed) => {
              return (
                <View
                  style={[
                    {backgroundColor: color, borderWidth: 2},
                    styles.strokeColorButton,
                  ]}
                />
              );
            }}
            strokeWidthComponent={w => {
              return (
                <View style={styles.strokeWidthButton}>
                  <View
                    style={{
                      backgroundColor: 'white',
                      marginHorizontal: 2.5,
                      width: Math.sqrt(w / 3) * 10,
                      height: Math.sqrt(w / 3) * 10,
                      borderRadius: (Math.sqrt(w / 3) * 10) / 2,
                    }}
                  />
                </View>
              );
            }}
            localSourceImage={{
              filename: this.state.image,
              // directory: this.state.image.dir,
              mode: 'AspectFit',
            }}
            saveComponent={
              <View
                style={[styles.functionButton, {backgroundColor: '#C1306B'}]}>
                <Text style={{color: 'white'}}>حفظ</Text>
              </View>
            }
            savePreference={() => {
              return {
                folder: 'Luna',
                filename: String(Math.ceil(Math.random() * 100000000)),
                transparent: false,
                imageType: 'png',
              };
            }}
            onSketchSaved={(success, path) => {
              Alert.alert(success ? 'تم حفظ الصورة!' : 'فشل حفظ الصورة!', path);
            }}
            onStrokeEnd={path => {
              this.canvas.addPath(path);
            }}
            onPathsChange={pathsCount => {
              console.log('pathsCount(user1)', pathsCount);
            }}
            permissionDialogTitle={'حفظ صورة'}
            permissionDialogMessage={'هل تسمح بالوصول الي الذاكرة الداخلية ؟؟'}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  strokeColorButton: {
    marginHorizontal: 2.5,
    marginVertical: 8,
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  strokeWidthButton: {
    marginHorizontal: 2.5,
    marginVertical: 8,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#39579A',
  },
  functionButton: {
    marginHorizontal: 2.5,
    marginVertical: 8,
    height: 30,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
});
