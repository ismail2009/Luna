import React from 'react';
import {
  ImageBackground,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Image,
} from 'react-native';
import styles from './styles';
import LoginModal from '../../shared/components/Modals/LoginModal';
import CustomHeader from '../../shared/components/Header';
import {headers} from '../../shared/styles';
import {colors} from '../../shared/styles/theme.style';
import StoreBubble from '../../shared/components/StoreBubble';
import AuthModal from '../../shared/components/Modals/AuthModal';
import SettingModal from '../../shared/components/Modals/SettingModal';
import AboutLunaModal from '../../shared/components/Modals/AboutLunaModal';
import getIUri from '../../shared/utils/getIUri';
import LoadModal from '../../shared/components/Modals/LoadModal';
import {SoundButton} from '../../shared/components/Button';
import storage from '../../shared/utils/storage';

class HomeScreen extends React.Component {
  state = {
    visible: false,
    loginVisible: false,
    settingsVisible: false,
    aboutLunaVisible: false,
    name: '',
    password: '',
    nameError: '',
    passwordError: '',
  };
  componentDidMount() {
    this.init();
    setTimeout(async () => {
      const token = await storage.getItem('@user/token');

      if (!token) {
        this.props.clearAuthStore();
        this.openModal();
      }
    }, 3000);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.user.user.token) {
      this.init();
      this.props.clearAuthStore();
    }
  }
  init = () => {
    this.props.getCategories();
    this.props.getUserDetail();
  };
  render() {
    const {
      props: {
        route: {params},
        categories,
        loading,
        user,
        isAuth,
      },
    } = this;
    console.log(this.props.route.params, 'user params');
    return (
      <ImageBackground
        resizeMode={'cover'}
        source={require('../../assets/images/bg-home/home-bg.png')}
        style={[styles.container]}>
        <ScrollView style={{flex: 1}}>
          <CustomHeader
            bgColor1={'#32ABBF'}
            bgColor2={'#57D3DD'}
            username={user?.userDetail?.name || params?.user?.name}
            actions={{
              openSetting: () => this.openSettingsModal(),
            }}
            isSetting
          />
          {/*<StoreBubble bgColor={'#32ABBF'} />*/}

          {categories.length !== 0 && (
            <View style={[styles.content]}>
              <SoundButton
                style={[
                  styles.primaryButton,
                  {
                    width: '20%',
                  },
                ]}
                // onPress={this.openModal}>
                onPress={() =>
                  this.props.navigation.navigate('NumbersAndChars', {
                    category: categories[3],
                    user,
                  })
                }>
                <View style={styles.imageWrapper}>
                  <Image
                    style={styles.image}
                    source={{
                      uri: getIUri(categories[3]?.image),
                    }}
                  />
                </View>
                <Text
                  style={[
                    headers.primary,
                    {
                      color: colors.PRIMARY_COLOR,
                      textAlign: 'center',
                      alignSelf: 'center',
                    },
                  ]}>
                  {categories[3]?.name}
                </Text>
              </SoundButton>

              <SoundButton
                style={[styles.primaryButton, {width: '20%'}]}
                onPress={() =>
                  this.props.navigation.navigate('DrawingArtScreen', {
                    category: categories[2],
                    user,
                  })
                }>
                <View style={styles.imageWrapper}>
                  <Image
                    style={styles.image}
                    source={{
                      uri: getIUri(categories[2]?.image),
                    }}
                  />
                </View>
                <Text
                  style={[
                    headers.primary,
                    {color: colors.PRIMARY_COLOR, alignSelf: 'center'},
                  ]}>
                  {categories[2]?.name}
                </Text>
              </SoundButton>

              <SoundButton
                style={[
                  styles.primaryButton,
                  {
                    width: '25%',
                  },
                ]}
                onPress={() =>
                  this.props.navigation.navigate('GamesScreen', {
                    category: categories[0],
                    user,
                  })
                }>
                <View style={styles.imageWrapper}>
                  <Image
                    style={styles.image}
                    source={{
                      uri: getIUri(categories[0]?.image),
                    }}
                  />
                </View>
                <View
                  style={[
                    styles.roundedButton,
                    {alignSelf: 'center', marginTop: 10},
                  ]}>
                  <Text style={[headers.primary, {color: colors.WHITE_COLOR}]}>
                    {categories[0]?.name}
                  </Text>
                </View>
              </SoundButton>

              <SoundButton
                style={[styles.primaryButton, {width: '20%'}]}
                onPress={() =>
                  this.props.navigation.navigate('SongsScreen', {
                    category: categories[1],
                    user,
                  })
                }>
                <View style={styles.imageWrapper}>
                  <Image
                    style={styles.image}
                    source={{
                      uri: getIUri(categories[1]?.image),
                    }}
                  />
                </View>
                <Text
                  style={[
                    headers.primary,
                    {color: colors.PRIMARY_COLOR, alignSelf: 'center'},
                  ]}>
                  {categories[1]?.name}
                </Text>
              </SoundButton>
            </View>
          )}
          <AuthModal
            modalVisible={this.state.visible}
            closeModal={this.closeModal}
            actions={{
              onPressLogin: () => {
                this.openLoginModal();
                this.closeModal();
              },
              onPressSignUp: () => {
                this.props.navigation.navigate('SignUp');
                this.closeModal();
              },
            }}
          />
          <LoginModal
            modalVisible={this.state.loginVisible}
            closeModal={this.closeLoginModal}
            onChange={this.onChange}
            user={this.props.user}
            state={this.state}
            nameValidator={this.nameValidator}
            passwordValidator={this.passwordValidator}
            actions={{
              onPressOptPassword: () => {
                this.props.navigation.navigate('OptPassword'),
                  this.closeLoginModal();
              },
              onPressSignup: () => {
                this.props.navigation.navigate('SignUp');
                this.closeLoginModal();
              },
              onPressLogin: () => {
                this.onSubmit();
              },
            }}
          />
          <SettingModal
            modalVisible={this.state.settingsVisible}
            closeModal={this.closeSettingsModal}
            actions={{
              onPressAboutLuna: () => this.openAboutLunaVisibleModal(),
              onPressLogout: () => {
                this.props.logout();
                this.props.clearCategoryStore();
                this.closeSettingsModal();
                this.openModal();
              },
            }}
          />
          <AboutLunaModal
            modalVisible={this.state.aboutLunaVisible}
            closeModal={this.closeAboutLunaVisibleModal}
          />
          <LoadModal modalVisible={loading} />
        </ScrollView>
      </ImageBackground>
    );
  }
  closeModal = () => this.setState({visible: false});
  openModal = () => this.setState({visible: true});
  closeLoginModal = () => {
    const {
      props: {categories, loading, user, isAuth},
    } = this;
    this.setState({
      loginVisible: false,
      name: '',
      password: '',
      nameError: '',
      passwordError: '',
    });
    this.closeModal();
  };
  openLoginModal = () => this.setState({loginVisible: true});
  closeSettingsModal = () => this.setState({settingsVisible: false});
  openSettingsModal = () => this.setState({settingsVisible: true});
  closeAboutLunaVisibleModal = () => this.setState({aboutLunaVisible: false});
  openAboutLunaVisibleModal = () => this.setState({aboutLunaVisible: true});
  onChange = (key, value) => this.setState({[key]: value});
  nameValidator = () => {
    if (this.state.name == '') {
      this.setState({nameError: 'الرجاء ادحل اسم المستخدم'});
    } else {
      this.setState({nameError: ''});
    }
  };
  passwordValidator = () => {
    if (this.state.password == '') {
      this.setState({passwordError: 'الرجاء ادخال الباسوورد'});
    } else {
      this.setState({passwordError: ''});
    }
  };
  onSubmit = () => {
    const {
      props,
      state: {name, password},
    } = this;
    // this.props.navigation.navigate('NumbersAndChars');
    if (name != '' && password != '') {
      props.login({name, password});
      this.props.navigation.navigate('Home');
      this.closeLoginModal();
    }
  };
}

export default HomeScreen;
