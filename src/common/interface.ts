export interface IDeviceTypes {
    isMobile: boolean;
    isDesktop: boolean;
    isTablet: boolean;
}

export interface IToggleCustomThemeProps {
    showCustomTheme: boolean;
    toggleCustomTheme: () => void;
}
