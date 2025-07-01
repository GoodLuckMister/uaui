import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Platform,
} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const isWeb = Platform.OS === 'web';
const isDesktop = isWeb && screenWidth > 768;

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  description,
}) => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {description && <Text style={styles.description}>{description}</Text>}
      </View>
      <View style={styles.body}>{children}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    padding: isDesktop ? 32 : 16,
    maxWidth: isDesktop ? 1200 : '100%',
    alignSelf: 'center',
    width: '100%',
  },
  header: {
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingBottom: 16,
  },
  title: {
    fontSize: isDesktop ? 32 : 24,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#616161',
    lineHeight: 24,
  },
  body: {
    flex: 1,
  },
});
