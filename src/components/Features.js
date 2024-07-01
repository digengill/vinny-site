import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var items = [
    {
        icon: _jsx(ViewQuiltRoundedIcon, {}),
        title: 'Product Design',
        description: 'This item could provide a snapshot of the most important metrics or data points related to the product.',
        imageLight: 'url("/static/images/logo192.png")',
        imageDark: 'url("/static/images/templates/templates-images/dash-dark.png")',
    },
    {
        icon: _jsx(EdgesensorHighRoundedIcon, {}),
        title: '3D Printing Optimization',
        description: 'This item could provide information about the mobile app version of the product.',
        imageLight: 'url("/static/images/templates/templates-images/mobile-light.png")',
        imageDark: 'url("/static/images/templates/templates-images/mobile-dark.png")',
    },
    {
        icon: _jsx(DevicesRoundedIcon, {}),
        title: '3D Printing Services',
        description: 'This item could let users know the product is available on all platforms, such as web, mobile, and desktop.',
        imageLight: 'url("/static/images/templates/templates-images/devices-light.png")',
        imageDark: 'url("/static/images/templates/templates-images/devices-dark.png")',
    },
];
export default function Features() {
    var _a = React.useState(0), selectedItemIndex = _a[0], setSelectedItemIndex = _a[1];
    var handleItemClick = function (index) {
        setSelectedItemIndex(index);
    };
    var selectedFeature = items[selectedItemIndex];
    return (_jsx(Container, __assign({ id: "features", sx: { py: { xs: 8, sm: 16 } } }, { children: _jsxs(Grid, __assign({ container: true, spacing: 6 }, { children: [_jsxs(Grid, __assign({ item: true, xs: 12, md: 6 }, { children: [_jsxs("div", { children: [_jsx(Typography, __assign({ component: "h2", variant: "h4", color: "text.primary" }, { children: "Services" })), _jsx(Typography, __assign({ variant: "body1", color: "text.secondary", sx: { mb: { xs: 2, sm: 4 } } }, { children: "Here you can provide a brief overview of the key features of the product. For example, you could list the number of features, the types of features, add-ons, or the benefits of the features." }))] }), _jsx(Grid, __assign({ container: true, item: true, gap: 1, sx: { display: { xs: 'auto', sm: 'none' } } }, { children: items.map(function (_a, index) {
                                var title = _a.title;
                                return (_jsx(Chip, { label: title, onClick: function () { return handleItemClick(index); }, sx: {
                                        borderColor: function (theme) {
                                            if (theme.palette.mode === 'light') {
                                                return selectedItemIndex === index ? 'primary.light' : '';
                                            }
                                            return selectedItemIndex === index ? 'primary.light' : '';
                                        },
                                        background: function (theme) {
                                            if (theme.palette.mode === 'light') {
                                                return selectedItemIndex === index ? 'none' : '';
                                            }
                                            return selectedItemIndex === index ? 'none' : '';
                                        },
                                        backgroundColor: selectedItemIndex === index ? 'primary.main' : '',
                                        '& .MuiChip-label': {
                                            color: selectedItemIndex === index ? '#fff' : '',
                                        },
                                    } }, index));
                            }) })), _jsxs(Box, __assign({ component: Card, variant: "outlined", sx: {
                                display: { xs: 'auto', sm: 'none' },
                                mt: 4,
                            } }, { children: [_jsx(Box, { sx: {
                                        backgroundImage: function (theme) {
                                            return theme.palette.mode === 'light'
                                                ? items[selectedItemIndex].imageLight
                                                : items[selectedItemIndex].imageDark;
                                        },
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        minHeight: 280,
                                    } }), _jsxs(Box, __assign({ sx: { px: 2, pb: 2 } }, { children: [_jsx(Typography, __assign({ color: "text.primary", variant: "body2", fontWeight: "bold" }, { children: selectedFeature.title })), _jsx(Typography, __assign({ color: "text.secondary", variant: "body2", sx: { my: 0.5 } }, { children: selectedFeature.description })), _jsxs(Link, __assign({ color: "primary", variant: "body2", fontWeight: "bold", sx: {
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                '& > svg': { transition: '0.2s' },
                                                '&:hover > svg': { transform: 'translateX(2px)' },
                                            } }, { children: [_jsx("span", { children: "Learn more" }), _jsx(ChevronRightRoundedIcon, { fontSize: "small", sx: { mt: '1px', ml: '2px' } })] }))] }))] })), _jsx(Stack, __assign({ direction: "column", justifyContent: "center", alignItems: "flex-start", spacing: 2, useFlexGap: true, sx: { width: '100%', display: { xs: 'none', sm: 'flex' } } }, { children: items.map(function (_a, index) {
                                var icon = _a.icon, title = _a.title, description = _a.description;
                                return (_jsx(Card, __assign({ variant: "outlined", component: Button, onClick: function () { return handleItemClick(index); }, sx: {
                                        p: 3,
                                        height: 'fit-content',
                                        width: '100%',
                                        background: 'none',
                                        backgroundColor: selectedItemIndex === index ? 'action.selected' : undefined,
                                        borderColor: function (theme) {
                                            if (theme.palette.mode === 'light') {
                                                return selectedItemIndex === index
                                                    ? 'primary.light'
                                                    : 'grey.200';
                                            }
                                            return selectedItemIndex === index ? 'primary.dark' : 'grey.800';
                                        },
                                    } }, { children: _jsxs(Box, __assign({ sx: {
                                            width: '100%',
                                            display: 'flex',
                                            textAlign: 'left',
                                            flexDirection: { xs: 'column', md: 'row' },
                                            alignItems: { md: 'center' },
                                            gap: 2.5,
                                        } }, { children: [_jsx(Box, __assign({ sx: {
                                                    color: function (theme) {
                                                        if (theme.palette.mode === 'light') {
                                                            return selectedItemIndex === index
                                                                ? 'primary.main'
                                                                : 'grey.300';
                                                        }
                                                        return selectedItemIndex === index
                                                            ? 'primary.main'
                                                            : 'grey.700';
                                                    },
                                                } }, { children: icon })), _jsxs(Box, __assign({ sx: { textTransform: 'none' } }, { children: [_jsx(Typography, __assign({ color: "text.primary", variant: "body2", fontWeight: "bold" }, { children: title })), _jsx(Typography, __assign({ color: "text.secondary", variant: "body2", sx: { my: 0.5 } }, { children: description })), _jsxs(Link, __assign({ color: "primary", variant: "body2", fontWeight: "bold", sx: {
                                                            display: 'inline-flex',
                                                            alignItems: 'center',
                                                            '& > svg': { transition: '0.2s' },
                                                            '&:hover > svg': { transform: 'translateX(2px)' },
                                                        }, onClick: function (event) {
                                                            event.stopPropagation();
                                                        } }, { children: [_jsx("span", { children: "Learn more" }), _jsx(ChevronRightRoundedIcon, { fontSize: "small", sx: { mt: '1px', ml: '2px' } })] }))] }))] })) }), index));
                            }) }))] })), _jsx(Grid, __assign({ item: true, xs: 12, md: 6, sx: { display: { xs: 'none', sm: 'flex' }, width: '100%' } }, { children: _jsx(Card, __assign({ variant: "outlined", sx: {
                            height: '100%',
                            width: '100%',
                            display: { xs: 'none', sm: 'flex' },
                            pointerEvents: 'none',
                        } }, { children: _jsx(Box, { sx: {
                                m: 'auto',
                                width: 420,
                                height: 500,
                                backgroundSize: 'contain',
                                backgroundImage: function (theme) {
                                    return theme.palette.mode === 'light'
                                        ? items[selectedItemIndex].imageLight
                                        : items[selectedItemIndex].imageDark;
                                },
                            } }) })) }))] })) })));
}
