import { useState } from 'react';
import { View, StyleSheet, Dimensions, Platform } from 'react-native';
import { Navigation } from './components/Navigation';
import { HomeScreen } from './screens/HomeScreen';
import { ButtonScreen } from './screens/ButtonScreen';
import { ThemeScreen } from './screens/ThemeScreen';

const { width: screenWidth } = Dimensions.get('window');
const isWeb = Platform.OS === 'web';
const isDesktop = isWeb && screenWidth > 768;

export default function App() {
  const [activeRoute, setActiveRoute] = useState('home');

  const renderScreen = () => {
    switch (activeRoute) {
      case 'home':
        return <HomeScreen />;
      case 'button':
        return <ButtonScreen />;
      case 'theme':
        return <ThemeScreen />;
      default:
        return <HomeScreen />;
    }
  };

  if (isDesktop) {
    return (
      <View style={styles.desktopContainer}>
        <Navigation activeRoute={activeRoute} onNavigate={setActiveRoute} />
        <View style={styles.desktopContent}>{renderScreen()}</View>
      </View>
    );
  }

  return (
    <View style={styles.mobileContainer}>
      <Navigation activeRoute={activeRoute} onNavigate={setActiveRoute} />
      <View style={styles.mobileContent}>{renderScreen()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  desktopContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  desktopContent: {
    flex: 1,
    overflow: 'hidden',
  },
  mobileContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  mobileContent: {
    flex: 1,
  },
});
