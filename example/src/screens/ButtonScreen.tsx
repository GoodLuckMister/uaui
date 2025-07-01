import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, ThemeProvider } from 'react-native-uaui';
import { Layout } from '../components/Layout';
import { Showcase, ExampleGrid, ExampleItem } from '../components/Showcase';

export const ButtonScreen: React.FC = () => {
  return (
    <Layout
      title="Button Component"
      description="A versatile button component with multiple variants, sizes, and states. Supports icons, loading states, and full customization."
    >
      <ThemeProvider>
        <Showcase
          title="Basic Usage"
          description="The default button with primary variant and medium size."
          code={`<Button>Primary Button</Button>`}
        >
          <Button>Primary Button</Button>
        </Showcase>

        <Showcase
          title="Variants"
          description="Four different button variants for different use cases."
          code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>`}
        >
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
        </Showcase>

        <Showcase
          title="Sizes"
          description="Three different sizes: small, medium (default), and large."
          code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}
        >
          <ExampleGrid>
            <ExampleItem label="Small">
              <Button size="sm">Small Button</Button>
            </ExampleItem>
            <ExampleItem label="Medium">
              <Button size="md">Medium Button</Button>
            </ExampleItem>
            <ExampleItem label="Large">
              <Button size="lg">Large Button</Button>
            </ExampleItem>
          </ExampleGrid>
        </Showcase>

        <Showcase
          title="States"
          description="Different button states including disabled and loading."
          code={`<Button disabled>Disabled</Button>
<Button loading>Loading</Button>`}
        >
          <ExampleGrid>
            <ExampleItem label="Normal">
              <Button>Normal Button</Button>
            </ExampleItem>
            <ExampleItem label="Disabled">
              <Button disabled>Disabled Button</Button>
            </ExampleItem>
            <ExampleItem label="Loading">
              <Button loading>Loading Button</Button>
            </ExampleItem>
          </ExampleGrid>
        </Showcase>

        <Showcase
          title="Full Width"
          description="Buttons can span the full width of their container."
          code={`<Button fullWidth>Full Width Button</Button>`}
        >
          <Button fullWidth>Full Width Button</Button>
        </Showcase>

        <Showcase
          title="Custom Styling"
          description="Buttons can be customized with custom styles and text styles."
          code={`<Button 
  style={{ backgroundColor: '#9C27B0' }}
  textStyle={{ fontWeight: 'bold' }}
>
  Custom Styled
</Button>`}
        >
          <Button
            style={{ backgroundColor: '#9C27B0' }}
            textStyle={{ fontWeight: 'bold' }}
          >
            Custom Styled
          </Button>
        </Showcase>

        <Showcase
          title="Variant Combinations"
          description="Examples of different variant and size combinations."
        >
          <View style={styles.combinationGrid}>
            <Button variant="primary" size="sm">
              Primary Small
            </Button>
            <Button variant="secondary" size="md">
              Secondary Medium
            </Button>
            <Button variant="outline" size="lg">
              Outline Large
            </Button>
            <Button variant="ghost" size="sm">
              Ghost Small
            </Button>
            <Button variant="primary" size="lg">
              Primary Large
            </Button>
            <Button variant="outline" size="sm">
              Outline Small
            </Button>
          </View>
        </Showcase>

        <Showcase
          title="Interactive Example"
          description="Try interacting with these buttons to see the press states."
        >
          <ExampleGrid>
            <ExampleItem label="Press Me">
              <Button onPress={() => console.log('Button pressed!')}>
                Press Me
              </Button>
            </ExampleItem>
            <ExampleItem label="Outline Action">
              <Button
                variant="outline"
                onPress={() => console.log('Outline pressed!')}
              >
                Outline Action
              </Button>
            </ExampleItem>
          </ExampleGrid>
        </Showcase>
      </ThemeProvider>
    </Layout>
  );
};

const styles = StyleSheet.create({
  combinationGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    alignItems: 'center',
  },
});
