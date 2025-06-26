import { colors, spacing, typography, borders } from './tokens';

export const theme = {
  colors,
  spacing,
  typography,
  borders,
  // Component-specific tokens
  components: {
    button: {
      variants: {
        primary: {
          backgroundColor: colors.primary[500],
          color: colors.white,
        },
        secondary: {
          backgroundColor: colors.gray[200],
          color: colors.gray[800],
        },
        outline: {
          backgroundColor: 'transparent',
          borderColor: colors.primary[500],
          borderWidth: borders.width.thin,
          color: colors.primary[500],
        },
        ghost: {
          backgroundColor: 'transparent',
          color: colors.primary[500],
        },
      },
      sizes: {
        sm: {
          paddingVertical: spacing.xs,
          paddingHorizontal: spacing.sm,
          fontSize: typography.fontSize.sm,
          borderRadius: borders.radius.sm,
        },
        md: {
          paddingVertical: spacing.sm,
          paddingHorizontal: spacing.md,
          fontSize: typography.fontSize.md,
          borderRadius: borders.radius.md,
        },
        lg: {
          paddingVertical: spacing.md,
          paddingHorizontal: spacing.lg,
          fontSize: typography.fontSize.lg,
          borderRadius: borders.radius.lg,
        },
      },
    },
  },
};
