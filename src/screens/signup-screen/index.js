import React from 'react';
import {Text, View, StyleSheet, Platform, ScrollView} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-datepicker';
import {AccessToken, LoginManager} from 'react-native-fbsdk';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import moment from 'moment';
import styles from './styles';
import {
  BasicButton,
  RoundedButton,
  SoundButton,
} from '../../shared/components/Button';
import FacebookSvg from '../../assets/images/SVG/facebook.svg';
import GoogleSvg from '../../assets/images/SVG/google.svg';
import RoundedInput from '../../shared/components/Input/RoundedInput';
import {headers} from '../../shared/styles';
import {colors, fonts, sizes} from '../../shared/styles/theme.style';
import Row from '../../shared/components/Row';
import CustomHeader from '../../shared/components/Header';
import {setting} from '../../shared/Api/Api';
import countries from '../../shared/constants/countries.json';
// 271251844630-fgfoscd4hmtnq762ib39e7qhflmeeir1.apps.googleusercontent.com
const items = [
  {label: 'ذكر', value: 'male'},
  {label: 'أٌنثى', value: 'female'},
];
class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      gender: '',
      country: '',
      dob: '',
      emailError: '',
      usernameError: '',
      passwordError: '',
      confirmPasswordError: '',
    };
    this.pickerRef = null;
    this.pickerRef2 = null;
  }

  async componentDidMount() {
    await GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: setting.WEB_CLIENT_ID, // client ID of type WEB for your server(needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    });
  }
  render() {
    const {
      props: {user},
      state: {
        password,
        confirmPassword,
        gender,
        emailError,
        usernameError,
        passwordError,
        confirmPasswordError,
      },
    } = this;
    console.log(user, 'user');
    return (
      <View style={{backgroundColor: colors.WHITE_COLOR, flex: 1}}>
        <ScrollView>
          <CustomHeader
            bgColor1={'#FFFFFF'}
            bgColor2={'#FFFFFF'}
            actions={{
              goBack: () => this.props.navigation.goBack(),
            }}
            isGoBack
          />
          <View style={styles.content}>
            <Text style={[headers.primary, styles.header]}>
              إنشاء حساب جديد
            </Text>
            <Row style={styles.row}>
              <View style={{width: '45%'}}>
                <RoundedInput
                  placeholder={'البريد الالكتروني '}
                  placeholderTextColor="#FFF"
                  onChangeText={text => this.setValue('email', text)}
                  onBlur={() => this.emailValidator()}
                />
                {emailError != '' && (
                  <Text
                    style={{
                      color: colors.ERROR,
                      alignSelf: 'flex-end',
                      marginVertical: 2,
                    }}>
                    {emailError}
                  </Text>
                )}
              </View>
              <View style={{width: '45%'}}>
                <RoundedInput
                  placeholder={'اسم المستخدم'}
                  placeholderTextColor="#FFF"
                  onChangeText={text => this.setValue('username', text)}
                  onBlur={() => this.usernameValidator()}
                />
                {usernameError != '' && (
                  <Text
                    style={{
                      color: colors.ERROR,
                      alignSelf: 'flex-end',
                      marginVertical: 2,
                    }}>
                    {usernameError}
                  </Text>
                )}
              </View>
            </Row>
            <Row style={styles.row}>
              <View style={{width: '45%'}}>
                <RoundedInput
                  placeholder={'تأكيد كلمة المرور'}
                  placeholderTextColor="#FFF"
                  secureTextEntry={true}
                  onChangeText={text => this.setValue('confirmPassword', text)}
                  onBlur={() => this.confirmPasswordValidator()}
                />
                {confirmPasswordError != '' && (
                  <Text
                    style={{
                      color: colors.ERROR,
                      alignSelf: 'flex-end',
                    }}>
                    {confirmPasswordError}
                  </Text>
                )}
              </View>
              <View style={{width: '45%'}}>
                <RoundedInput
                  // width={'45%'}
                  placeholder={'كلمة المرور'}
                  placeholderTextColor="#FFF"
                  onChangeText={text => this.setValue('password', text)}
                  secureTextEntry={true}
                  onBlur={() => this.passwordValidator()}
                />
                {passwordError != '' && (
                  <Text
                    style={{
                      color: colors.ERROR,
                      alignSelf: 'flex-end',
                      marginVertical: 2,
                    }}>
                    {passwordError}
                  </Text>
                )}
              </View>
            </Row>
            <Row reverse style={styles.row}>
              <View
                style={{
                  width: '45%',
                }}>
                <RNPickerSelect
                  onValueChange={(valueText, index) => {
                    this.setValue('gender', valueText);
                  }}
                  items={items}
                  placeholder={{label: 'الجنس', value: null}}
                  style={{
                    ...pickerSelectStyles,
                    iconContainer: {
                      top: 20,
                      right: 10,
                    },
                    placeholder: {
                      color: '#FFF',
                      fontSize: 16,
                      fontWeight: 'bold',
                    },
                  }}
                  value={gender}
                  pickerRef={e => (this.pickerRef = e)}
                  useNativeAndroidPickerStyle={false}
                />
              </View>

              <DatePicker
                style={{width: '45%'}}
                date={this.state.dob}
                mode="date"
                placeholder="تاريخ الميلاد"
                format="YYYY-MM-DD"
                maxDate={moment().format()}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                showIcon={false}
                customStyles={{
                  dateText: {
                    fontSize: sizes.FONT_SIZE_LARGE,
                    color: colors.WHITE_COLOR,
                    fontFamily: fonts.FONT_WEIGHT_REGULAR,
                    alignSelf: 'flex-end',
                  },
                  placeholderText: {
                    fontSize: sizes.FONT_SIZE_LARGE,
                    color: colors.WHITE_COLOR,
                    fontFamily: fonts.FONT_WEIGHT_REGULAR,
                    textAlign: 'right',
                    alignSelf: 'flex-end',
                  },
                  dateInput: {
                    width: '100%',
                    borderWidth: 0,
                    backgroundColor: '#CCCCCC',
                    borderRadius: 15,
                    height: 45,
                    paddingRight: 10,
                  },
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={dob => {
                  this.setState({dob});
                }}
              />
            </Row>
            <Row reverse style={styles.row}>
              <View
                style={{
                  width: '100%',
                }}>
                <RNPickerSelect
                  onValueChange={(valueText, index) => {
                    console.log(valueText, 'valueText');
                    this.setValue('country', valueText);
                  }}
                  items={countries}
                  placeholder={{label: 'الدولة', value: null}}
                  style={{
                    ...pickerSelectStyles,
                    iconContainer: {
                      top: 20,
                      right: 10,
                    },
                    placeholder: {
                      color: '#FFF',
                      fontSize: 16,
                      fontWeight: 'bold',
                    },
                  }}
                  value={this.state.country}
                  pickerRef={e => (this.pickerRef2 = e)}
                  useNativeAndroidPickerStyle={false}
                />
              </View>
            </Row>
            <Row
              reverse
              style={{width: '100%', justifyContent: 'space-between'}}>
              <RoundedButton
                isActivity={user.loading}
                onPress={() => this.onSubmit()}
                classes={{
                  button: {width: '45%', alignSelf: 'flex-end'},
                }}>
                التسجيل
              </RoundedButton>
              <Row
                reverse
                style={{
                  alignItems: 'center',
                }}>
                <BasicButton classes={{buttonTextStyle: {color: '#9B9B9B'}}}>
                  إنشاء حساب من خلال
                </BasicButton>
                <SoundButton
                  onPress={this.signInGoogle}
                  style={[
                    {
                      marginRight: 10,
                      backgroundColor: '#DDDDDD',
                    },
                    styles.socialIcons,
                  ]}>
                  <GoogleSvg />
                </SoundButton>
                <SoundButton
                  onPress={this.fbSignIn}
                  style={[
                    {
                      backgroundColor: '#3B5998',
                      marginRight: 10,
                    },
                    styles.socialIcons,
                  ]}>
                  <FacebookSvg />
                </SoundButton>
              </Row>
            </Row>
          </View>
        </ScrollView>
      </View>
    );
  }
  setValue(key, value) {
    this.setState({[key]: value});
  }
  /**
   * validate username input
   */
  usernameValidator = () => {
    if (this.state.username == '') {
      this.setState({usernameError: 'هذا الحقل مطلوب'});
    } else {
      this.setState({usernameError: ''});
    }
  };
  /**
   * validate email input
   */
  emailValidator = () => {
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(reg.test(this.state.email), 'test');
    if (!reg.test(this.state.email)) {
      this.setState({emailError: 'هذا الحقل مطلوب'});
    } else {
      this.setState({emailError: ''});
    }
  };
  /**
   * validate password input
   */
  passwordValidator = () => {
    console.log(this.state.password, 'this.state.password ');
    if (this.state.password == '') {
      this.setState({passwordError: 'هذا الحقل مطلوب'});
    } else {
      this.setState({passwordError: ''});
    }
  };
  /**
   * validate confirm password input
   */
  confirmPasswordValidator = () => {
    const {password, confirmPassword} = this.state;

    console.log(password !== confirmPassword, 'password !== confirmPassword');
    console.log(confirmPassword, 'confirmPassword');
    if (confirmPassword != '' && password !== confirmPassword) {
      this.setState({
        confirmPasswordError: 'كلمة السر و تأكيد كلمة السر غير متطابقتين',
      });
    } else {
      this.setState({confirmPasswordError: ''});
    }
  };
  /**
   * check user data and
   * submit
   */
  onSubmit = () => {
    const {
      props,
      state: {
        username,
        password,
        email,
        confirmPassword,
        country,
        dob,
        gender,
        emailError,
      },
    } = this;
    if (
      username != '' &&
      password != '' &&
      email != '' &&
      emailError == '' &&
      confirmPassword != '' &&
      password === confirmPassword
    ) {
      props.register({
        email,
        name: username,
        password,
        password_confirmation: confirmPassword,
        country,
        dob,
        gender,
      });
      this.setState({
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: '',
        country: '',
        dob: '',
        emailError: '',
        usernameError: '',
        passwordError: '',
        confirmPasswordError: '',
      });
      this.props.clearAuthStore();
      this.props.navigation.navigate('Home');
    }
  };
  /**
   *  Google sign in function
   * @returns {Promise<void>}
   */
  signInGoogle = async () => {
    console.log('start singin');
    try {
      await GoogleSignin.hasPlayServices();
      const info = await GoogleSignin.signIn();
      alert(info);
      console.log(info, 'info');
      // setUserInfo(info);
    } catch (error) {
      alert(error.code);

      console.log(error, 'error');
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  /**
   *  Facebook sign in function
   * @returns {Promise<void>}
   */
  fbSignIn = () => {
    LoginManager.logInWithPermissions(['public_profile']).then(
      result => {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          console.log(result, 'result');
          console.log(
            'Login success with permissions: ' +
              result.grantedPermissions.toString(),
          );
          AccessToken.getCurrentAccessToken()
            .then(data => {
              console.log(data, 'facebook');
              this.props.loginSocial({
                grant_type: setting.GRANT_TYPE,
                client_id: 3,
                client_secret: setting.CLIENT_SECRET,
                provider: setting.FACEBOOK,
                access_token: data.accessToken,
              });
              return data;
            })
            .then(data => {
              this.initFacebookUser(data.accessToken).then(user => {
                console.log(user, 'neew facbook');
                this.props.navigation.navigate('Home', {
                  isFacebook: true,
                  user,
                });
              });
            });
        }
      },
      function(error) {
        console.log('Login fail with error: ' + error);
      },
    );
  };
  initFacebookUser = async token => {
    return await fetch(
      'https://graph.facebook.com/v8.0/me?fields=email,name&access_token=' +
        token,
    )
      .then(response => response.json())
      .then(json => {
        const user = {};
        // Some user object has been set up somewhere, build that user here
        user.name = json.name;
        user.email = json.email;
        return user;
      })
      .catch(() => {
        console.log('ERROR GETTING DATA FROM FACEBOOK');
      });
  };
}
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: '100%',
    borderRadius: 15,
    fontFamily: fonts.FONT_WEIGHT_REGULAR,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: '#FFF',
    paddingRight: 30, // to ensure the text is never behind the icon
    backgroundColor: '#CCCCCC',
    justifyContent: 'flex-start',
  },
  inputAndroid: {
    width: '100%',
    height: 45,
    borderRadius: 15,
    backgroundColor: '#CCCCCC',
    fontFamily: fonts.FONT_WEIGHT_REGULAR,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: '#FFF',
    paddingRight: 10, // to ensure the text is never behind the icon
    justifyContent: 'flex-start',
  },
});

export default SignUpScreen;
