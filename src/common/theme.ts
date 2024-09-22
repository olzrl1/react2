import { type TFontWeight, type TIconSize, type TSize } from './types';

class Grey {
    static readonly 100 = '#F6F7FA';
    static readonly 150 = '#EEF1F5';
    static readonly 200 = '#E1E4E9';
    static readonly 300 = '#D1D6DC';
    static readonly 400 = '#B1B6BE';
    static readonly 450 = '#A1A6AD';
    static readonly 500 = '#91979E';
    static readonly 550 = '#71777F';
    static readonly 600 = '#61666E';
    static readonly 650 = '#51555C';
    static readonly 700 = '#41444A';
    static readonly 800 = '#313337';
    static readonly 850 = '#25272B';
    static readonly 900 = '#111112';
}
class Red {
    static readonly 100 = '#';
    static readonly 200 = '#FFB4B4';
    static readonly 300 = '#FF8282';
    static readonly 400 = '#FFB4B4';
    static readonly 450 = '#FF8282';
    static readonly 500 = '#FF4949';
    static readonly 600 = '#';
    static readonly 700 = '#';
}
class Blue {
    static readonly 100 = '#D3E5FF';
    static readonly 200 = '#8FBEFF';
    static readonly 300 = '#63A5FF';
    static readonly 400 = '#2682FF';
    static readonly 500 = '#0062D4';
    static readonly 600 = '#0058D1';
    static readonly 700 = '#004098';
}
class Green {
    static readonly 100 = '#';
    static readonly 200 = '#BDFBC4';
    static readonly 300 = '#95F6A0';
    static readonly 400 = '#86F202';
    static readonly 450 = '#46E258';
    static readonly 500 = '#00D656';
}

class AlertColors {
    static readonly success = '#006BE9';
    static readonly info = '#03C75A';
    static readonly warning = '#FEE502';
    static readonly error = '#FF4949';
}

export class Colors {
    // static readonly PRIMARY = '#3C5BA8';
    static readonly PRIMARY = Blue[500];
    static readonly SECONDARY = Grey[200];

    static readonly BACKGROUND = '#F6F7FA';
    static readonly TEXT_COLOR = '#25272B';

    static readonly WHITE = '#FFFFFF';
    static readonly BLACK = '#000000';
    static readonly KAKAO_BUTTON = '#FEE502';
    static readonly NAVER_BUTTON = '#03C75A';
    // -----------------------------------------------
    static readonly GREY = Grey;
    static readonly RED = Red;
    static readonly BLUE = Blue;
    static readonly GREEN = Green;
    static readonly ALERT_COLOR = AlertColors;

    // ------------------------------------
    static readonly YELLOW = '#FDE614';

    // -----------------------------------
}

export class ThemeDefinitions {
    static readonly SPACING = 2;
    static readonly BORDER_RADIUS = 8;
    static readonly BORDER_SIZE = 3;
    static readonly DEFAULT_SIZE = 32;
}

export const getFontWeight = (variant: TFontWeight) => {
    return variant;
};

export const pathd = ({ s, m, l, size }: { s: string; m: string; l: string; size?: TIconSize }) => {
    let d, sz;
    switch (size) {
        case 'small': {
            d = s;
            sz = 12;
            break;
        }
        case 'medium': {
            d = m;
            sz = 16;
            break;
        }
        case 'large': {
            d = l;
            sz = 24;
            break;
        }
        default: {
            d = m;
            sz = 16;
            break;
        }
    }
    return { d, sz };
};

export const getIconSize = (size?: TIconSize) => {
    let numSize;
    switch (size) {
        case 'small': {
            numSize = 12;
            break;
        }
        case 'medium': {
            numSize = 16;
            break;
        }
        case 'large': {
            numSize = 24;
            break;
        }
        default: {
            numSize = 16;
            break;
        }
    }
    return numSize;
};

export const getTextSize = (variant: TSize) => {
    let size;
    switch (variant) {
        case 'xxxs': {
            size = 8;
            break;
        }
        case 'xxs': {
            size = 10;
            break;
        }
        case 'xs': {
            size = 12;
            break;
        }
        case 's': {
            size = 14;
            break;
        }
        case 'm': {
            size = 16;
            break;
        }
        case 'l': {
            size = 20;
            break;
        }
        case 'xl': {
            size = 26;
            break;
        }
        case 'xxl': {
            size = 30;
            break;
        }
        case 'xxxl': {
            size = 32;
            break;
        }
        default: {
            size = 12;
            break;
        }
    }
    return size;
};

export const getSpacing = (variant: TSize | number) => {
    let numSpacing;
    switch (variant) {
        // case 'xxxs': {
        //   numSpacing;
        //   break;
        // }
        case 'xxs': {
            numSpacing = 4;
            break;
        }
        case 'xs': {
            numSpacing = 8;
            break;
        }
        case 's': {
            numSpacing = 12;
            break;
        }
        case 'm': {
            numSpacing = 16;
            break;
        }
        case 'l': {
            numSpacing = 20;
            break;
        }
        case 'xl': {
            numSpacing = 24;
            break;
        }
        case 'xxl': {
            numSpacing = 32;
            break;
        }
        case 'xxxl': {
            numSpacing = 40;
            break;
        }
        default: {
            numSpacing = 8;
            break;
        }
    }
    return numSpacing;
};

export const getBorderSize = (variant: number) => {
    return variant * ThemeDefinitions.BORDER_SIZE;
};
