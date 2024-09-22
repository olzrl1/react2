'use client';

import { Colors, ThemeDefinitions } from '@/common';
// import { Colors, ThemeDefinitions } from 'src/common';
import { type Components, type PaletteMode, type PaletteOptions, type Theme, createTheme } from '@mui/material';
import type {} from '@mui/x-data-grid/themeAugmentation';
import type {} from '@mui/lab/themeAugmentation';
import localFont from 'next/font/local';

const myFont = localFont({
    src: [
        { path: '../public/fonts/SUIT-Thin.ttf', weight: '100' },
        { path: '../public/fonts/SUIT-ExtraLight.ttf', weight: '200' },
        { path: '../public/fonts/SUIT-Light.ttf', weight: '300' },
        { path: '../public/fonts/SUIT-Regular.ttf', weight: '400' },
        { path: '../public/fonts/SUIT-Medium.ttf', weight: '500' },
        { path: '../public/fonts/SUIT-SemiBold.ttf', weight: '600' },
        { path: '../public/fonts/SUIT-Bold.ttf', weight: '700' },
        { path: '../public/fonts/SUIT-ExtraBold.ttf', weight: '800' },
        { path: '../public/fonts/SUIT-Heavy.ttf', weight: '900' },
    ],
});
declare module '@mui/material/styles' {
    // allow configuration using `createTheme`
    // eslint-disable-next-line
    interface TypographyVariantsOptions {
        h1_bold?: React.CSSProperties;
        h2_bold?: React.CSSProperties;
        h3_bold?: React.CSSProperties;
        h4_bold?: React.CSSProperties;
        body1_bold?: React.CSSProperties;
        body2_bold?: React.CSSProperties;
        body3?: React.CSSProperties;
        body3_bold?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    // eslint-disable-next-line
    interface TypographyPropsVariantOverrides {
        h1_bold: true;
        h2_bold: true;
        h3_bold: true;
        h4_bold: true;
        body1_bold: true;
        body2_bold: true;
        body3: true;
        body3_bold: true;
    }
}

const getPalette = (opts: { mode: PaletteMode }): PaletteOptions => {
    const { mode } = opts;
    return {
        mode,
        primary: {
            main: Colors.PRIMARY,
        },
        secondary: {
            main: Colors.SECONDARY,
        },
        background: {
            paper: Colors.WHITE,
            default: Colors.WHITE,
        },
        divider: Colors.PRIMARY,
    };
};

const getComponents = (): Components<Omit<Theme, 'components'>> => {
    return {
        MuiRadio: {
            styleOverrides: {
                root: {
                    padding: '8px',
                    '& .MuiSvgIcon-root': {
                        height: 24,
                        width: 24,
                    },
                },
            },
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    '& .MuiSvgIcon-root': {
                        height: 24,
                        width: 24,
                    },
                },
            },
        },
        MuiDataGrid: {
            defaultProps: {
                autosizeOptions: {
                    includeHeaders: true,
                    includeOutliers: true,
                },
                disableDensitySelector: true,
                autosizeOnMount: true,
                disableColumnFilter: true,
                disableVirtualization: true,
                disableColumnMenu: true,
                disableColumnSorting: true,
                disableColumnResize: true,
                disableRowSelectionOnClick: true,
                hideFooterPagination: true,
                hideFooter: true,
                autoHeight: true,
                getRowHeight: () => 'auto',
            },
            styleOverrides: {
                root: {
                    fontSize: 16,
                    border: 0,
                    borderRadius: 0,
                    '--DataGrid-overlayHeight': '300px',
                    '.MuiDataGrid-container--top [role=row]': {
                        background: 'transparent',
                    },
                    '.MuiDataGrid-cell': {
                        padding: '22px 10px',
                        display: 'flex',
                        alignItems: 'center',
                        height: 'auto',
                    },
                },
                virtualScroller: {
                    borderRadius: '0 !important',
                },
                columnHeaders: {
                    background: 'transparent',
                    borderRadius: 'none',
                },
                columnHeader: {
                    borderRadius: 0,
                    background: 'transparent',
                },
                row: {
                    background: Colors.WHITE,
                    ':last-child': {
                        '.MuiDataGrid-cell': {
                            borderBottom: '1px solid var(--rowBorderColor)',
                        },
                    },
                },
                main: {
                    background: 'transparent',
                },
            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    textDecoration: 'none',
                    '&:hover': {
                        textDecoration: 'underline',
                    },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    border: 'none',
                    borderBottom: `1px solid ${Colors.GREY[300]}`,
                    background: Colors.WHITE,
                },
            },
        },
        MuiDialogContent: {
            styleOverrides: {
                root: {
                    padding: 0,
                },
            },
        },
        MuiDialogActions: {
            styleOverrides: {
                root: {
                    padding: 0,
                },
            },
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '100px',
                    borderColor: Colors.GREY[200],
                    color: Colors.BLUE[400],
                    fontSize: 14,
                    textTransform: 'inherit',
                },
                outlined: {
                    ':hover': {
                        backgroundColor: Colors.BLUE[100],
                        borderColor: Colors.BLUE[200],
                    },
                    ':focus': {
                        borderColor: Colors.BLUE[400],
                    },
                },
                outlinedSecondary: {
                    color: Colors.GREY[900],
                    ':hover': {
                        backgroundColor: Colors.GREY[100],
                        borderColor: Colors.GREY[200],
                    },
                    ':focus': {
                        borderColor: Colors.BLUE[400],
                    },
                },
            },
        },
        MuiChip: {
            defaultProps: {
                variant: 'outlined',
            },
            styleOverrides: {
                outlined: {
                    '&.MuiChip-clickable:hover': {
                        backgroundColor: Colors.GREY[150],
                        borderColor: Colors.GREY[450],
                    },
                    '&.MuiChip-clickable:active': {
                        borderColor: Colors.GREY[650],
                        boxShadow: 'none',
                    },
                },
                root: {
                    borderRadius: ThemeDefinitions.BORDER_RADIUS,
                    color: Colors.GREY[650],
                    borderColor: Colors.GREY[450],
                    '&.avatar': {
                        borderRadius: 30,
                    },
                    '&:hover': {
                        cursor: 'pointer',
                    },
                },
                iconMedium: {
                    height: 18,
                    width: 18,
                },
                deleteIconMedium: {
                    height: 18,
                    width: 18,
                },
            },
        },
        MuiAutocomplete: {
            styleOverrides: {
                inputRoot: {
                    margin: 0,
                    paddingBottom: 0,
                },
            },
        },
        // MuiButtonGroup: {
        //   defaultProps: {
        //     variant: 'contained',
        //     color: 'inherit',
        //     size: 'small',
        //     disableElevation: true,
        //   },
        //   styleOverrides: {
        //     root: { minWidth: 16 },
        //     grouped: { minWidth: 16 },
        //   },
        // },
        // MuiFormControl: {
        //   defaultProps: { margin: 'dense', size: 'small' },
        // },
        // MuiFormHelperText: {
        //   defaultProps: { margin: 'dense' },
        //   styleOverrides: {
        //     root: {
        //       padding: '0px 16px 0px 4px',
        //     },
        //   },
        // },
        // MuiIconButton: {
        //   defaultProps: { size: 'small' },
        // },
        // MuiInputBase: {
        //   defaultProps: { margin: 'dense' },
        //   styleOverrides: {
        //     root: {
        //       padding: '0px 8px',
        //       marginTop: '20px',
        //       'label+&': {
        //         marginTop: '20px !important',
        //       },
        //     },
        //     input: {
        //       padding: '2px 0px 8px 0px',
        //     },
        //   },
        // },
        // MuiInputLabel: {
        //   defaultProps: { margin: 'dense' },
        //   styleOverrides: {
        //     root: {
        //       padding: '10px 10px 4px 10px',
        //     },
        //   },
        // },
        MuiList: {
            styleOverrides: {
                root: {
                    '& > a': {
                        color: 'inherit',
                        textDecoration: 'unset',

                        ':hover, :active, .active': {
                            color: Colors.PRIMARY,
                        },
                    },
                },
            },
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    padding: '16px 8px',
                    marginBottom: '8px',
                    ':hover': {
                        background: Colors.GREY[100],
                        color: Colors.PRIMARY,
                    },
                    ':active': {
                        background: Colors.GREY[150],
                        color: Colors.PRIMARY,
                    },
                    ':focus, &.active': {
                        background: 'rgba(211, 229, 255, 0.20)',
                        color: Colors.PRIMARY,
                    },
                    '.MuiTouchRipple-child': {
                        backgroundColor: Colors.GREY[400],
                    },
                },
            },
        },
        MuiListItemText: {
            styleOverrides: {
                root: {
                    margin: 0,
                },
            },
        },
        MuiListItem: {
            defaultProps: { dense: true },
        },
        MuiFab: {
            defaultProps: { size: 'small' },
        },
        // MuiTable: {
        //   defaultProps: { size: 'small' },
        // },
        // MuiTableCell: {
        //   defaultProps: { size: 'small' },
        //   styleOverrides: {
        //     root: { padding: 2 },
        //     head: { padding: 2 },
        //   },
        // },
        MuiTextField: {
            defaultProps: { variant: 'outlined', fullWidth: true, size: 'small' },
            styleOverrides: {
                root: {
                    '.MuiFormControl-root': {
                        backgroundColor: 'red',
                    },
                    '.MuiInput-root, .MuiInput-root.Mui-focused': {
                        height: '56px',
                    },
                    '.MuiFormLabel-root.MuiInputLabel-root': {
                        color: Colors.GREY[800],
                        // position: 'absolute',
                        // top: '10px',
                    },
                    '& .MuiInput-underline:before': { borderBottomColor: Colors.GREY[800] },
                    '& .MuiInput-underline:after': { borderBottomColor: Colors.GREY[800] },
                },
            },
        },
        MuiFormControl: {
            styleOverrides: {
                // root: {
                // },
            },
        },
        MuiToolbar: {
            defaultProps: { variant: 'dense' },
        },
        // MuiGrid: {
        //   defaultProps: {
        //     spacing: 1, // Use application default spacing ThemeDefinitions.SPACING
        //   },
        // },
        MuiPaper: {
            defaultProps: {
                variant: 'outlined',
            },
            styleOverrides: {
                root: {
                    borderRadius: 0,
                    // borderWidth: getBorderSize(1),
                },
            },
        },
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    // Map the new variant to render a <h1> by default
                    h1_bold: 'h1',
                    h2_bold: 'h2',
                    h3_bold: 'h3',
                    h4_bold: 'h4',
                    body1: 'span',
                    body2: 'span',
                    body1_bold: 'p',
                    body2_bold: 'p',
                    body3: 'p',
                    body3_bold: 'p',
                },
            },
        },
        MuiDivider: {
            defaultProps: {},
            styleOverrides: {
                root: {
                    // borderWidth: getBorderSize(0.1),
                },
            },
        },
        MuiSnackbar: {
            defaultProps: {},
            styleOverrides: {
                root: {
                    paddingBottom: '48px',
                    '& .MuiSnackbarContent-root': {
                        display: 'flex',
                        alignItems: 'center',
                        width: '344px',
                        minHeight: '20px',
                        height: 'auto',
                        padding: '14px 16px',
                        gap: '4px',
                        flexShrink: 0,
                        borderRadius: '4px',
                        boxShadow: '0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px 0px rgba(0, 0, 0, 0.30)',
                        '&:has(> div.MuiSnackbarContent-action)': {
                            paddingLeft: '16px',
                        },
                        '& .MuiSnackbarContent-action': {
                            display: 'flex',
                            alignItems: 'center',
                            '.MuiTypography-root': {
                                textAlign: 'center',
                                fontSize: '14px',
                                fontWeight: 700,
                                lineHeight: '20px',
                                letterSpacing: '-0.56px',
                            },
                        },
                        '& .MuiButtonBase-root': {
                            '&:hover': {
                                backgroundColor: 'none',
                                // border: `1px solid ${Colors.WHITE}`
                                // backgroundColor: Colors.BLUE[500],
                            },
                        },
                        '& .MuiSnackbarContent-message': {
                            flex: '1 0 0',
                            fontSize: '14px',
                            fontWeight: 400,
                            lineHeight: '20px',
                            letterSpacing: '-0.56px',
                        },
                    },
                },
            },
        },
    };
};

