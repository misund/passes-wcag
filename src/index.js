import getContrastRatio from 'get-contrast-ratio';

const passes = (color1, color2, threshold) => getContrastRatio(color1, color2) >= threshold;
export const passesWcagAaLargeText = (color1, color2) => passes(color1, color2, 3);
export const passesWcagAa = (color1, color2) => passes(color1, color2, 4.5);
export const passesWcagAaa = (color1, color2) => passes(color1, color2, 7);
