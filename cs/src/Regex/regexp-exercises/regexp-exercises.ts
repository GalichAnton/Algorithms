export const isAlphanumericAndDollar = (string: string): boolean => /^[\w$]+$/g.test(string);

export const splitBy = (string: string): string[] => string.split(/[.,;]| +/g);

export const format = <T extends Record<string, unknown>>(template: string, data: T): string =>
  template.replace(/\$\{(\w+)}/g, (match: string, group: string) =>
    data[group] != null ? String(data[group]) : match,
  );

export const cleanupRepeatingGroups = (string: string): string => string.replace(/(\w{1,3}?)\1+/g, '$1');
