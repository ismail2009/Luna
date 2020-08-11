import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Animated, Easing, View, I18nManager} from 'react-native';
import AnimatedGradient from './gradient-helper';
import LinearGradient from 'react-native-linear-gradient';

/**
 * Constant Variables
 */
const INDETERMINATE_WIDTH_FACTOR = 0.3;
const BAR_WIDTH_ZERO_POSITION =
  INDETERMINATE_WIDTH_FACTOR / (1 + INDETERMINATE_WIDTH_FACTOR);
/**
 * Create animated Component
 * @type {*|AnimatedComponentType<any, any>}
 */
const AnimatedGradientHelper = Animated.createAnimatedComponent(
  AnimatedGradient,
);

/**
 * @desc Animated Progress Bar used in splash screen
 */
export default class ProgressBar extends Component {
  static propTypes = {
    animated: PropTypes.bool,
    borderColor: PropTypes.string,
    borderRadius: PropTypes.number,
    borderWidth: PropTypes.number,
    children: PropTypes.node,
    color: PropTypes.string,
    height: PropTypes.number,
    indeterminate: PropTypes.bool,
    indeterminateAnimationDuration: PropTypes.number,
    onLayout: PropTypes.func,
    progress: PropTypes.number,
    style: PropTypes.any,
    unfilledColor: PropTypes.string,
    width: PropTypes.number,
    useNativeDriver: PropTypes.bool,
    animationConfig: PropTypes.object,
    animationType: PropTypes.oneOf(['decay', 'timing', 'spring']),
  };
  /**
   * desc default props for ProgressBar component
   * @type {{animationConfig: {bounciness: number}, borderRadius: number, color: string, borderWidth: number, indeterminate: boolean, indeterminateAnimationDuration: number, width: number, animated: boolean, progress: number, useNativeDriver: boolean, height: number, animationType: string}}
   */
  static defaultProps = {
    animated: true,
    borderRadius: 4,
    borderWidth: 1,
    color: 'rgba(0, 122, 255, 1)',
    height: 6,
    indeterminate: false,
    indeterminateAnimationDuration: 1000,
    progress: 0,
    width: 150,
    useNativeDriver: false,
    animationConfig: {bounciness: 0},
    animationType: 'spring',
  };

  constructor(props) {
    super(props);
    const progress = Math.min(Math.max(props.progress, 0), 1);
    this.state = {
      width: 0,
      progress: new Animated.Value(
        props.indeterminate ? INDETERMINATE_WIDTH_FACTOR : progress,
      ),
      animationValue: new Animated.Value(BAR_WIDTH_ZERO_POSITION),
    };
  }

  componentDidMount() {
    if (this.props.indeterminate) {
      this.animate();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.indeterminate !== this.props.indeterminate) {
      if (this.props.indeterminate) {
        this.animate();
      } else {
        Animated.spring(this.state.animationValue, {
          toValue: BAR_WIDTH_ZERO_POSITION,
          useNativeDriver: this.props.useNativeDriver,
        }).start();
      }
    }
    if (
      prevProps.indeterminate !== this.props.indeterminate ||
      prevProps.progress !== this.props.progress
    ) {
      const progress = this.props.indeterminate
        ? INDETERMINATE_WIDTH_FACTOR
        : Math.min(Math.max(this.props.progress, 0), 1);

      if (this.props.animated) {
        const {animationType, animationConfig} = this.props;
        Animated[animationType](this.state.progress, {
          ...animationConfig,
          toValue: progress,
          useNativeDriver: this.props.useNativeDriver,
        }).start();
      } else {
        this.state.progress.setValue(progress);
      }
    }
  }

  /**
   * Handle Layout change to be responsive bar
   * @param event
   */
  handleLayout = event => {
    if (!this.props.width) {
      this.setState({width: event.nativeEvent.layout.width});
    }
    if (this.props.onLayout) {
      this.props.onLayout(event);
    }
  };

  /**
   * Initialize animation Function
   */
  animate() {
    this.state.animationValue.setValue(0);
    Animated.timing(this.state.animationValue, {
      toValue: 1,
      duration: this.props.indeterminateAnimationDuration,
      easing: Easing.linear,
      isInteraction: false,
      useNativeDriver: this.props.useNativeDriver,
    }).start(endState => {
      if (endState.finished) {
        this.animate();
      }
    });
  }

  render() {
    const {
      borderColor,
      borderRadius,
      borderWidth,
      children,
      color,
      height,
      style,
      unfilledColor,
      width,
      ...restProps
    } = this.props;

    const innerWidth = Math.max(0, width || this.state.width) - borderWidth * 2;
    const containerStyle = {
      width,
      borderWidth,
      borderColor: borderColor || color,
      borderRadius,
      overflow: 'hidden',
      backgroundColor: unfilledColor,
    };
    const progressStyle = {
      backgroundColor: color,
      height,
      transform: [
        {
          translateX: this.state.animationValue.interpolate({
            inputRange: [0, 1],
            outputRange: [innerWidth * -INDETERMINATE_WIDTH_FACTOR, innerWidth],
          }),
        },
        {
          translateX: this.state.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [innerWidth / (I18nManager.isRTL ? -2 : 2), 0],
          }),
        },
        {
          // Interpolation a temp workaround for https://github.com/facebook/react-native/issues/6278
          scaleX: this.state.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0.0001, 1],
          }),
        },
      ],
    };

    return (
      <LinearGradient
        colors={[
          '#CCCCCC',
          '#CCCCCC',
          '#FFFFFF',
          '#F9F9F9',
          '#E8E8E8',
          '#CECECE',
          '#A8A8A8',
          '#999999',
        ]}
        start={{x: 0.499, y: -0.6}}
        end={{x: 0.502, y: 3.331}}
        style={[containerStyle, style]}
        onLayout={this.handleLayout}
        {...restProps}>
        <AnimatedGradientHelper
          color1={'#C1306B'}
          color2={'#ED1E79'}
          style={progressStyle}
        />
        {children}
      </LinearGradient>
    );
  }
}
