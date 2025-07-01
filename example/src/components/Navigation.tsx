import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  TouchableOpacity,
} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const isWeb = Platform.OS === 'web';
const isDesktop = isWeb && screenWidth > 768;

interface NavigationProps {
  activeRoute: string;
  onNavigate: (route: string) => void;
}

const routes = [
  { key: 'home', title: 'Overview' },
  { key: 'button', title: 'Button' },
  { key: 'theme', title: 'Theme' },
];

export const Navigation: React.FC<NavigationProps> = ({
  activeRoute,
  onNavigate,
}) => {
  if (isDesktop) {
    return (
      <View style={styles.desktopNavContainer}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>UAUI</Text>
          <Text style={styles.logoSubtext}>Documentation</Text>
        </View>
        <View style={styles.navList}>
          {routes.map((route) => (
            <TouchableOpacity
              key={route.key}
              style={[
                styles.navItem,
                activeRoute === route.key && styles.navItemActive,
              ]}
              onPress={() => onNavigate(route.key)}
            >
              <Text
                style={[
                  styles.navItemText,
                  activeRoute === route.key && styles.navItemTextActive,
                ]}
              >
                {route.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }

  return (
    <View style={styles.mobileNavContainer}>
      <Text style={styles.mobileTitle}>UAUI Docs</Text>
      <View style={styles.mobileNavList}>
        {routes.map((route) => (
          <TouchableOpacity
            key={route.key}
            style={[
              styles.mobileNavItem,
              activeRoute === route.key && styles.mobileNavItemActive,
            ]}
            onPress={() => onNavigate(route.key)}
          >
            <Text
              style={[
                styles.mobileNavItemText,
                activeRoute === route.key && styles.mobileNavItemTextActive,
              ]}
            >
              {route.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Desktop Navigation
  desktopNavContainer: {
    width: 280,
    backgroundColor: '#f8f9fa',
    borderRightWidth: 1,
    borderRightColor: '#e0e0e0',
    padding: 24,
  },
  logo: {
    marginBottom: 32,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingBottom: 16,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  logoSubtext: {
    fontSize: 14,
    color: '#616161',
    marginTop: 4,
  },
  navList: {
    flex: 1,
  },
  navItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 4,
  },
  navItemActive: {
    backgroundColor: '#2196F3',
  },
  navItemText: {
    fontSize: 16,
    color: '#424242',
    fontWeight: '500',
  },
  navItemTextActive: {
    color: '#ffffff',
  },

  // Mobile Navigation
  mobileNavContainer: {
    backgroundColor: '#2196F3',
    paddingTop: Platform.OS === 'ios' ? 44 : 24,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  mobileTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 16,
  },
  mobileNavList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  mobileNavItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  mobileNavItemActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  mobileNavItemText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '500',
  },
  mobileNavItemTextActive: {
    color: '#ffffff',
  },
});
