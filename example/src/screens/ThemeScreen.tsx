import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  Button,
  ThemeProvider,
  colors,
  spacing,
  typography,
} from 'react-native-uaui';
import { Layout } from '../components/Layout';
import { Showcase, ExampleGrid, ExampleItem } from '../components/Showcase';

const customTheme = {
  components: {
    button: {
      variants: {
        primary: {
          backgroundColor: '#9C27B0',
          color: 'white',
        },
        secondary: {
          backgroundColor: '#FF5722',
          color: 'white',
        },
        outline: {
          backgroundColor: 'transparent',
          borderColor: '#9C27B0',
          borderWidth: 2,
          color: '#9C27B0',
        },
        ghost: {
          backgroundColor: 'transparent',
          color: '#FF5722',
        },
      },
    },
  },
};

export const ThemeScreen: React.FC = () => {
  return (
    <Layout
      title="Theme System"
      description="UAUI uses a comprehensive theme system with design tokens for colors, spacing, typography, and component styling."
    >
      <Showcase
        title="Default Theme"
        description="Components use the default theme when no custom theme is provided."
        code={`import { Button, ThemeProvider } from 'react-native-uaui';

<ThemeProvider>
  <Button variant="primary">Default Theme</Button>
</ThemeProvider>`}
      >
        <ThemeProvider>
          <ExampleGrid>
            <ExampleItem label="Primary">
              <Button variant="primary">Primary</Button>
            </ExampleItem>
            <ExampleItem label="Secondary">
              <Button variant="secondary">Secondary</Button>
            </ExampleItem>
            <ExampleItem label="Outline">
              <Button variant="outline">Outline</Button>
            </ExampleItem>
            <ExampleItem label="Ghost">
              <Button variant="ghost">Ghost</Button>
            </ExampleItem>
          </ExampleGrid>
        </ThemeProvider>
      </Showcase>

      <Showcase
        title="Custom Theme"
        description="Override default styling with custom theme colors and properties."
        code={`const customTheme = {
  components: {
    button: {
      variants: {
        primary: {
          backgroundColor: '#9C27B0',
          color: 'white',
        },
        outline: {
          borderColor: '#9C27B0',
          color: '#9C27B0',
        },
      },
    },
  },
};

<ThemeProvider customTheme={customTheme}>
  <Button variant="primary">Custom Theme</Button>
</ThemeProvider>`}
      >
        <ThemeProvider customTheme={customTheme}>
          <ExampleGrid>
            <ExampleItem label="Custom Primary">
              <Button variant="primary">Primary</Button>
            </ExampleItem>
            <ExampleItem label="Custom Secondary">
              <Button variant="secondary">Secondary</Button>
            </ExampleItem>
            <ExampleItem label="Custom Outline">
              <Button variant="outline">Outline</Button>
            </ExampleItem>
            <ExampleItem label="Custom Ghost">
              <Button variant="ghost">Ghost</Button>
            </ExampleItem>
          </ExampleGrid>
        </ThemeProvider>
      </Showcase>

      <Showcase
        title="Design Tokens"
        description="UAUI provides design tokens for consistent styling across your application."
        code={`import { colors, spacing, typography } from 'react-native-uaui';

// Use design tokens in your styles
const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    backgroundColor: colors.primary[50],
  },
  text: {
    fontSize: typography.fontSize.lg,
    color: colors.gray[800],
  },
});`}
      >
        <View style={styles.tokensContainer}>
          <View style={styles.tokenSection}>
            <Text style={styles.tokenSectionTitle}>Colors</Text>
            <View style={styles.colorGrid}>
              <View
                style={[
                  styles.colorSwatch,
                  { backgroundColor: colors.primary[500] },
                ]}
              >
                <Text style={styles.colorLabel}>Primary</Text>
              </View>
              <View
                style={[
                  styles.colorSwatch,
                  { backgroundColor: colors.secondary[500] },
                ]}
              >
                <Text style={styles.colorLabel}>Secondary</Text>
              </View>
              <View
                style={[
                  styles.colorSwatch,
                  { backgroundColor: colors.success },
                ]}
              >
                <Text style={styles.colorLabel}>Success</Text>
              </View>
              <View
                style={[
                  styles.colorSwatch,
                  { backgroundColor: colors.warning },
                ]}
              >
                <Text style={styles.colorLabel}>Warning</Text>
              </View>
              <View
                style={[styles.colorSwatch, { backgroundColor: colors.error }]}
              >
                <Text style={styles.colorLabel}>Error</Text>
              </View>
            </View>
          </View>

          <View style={styles.tokenSection}>
            <Text style={styles.tokenSectionTitle}>Spacing</Text>
            <View style={styles.spacingGrid}>
              {Object.entries(spacing).map(([key, value]) => (
                <View key={key} style={styles.spacingItem}>
                  <View
                    style={[
                      styles.spacingVisual,
                      { width: value, height: value },
                    ]}
                  />
                  <Text style={styles.spacingLabel}>
                    {key}: {value}px
                  </Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.tokenSection}>
            <Text style={styles.tokenSectionTitle}>Typography</Text>
            <View style={styles.typographyGrid}>
              {Object.entries(typography.fontSize).map(([key, value]) => (
                <View key={key} style={styles.typographyItem}>
                  <Text style={[styles.typographyText, { fontSize: value }]}>
                    {key} ({value}px)
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </Showcase>

      <Showcase
        title="Theme Comparison"
        description="Side by side comparison of default and custom themes."
      >
        <View style={styles.comparisonContainer}>
          <View style={styles.comparisonColumn}>
            <Text style={styles.comparisonTitle}>Default Theme</Text>
            <ThemeProvider>
              <View style={styles.comparisonButtons}>
                <Button variant="primary" size="sm">
                  Primary
                </Button>
                <Button variant="outline" size="sm">
                  Outline
                </Button>
              </View>
            </ThemeProvider>
          </View>

          <View style={styles.comparisonColumn}>
            <Text style={styles.comparisonTitle}>Custom Theme</Text>
            <ThemeProvider customTheme={customTheme}>
              <View style={styles.comparisonButtons}>
                <Button variant="primary" size="sm">
                  Primary
                </Button>
                <Button variant="outline" size="sm">
                  Outline
                </Button>
              </View>
            </ThemeProvider>
          </View>
        </View>
      </Showcase>
    </Layout>
  );
};

const styles = StyleSheet.create({
  tokensContainer: {
    gap: 24,
  },
  tokenSection: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 16,
  },
  tokenSectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212121',
    marginBottom: 12,
  },
  colorGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  colorSwatch: {
    width: 80,
    height: 60,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorLabel: {
    fontSize: 10,
    fontWeight: '600',
    color: 'white',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  spacingGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  spacingItem: {
    alignItems: 'center',
    gap: 4,
  },
  spacingVisual: {
    backgroundColor: '#2196F3',
    borderRadius: 2,
  },
  spacingLabel: {
    fontSize: 12,
    color: '#616161',
  },
  typographyGrid: {
    gap: 8,
  },
  typographyItem: {
    paddingVertical: 4,
  },
  typographyText: {
    color: '#212121',
  },
  comparisonContainer: {
    flexDirection: 'row',
    gap: 24,
  },
  comparisonColumn: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 16,
  },
  comparisonTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#212121',
    marginBottom: 12,
    textAlign: 'center',
  },
  comparisonButtons: {
    gap: 8,
    alignItems: 'center',
  },
});
