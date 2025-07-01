import React from 'react';
import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';
import { Button, ThemeProvider } from 'react-native-uaui';
import { Layout } from '../components/Layout';
import { Showcase } from '../components/Showcase';

const { width: screenWidth } = Dimensions.get('window');
const isWeb = Platform.OS === 'web';
const isDesktop = isWeb && screenWidth > 768;

export const HomeScreen: React.FC = () => {
  return (
    <Layout
      title="UAUI Component Library"
      description="A comprehensive React Native UI component library designed for modern mobile and web applications."
    >
      <View style={styles.container}>
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>Welcome to UAUI</Text>
          <Text style={styles.heroSubtitle}>
            Build beautiful, responsive applications with our carefully crafted
            components. Designed for React Native with full web support.
          </Text>

          <ThemeProvider>
            <View style={styles.heroButtons}>
              <Button variant="primary" size="lg">
                Get Started
              </Button>
              <Button
                variant="outline"
                size="lg"
                style={styles.heroButtonSecondary}
              >
                View Components
              </Button>
            </View>
          </ThemeProvider>
        </View>

        <View style={styles.features}>
          <View style={styles.feature}>
            <Text style={styles.featureTitle}>🎨 Themeable</Text>
            <Text style={styles.featureDescription}>
              Fully customizable theme system with design tokens for consistent
              styling across your app.
            </Text>
          </View>

          <View style={styles.feature}>
            <Text style={styles.featureTitle}>📱 Responsive</Text>
            <Text style={styles.featureDescription}>
              Components automatically adapt to different screen sizes and
              platforms (iOS, Android, Web).
            </Text>
          </View>

          <View style={styles.feature}>
            <Text style={styles.featureTitle}>♿ Accessible</Text>
            <Text style={styles.featureDescription}>
              Built with accessibility in mind, supporting screen readers and
              keyboard navigation.
            </Text>
          </View>

          <View style={styles.feature}>
            <Text style={styles.featureTitle}>⚡ Performance</Text>
            <Text style={styles.featureDescription}>
              Optimized for performance with minimal bundle size and efficient
              rendering.
            </Text>
          </View>
        </View>

        <Showcase
          title="Quick Example"
          description="Here's how easy it is to use UAUI components in your app:"
          code={`import { Button, ThemeProvider } from 'react-native-uaui';

function App() {
  return (
    <ThemeProvider>
      <Button variant="primary">
        Hello UAUI!
      </Button>
    </ThemeProvider>
  );
}`}
        >
          <ThemeProvider>
            <Button variant="primary">Hello UAUI!</Button>
          </ThemeProvider>
        </Showcase>

        <View style={styles.getStarted}>
          <Text style={styles.getStartedTitle}>Getting Started</Text>
          <Text style={styles.getStartedText}>
            Install UAUI in your React Native project:
          </Text>
          <View style={styles.codeBlock}>
            <Text style={styles.codeText}>npm install react-native-uaui</Text>
          </View>
          <Text style={styles.getStartedText}>
            Then import and use components in your app. Navigate through the
            documentation to explore all available components and their
            customization options.
          </Text>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hero: {
    alignItems: 'center',
    paddingVertical: 48,
    marginBottom: 48,
  },
  heroTitle: {
    fontSize: isDesktop ? 48 : 32,
    fontWeight: 'bold',
    color: '#212121',
    textAlign: 'center',
    marginBottom: 16,
  },
  heroSubtitle: {
    fontSize: isDesktop ? 20 : 16,
    color: '#616161',
    textAlign: 'center',
    lineHeight: isDesktop ? 30 : 24,
    maxWidth: 600,
    marginBottom: 32,
  },
  heroButtons: {
    flexDirection: isDesktop ? 'row' : 'column',
    gap: 16,
    alignItems: 'center',
  },
  heroButtonSecondary: {
    marginTop: isDesktop ? 0 : 0,
  },
  features: {
    flexDirection: isDesktop ? 'row' : 'column',
    flexWrap: 'wrap',
    gap: 24,
    marginBottom: 48,
  },
  feature: {
    flex: isDesktop ? 1 : undefined,
    minWidth: isDesktop ? 200 : '100%',
    padding: 24,
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#212121',
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 14,
    color: '#616161',
    lineHeight: 20,
  },
  getStarted: {
    marginTop: 32,
    padding: 24,
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  getStartedTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 16,
  },
  getStartedText: {
    fontSize: 16,
    color: '#424242',
    lineHeight: 24,
    marginBottom: 16,
  },
  codeBlock: {
    backgroundColor: '#2d3748',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  codeText: {
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    fontSize: 14,
    color: '#a0aec0',
  },
});
