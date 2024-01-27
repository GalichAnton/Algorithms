export type RangeType = 'string' | 'number';

export type StrOrNum<T> = T extends number ? number : string;
