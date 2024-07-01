import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import getLPTheme from './getLPTheme';
import Contact from './components/Contact';
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
function ToggleCustomTheme(_a) {
    var showCustomTheme = _a.showCustomTheme, toggleCustomTheme = _a.toggleCustomTheme;
    return (_jsx(Box, __assign({ sx: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100dvw',
            position: 'fixed',
            bottom: 24,
        } }, { children: _jsxs(ToggleButtonGroup, __assign({ color: "primary", exclusive: true, value: showCustomTheme, onChange: toggleCustomTheme, "aria-label": "Platform", sx: {
                backgroundColor: 'background.default',
                '& .Mui-selected': {
                    pointerEvents: 'none',
                },
            } }, { children: [_jsxs(ToggleButton, __assign({ value: true }, { children: [_jsx(AutoAwesomeRoundedIcon, { sx: { fontSize: '20px', mr: 1 } }), "Custom theme"] })), _jsx(ToggleButton, __assign({ value: false }, { children: "Material Design 2" }))] })) })));
}
export default function LandingPage() {
    var _a = React.useState(false), open = _a[0], setOpen = _a[1];
    var _b = React.useState('light'), mode = _b[0], setMode = _b[1];
    var _c = React.useState(true), showCustomTheme = _c[0], setShowCustomTheme = _c[1];
    var LPtheme = createTheme(getLPTheme(mode));
    var defaultTheme = createTheme({ palette: { mode: mode } });
    var toggleColorMode = function () {
        setMode(function (prev) { return (prev === 'dark' ? 'light' : 'dark'); });
    };
    var toggleCustomTheme = function () {
        setShowCustomTheme(function (prev) { return !prev; });
    };
    return (_jsxs(ThemeProvider, __assign({ theme: defaultTheme }, { children: [_jsx(CssBaseline, {}), _jsx(AppAppBar, { mode: mode, toggleColorMode: toggleColorMode }), _jsxs(_Fragment, { children: [_jsx(Hero, { pageHandler: setOpen }), _jsxs(Box, __assign({ sx: { bgcolor: 'background.default' } }, { children: [_jsx(Features, {}), _jsx(Divider, {}), _jsx(Testimonials, {}), _jsx(Divider, {}), _jsx(Highlights, {}), _jsx(Divider, {}), _jsx(Divider, {}), _jsx(Divider, {}), _jsx(Footer, {}), _jsx(Contact, { popup: open, popupHandler: setOpen })] }))] })] })));
}
