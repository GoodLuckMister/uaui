import type { Theme } from '../theme/type';

export const deepMerge = (
  target: Theme,
  source: Record<string, unknown>
): Theme => {
  const result = { ...target } as any;

  for (const key in source) {
    if (
      source[key] &&
      typeof source[key] === 'object' &&
      !Array.isArray(source[key])
    ) {
      result[key] = deepMerge(result[key], source[key] as any);
    } else if (source[key] !== undefined) {
      result[key] = source[key] as any;
    }
  }

  return result;
};
