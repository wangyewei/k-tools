export const underLine2Camel = (str: string): string => str.replace(/([^_])(?:_+([^_]))/g, (_, prefix, suffix) => prefix + suffix.toUpperCase())