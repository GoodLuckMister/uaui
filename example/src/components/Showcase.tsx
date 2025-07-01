import React from 'react';
import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const isWeb = Platform.OS === 'web';
const isDesktop = isWeb && screenWidth > 768;

interface ShowcaseProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  code?: string;
}

export const Showcase: React.FC<ShowcaseProps> = ({
  title,
  description,
  children,
  code,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {description && <Text style={styles.description}>{description}</Text>}
      </View>

      <View style={styles.preview}>
        <Text style={styles.previewLabel}>Preview</Text>
        <View style={styles.previewContent}>{children}</View>
      </View>

      {code && (
        <View style={styles.codeBlock}>
          <Text style={styles.codeLabel}>Code</Text>
          <View style={styles.codeContent}>
            <Text style={styles.codeText}>{code}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

interface ExampleGridProps {
  children: React.ReactNode;
}

export const ExampleGrid: React.FC<ExampleGridProps> = ({ children }) => {
  return <View style={styles.grid}>{children}</View>;
};

interface ExampleItemProps {
  label: string;
  children: React.ReactNode;
}

export const ExampleItem: React.FC<ExampleItemProps> = ({
  label,
  children,
}) => {
  return (
    <View style={styles.gridItem}>
      <Text style={styles.gridItemLabel}>{label}</Text>
      <View style={styles.gridItemContent}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    overflow: 'hidden',
  },
  header: {
    padding: 16,
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#212121',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#616161',
    lineHeight: 20,
  },
  preview: {
    padding: 16,
  },
  previewLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#757575',
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  previewContent: {
    alignItems: 'flex-start',
    gap: 12,
  },
  codeBlock: {
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    backgroundColor: '#f5f5f5',
  },
  codeLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#757575',
    padding: 16,
    paddingBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  codeContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  codeText: {
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    fontSize: 12,
    color: '#424242',
    lineHeight: 18,
  },
  grid: {
    flexDirection: isDesktop ? 'row' : 'column',
    flexWrap: 'wrap',
    gap: 16,
  },
  gridItem: {
    flex: isDesktop ? 1 : undefined,
    minWidth: isDesktop ? 200 : '100%',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  gridItemLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#424242',
    marginBottom: 12,
  },
  gridItemContent: {
    alignItems: 'flex-start',
  },
});
