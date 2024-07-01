import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from './ToggleColorMode';
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
var logoStyle = {
    width: '140px',
    height: 'auto',
    cursor: 'pointer',
};
function AppAppBar(_a) {
    var mode = _a.mode, toggleColorMode = _a.toggleColorMode;
    var _b = React.useState(false), open = _b[0], setOpen = _b[1];
    var toggleDrawer = function (newOpen) { return function () {
        setOpen(newOpen);
    }; };
    var scrollToSection = function (sectionId) {
        var sectionElement = document.getElementById(sectionId);
        var offset = 128;
        if (sectionElement) {
            var targetScroll = sectionElement.offsetTop - offset;
            sectionElement.scrollIntoView({ behavior: 'smooth' });
            window.scrollTo({
                top: targetScroll,
                behavior: 'smooth',
            });
            setOpen(false);
        }
    };
    return (_jsx("div", { children: _jsx(AppBar, __assign({ position: "fixed", sx: {
                boxShadow: 0,
                bgcolor: 'transparent',
                backgroundImage: 'none',
                mt: 2,
            } }, { children: _jsx(Container, __assign({ maxWidth: "lg" }, { children: _jsxs(Toolbar, __assign({ variant: "regular", sx: function (theme) { return ({
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexShrink: 0,
                        borderRadius: '999px',
                        bgcolor: theme.palette.mode === 'light'
                            ? 'rgba(255, 255, 255, 0.4)'
                            : 'rgba(0, 0, 0, 0.4)',
                        backdropFilter: 'blur(24px)',
                        maxHeight: 40,
                        border: '1px solid',
                        borderColor: 'divider',
                        boxShadow: theme.palette.mode === 'light'
                            ? "0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)"
                            : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
                    }); } }, { children: [_jsxs(Box, __assign({ sx: {
                                flexGrow: 1,
                                display: 'flex',
                                alignItems: 'center',
                                ml: '-18px',
                                px: 0,
                            } }, { children: [_jsx("img", { src: 'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg', style: logoStyle, alt: "logo of sitemark" }), _jsxs(Box, __assign({ sx: { display: { xs: 'none', md: 'flex' } } }, { children: [_jsx(MenuItem, __assign({ onClick: function () { return scrollToSection('features'); }, sx: { py: '6px', px: '12px' } }, { children: _jsx(Typography, __assign({ variant: "body2", color: "text.primary" }, { children: "Features" })) })), _jsx(MenuItem, __assign({ onClick: function () { return scrollToSection('testimonials'); }, sx: { py: '6px', px: '12px' } }, { children: _jsx(Typography, __assign({ variant: "body2", color: "text.primary" }, { children: "Testimonials" })) })), _jsx(MenuItem, __assign({ onClick: function () { return scrollToSection('highlights'); }, sx: { py: '6px', px: '12px' } }, { children: _jsx(Typography, __assign({ variant: "body2", color: "text.primary" }, { children: "Highlights" })) }))] }))] })), _jsx(Box, __assign({ sx: {
                                display: { xs: 'none', md: 'flex' },
                                gap: 0.5,
                                alignItems: 'center',
                            } }, { children: _jsx(ToggleColorMode, { mode: mode, toggleColorMode: toggleColorMode }) })), _jsxs(Box, __assign({ sx: { display: { sm: '', md: 'none' } } }, { children: [_jsx(Button, __assign({ variant: "text", color: "primary", "aria-label": "menu", onClick: toggleDrawer(true), sx: { minWidth: '30px', p: '4px' } }, { children: _jsx(MenuIcon, {}) })), _jsx(Drawer, __assign({ anchor: "right", open: open, onClose: toggleDrawer(false) }, { children: _jsxs(Box, __assign({ sx: {
                                            minWidth: '60dvw',
                                            p: 2,
                                            backgroundColor: 'background.paper',
                                            flexGrow: 1,
                                        } }, { children: [_jsx(Box, __assign({ sx: {
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'end',
                                                    flexGrow: 1,
                                                } }, { children: _jsx(ToggleColorMode, { mode: mode, toggleColorMode: toggleColorMode }) })), _jsx(MenuItem, __assign({ onClick: function () { return scrollToSection('features'); } }, { children: "Features" })), _jsx(MenuItem, __assign({ onClick: function () { return scrollToSection('testimonials'); } }, { children: "Testimonials" })), _jsx(MenuItem, __assign({ onClick: function () { return scrollToSection('highlights'); } }, { children: "Highlights" })), _jsx(Divider, {})] })) }))] }))] })) })) })) }));
}
export default AppAppBar;
