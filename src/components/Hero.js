import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
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
export default function Hero(_a) {
    var pageHandler = _a.pageHandler;
    return (_jsx(Box, __assign({ id: "hero", sx: function (theme) { return ({
            width: '100%',
            backgroundImage: theme.palette.mode === 'light'
                ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
                : "linear-gradient(#02294F, ".concat(alpha('#090E10', 0.0), ")"),
            backgroundSize: '100% 20%',
            backgroundRepeat: 'no-repeat',
        }); } }, { children: _jsx(Container, __assign({ sx: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                pt: { xs: 14, sm: 20 },
                pb: { xs: 8, sm: 12 },
            } }, { children: _jsxs(Stack, __assign({ spacing: 2, useFlexGap: true, sx: { width: { xs: '100%', sm: '70%' } } }, { children: [_jsxs(Typography, __assign({ variant: "h1", sx: {
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignSelf: 'center',
                            textAlign: 'center',
                            fontSize: 'clamp(3.5rem, 10vw, 4rem)',
                        } }, { children: ["Xzavia", _jsx(Typography, __assign({ component: "span", variant: "h1", sx: {
                                    fontSize: 'clamp(3rem, 10vw, 4rem)',
                                    color: function (theme) {
                                        return theme.palette.mode === 'light' ? 'primary.main' : 'primary.light';
                                    },
                                } }, { children: "Optimization Inc." }))] })), _jsx(Typography, __assign({ textAlign: "center", color: "text.secondary", sx: { alignSelf: 'center', width: { sm: '100%', md: '80%' } } }, { children: "Explore our cutting-edge dashboard, delivering high-quality solutions tailored to your needs. Elevate your experience with top-tier features and services." })), _jsx(Stack, __assign({ direction: { xs: 'column', sm: 'row' }, alignSelf: "center", spacing: 1, useFlexGap: true, sx: { pt: 2, width: { xs: '100%', sm: 'auto' } } }, { children: _jsx(Button, __assign({ variant: "contained", color: "primary", onClick: function () { return pageHandler(true); } }, { children: "Start now" })) })), _jsxs(Typography, __assign({ variant: "caption", textAlign: "center", sx: { opacity: 0.8 } }, { children: ["By clicking \"Start now\" you agree to our\u00A0", _jsx(Link, __assign({ href: "#", color: "primary" }, { children: "Terms & Conditions" })), "."] }))] })) })) })));
}
