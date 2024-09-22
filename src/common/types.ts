export type TDeviceType = '000_DESKTOP' | '100_MOBILE' | '200_TABLET';
export type TLocale = 'en' | 'ko';

export type TDevice = 'mobile' | 'desktop' | 'tablet';

export type TSize = 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';

export type TIconSize = 'small' | 'medium' | 'large';

export type THeading =
    | 'Heading_1'
    | 'Heading_2'
    | 'Heading_3'
    | 'Heading_4'
    | 'Heading_1_bold'
    | 'Heading_2_bold'
    | 'Heading_3_bold'
    | 'Heading_4_bold';

export type TFontWeight = 'regular' | 'medium' | 'bold' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export interface IOptions {
    value: string | number;
    label: string;
}

export interface IThrowError {
    message?: string;
    statusCode?: number;
    name?: string;
}