export const createApplicationTheme = (opts: { mode: PaletteMode; spacing?: number }) => {
    const { mode, spacing = 1 } = opts;

    return {
        spacing,
        palette: getPalette({ mode }),
        shape: {
            borderRadius: ThemeDefinitions.BORDER_RADIUS,
        },
        typography: {
            fontFamily: myFont.style.fontFamily,
            fontStyle: 'normal',
            fontSize: 16,
            h1: {
                fontSize: 32,
                fontWeight: '500',
                lineHeight: 'normal',
                letterSpacing: '-4%',
            },
            h2: {
                fontSize: 30,
                fontWeight: '400',
                letterSpacing: '-4%',
            },
            h3: {
                fontSize: 26,
                fontWeight: '400',
                letterSpacing: '-4%',
            },
            h4: {
                fontSize: 20,
                fontWeight: '400',
                letterSpacing: '-4%',
            },
            h1_bold: {
                fontSize: 32,
                fontWeight: '700',
                letterSpacing: '-4%',
            },
            h2_bold: {
                fontSize: 30,
                fontWeight: '700',
                letterSpacing: '-4%',
            },
            h3_bold: {
                fontSize: 26,
                fontWeight: '700',
                letterSpacing: '-4%',
            },
            h4_bold: {
                fontSize: 20,
                fontWeight: '800',
                letterSpacing: '-4%',
            },
            body1: {
                fontSize: 16,
                fontWeight: '400',
                letterSpacing: '-4%',
            },
            body1_bold: {
                fontSize: 16,
                fontWeight: '700',
                letterSpacing: '-4%',
            },
            body2: {
                fontSize: 14,
                fontWeight: '400',
                letterSpacing: '-4%',
            },
            body2_bold: {
                fontSize: 14,
                fontWeight: '700',
                letterSpacing: '-4%',
            },
            body3: {
                fontSize: 12,
                fontWeight: '400',
                letterSpacing: '-4%',
            },
            body3_bold: {
                fontSize: 12,
                fontWeight: 'bold',
                letterSpacing: '-4%',
            },
        },
        components: getComponents(),
    };
};

export const applicationTheme = createApplicationTheme({ mode: 'light' });
export default createTheme(applicationTheme);
