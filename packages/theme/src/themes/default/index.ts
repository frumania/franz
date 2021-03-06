import color from 'color';

import * as legacyStyles from '../legacy';

export interface IStyleTypes {
  [index: string]: {
    accent: string;
    contrast: string;
    border?: string;
  };
}

export const brandPrimary = '#3498db';
export const brandSuccess = '#5cb85c';
export const brandInfo = '#5bc0de';
export const brandWarning = '#FF9F00';
export const brandDanger = '#d9534f';

export const uiFontSize = 14;

export const borderRadius = legacyStyles.themeBorderRadius;
export const borderRadiusSmall = legacyStyles.themeBorderRadiusSmall;

export const colorBackground = legacyStyles.themeGrayLighter;
export const colorContentBackground = '#FFFFFF';
export const colorHeadline = legacyStyles.themeGrayDark;

export const colorText = legacyStyles.themeTextColor;

// Subscription Container Component
export const colorSubscriptionContainerBackground = 'none';
export const colorSubscriptionContainerBorder = `1px solid ${brandPrimary}`;
export const colorSubscriptionContainerTitle = brandPrimary;
export const colorSubscriptionContainerActionButtonBackground = brandPrimary;
export const colorSubscriptionContainerActionButtonColor = '#FFF';

// Loader
export const colorAppLoaderSpinner = '#FFF';
export const colorFullscreenLoaderSpinner = legacyStyles.themeGrayDark;
export const colorWebviewLoaderBackground = color(legacyStyles.themeGrayLighter).alpha(0.8).rgb().string();

// Input
export const labelColor = legacyStyles.themeGrayLight;
export const inputColor = legacyStyles.themeGray;
export const inputHeight = '35px';
export const inputBackground = legacyStyles.themeGrayLightest;
export const inputBorder = `1px solid ${legacyStyles.themeGrayLighter}`;
export const inputModifierColor = legacyStyles.themeGrayLight;
export const inputPlaceholderColor = color(legacyStyles.themeGrayLight).lighten(0.3).hex();
export const inputPrefixColor = legacyStyles.themeGrayLight;
export const inputPrefixBackground = legacyStyles.themeGrayLighter;
export const inputDisabledOpacity = 0.5;
export const inputScorePasswordBackground = legacyStyles.themeGrayLighter;

// Toggle
export const toggleBackground = legacyStyles.themeGrayLighter;
export const toggleButton = legacyStyles.themeGrayLight;
export const toggleButtonActive = brandPrimary;
export const toggleWidth = 40;
export const toggleHeight = 14;

// Style Types
export const styleTypes: IStyleTypes = {
  primary: {
    accent: brandPrimary,
    contrast: '#FFF',
  },
  secondary: {
    accent: legacyStyles.themeGrayLighter,
    contrast: legacyStyles.themeGray,
  },
  success: {
    accent: brandSuccess,
    contrast: '#FFF',
  },
  warning: {
    accent: brandWarning,
    contrast: '#FFF',
  },
  danger: {
    accent: brandDanger,
    contrast: '#FFF',
  },
  inverted: {
    accent: 'none',
    contrast: brandPrimary,
    border: `1px solid ${brandPrimary}`,
  },
};

// Button
export const buttonPrimaryBackground = brandPrimary;
export const buttonPrimaryTextColor = '#FFF';

export const buttonSecondaryBackground = legacyStyles.themeGrayLighter;
export const buttonSecondaryTextColor = legacyStyles.themeGray;

export const buttonSuccessBackground = brandSuccess;
export const buttonSuccessTextColor = '#FFF';

export const buttonDangerBackground = brandDanger;
export const buttonDangerTextColor = '#FFF';

export const buttonWarningBackground = brandWarning;
export const buttonWarningTextColor = '#FFF';

export const buttonInvertedBackground = 'none';
export const buttonInvertedTextColor = brandPrimary;
export const buttonInvertedBorder = `1px solid ${brandPrimary}`;

export const buttonLoaderColor = {
  primary: '#FFF',
  secondary: buttonSecondaryTextColor,
  success: '#FFF',
  warning: '#FFF',
  danger: '#FFF',
  inverted: brandPrimary,
};

// Select
export const selectBackground = inputBackground;
export const selectBorder = inputBorder;
export const selectHeight = inputHeight;
export const selectColor = inputColor;
export const selectToggleColor = inputPrefixColor;
export const selectPopupBackground = '#FFF';
export const selectOptionColor = inputColor;
export const selectOptionBorder = `1px solid ${legacyStyles.themeGrayLightest}`;
export const selectOptionItemHover = legacyStyles.themeGrayLighter;
export const selectOptionItemHoverColor = selectColor;
export const selectOptionItemActive = brandPrimary;
export const selectOptionItemActiveColor = '#FFF';
export const selectSearchBackground = legacyStyles.themeGrayLighter;
export const selectSearchColor = inputColor;
export const selectDisabledOpacity = inputDisabledOpacity;

// Badge
export const badgeFontSize = uiFontSize - 2;
export const badgeBorderRadius = 50;

// Modal
export const colorModalOverlayBackground = color('#000').alpha(0.5).rgb().string();
