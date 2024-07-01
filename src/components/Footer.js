import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';
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
};
function Copyright() {
    return (_jsxs(Typography, __assign({ variant: "body2", color: "text.secondary", mt: 1 }, { children: ['Copyright © ', _jsx(Link, __assign({ href: "https://mui.com/" }, { children: "Sitemark\u00A0" })), new Date().getFullYear()] })));
}
export default function Footer() {
    return (_jsxs(Container, __assign({ sx: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: { xs: 4, sm: 8 },
            py: { xs: 8, sm: 10 },
            textAlign: { sm: 'center', md: 'left' },
        } }, { children: [_jsxs(Box, __assign({ sx: {
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    width: '100%',
                    justifyContent: 'space-between',
                } }, { children: [_jsx(Box, __assign({ sx: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 4,
                            minWidth: { xs: '100%', sm: '60%' },
                        } }, { children: _jsxs(Box, __assign({ sx: { width: { xs: '100%', sm: '60%' } } }, { children: [_jsx(Box, __assign({ sx: { ml: '-15px' } }, { children: _jsx("img", { src: 'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg', style: logoStyle, alt: "logo of sitemark" }) })), _jsx(Typography, __assign({ variant: "body2", fontWeight: 600, gutterBottom: true }, { children: "Newsletter" })), _jsx(Typography, __assign({ variant: "body2", color: "text.secondary", mb: 2 }, { children: "Subscribe to our newsletter for weekly updates and promotions." })), _jsxs(Stack, __assign({ direction: "row", spacing: 1, useFlexGap: true }, { children: [_jsx(TextField, { id: "outlined-basic", hiddenLabel: true, size: "small", variant: "outlined", fullWidth: true, "aria-label": "Enter your email address", placeholder: "Your email address", inputProps: {
                                                autocomplete: 'off',
                                                ariaLabel: 'Enter your email address',
                                            } }), _jsx(Button, __assign({ variant: "contained", color: "primary", sx: { flexShrink: 0 } }, { children: "Subscribe" }))] }))] })) })), _jsxs(Box, __assign({ sx: {
                            display: { xs: 'none', sm: 'flex' },
                            flexDirection: 'column',
                            gap: 1,
                        } }, { children: [_jsx(Typography, __assign({ variant: "body2", fontWeight: 600 }, { children: "Product" })), _jsx(Link, __assign({ color: "text.secondary", href: "#" }, { children: "Features" })), _jsx(Link, __assign({ color: "text.secondary", href: "#" }, { children: "Testimonials" })), _jsx(Link, __assign({ color: "text.secondary", href: "#" }, { children: "Highlights" })), _jsx(Link, __assign({ color: "text.secondary", href: "#" }, { children: "Pricing" })), _jsx(Link, __assign({ color: "text.secondary", href: "#" }, { children: "FAQs" }))] })), _jsxs(Box, __assign({ sx: {
                            display: { xs: 'none', sm: 'flex' },
                            flexDirection: 'column',
                            gap: 1,
                        } }, { children: [_jsx(Typography, __assign({ variant: "body2", fontWeight: 600 }, { children: "Company" })), _jsx(Link, __assign({ color: "text.secondary", href: "#" }, { children: "About us" })), _jsx(Link, __assign({ color: "text.secondary", href: "#" }, { children: "Careers" })), _jsx(Link, __assign({ color: "text.secondary", href: "#" }, { children: "Press" }))] })), _jsxs(Box, __assign({ sx: {
                            display: { xs: 'none', sm: 'flex' },
                            flexDirection: 'column',
                            gap: 1,
                        } }, { children: [_jsx(Typography, __assign({ variant: "body2", fontWeight: 600 }, { children: "Legal" })), _jsx(Link, __assign({ color: "text.secondary", href: "#" }, { children: "Terms" })), _jsx(Link, __assign({ color: "text.secondary", href: "#" }, { children: "Privacy" })), _jsx(Link, __assign({ color: "text.secondary", href: "#" }, { children: "Contact" }))] }))] })), _jsxs(Box, __assign({ sx: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    pt: { xs: 4, sm: 8 },
                    width: '100%',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                } }, { children: [_jsxs("div", { children: [_jsx(Link, __assign({ color: "text.secondary", href: "#" }, { children: "Privacy Policy" })), _jsx(Typography, __assign({ display: "inline", sx: { mx: 0.5, opacity: 0.5 } }, { children: "\u00A0\u2022\u00A0" })), _jsx(Link, __assign({ color: "text.secondary", href: "#" }, { children: "Terms of Service" })), _jsx(Copyright, {})] }), _jsxs(Stack, __assign({ direction: "row", justifyContent: "left", spacing: 1, useFlexGap: true, sx: {
                            color: 'text.secondary',
                        } }, { children: [_jsx(IconButton, __assign({ color: "inherit", href: "https://github.com/mui", "aria-label": "GitHub", sx: { alignSelf: 'center' } }, { children: _jsx(FacebookIcon, {}) })), _jsx(IconButton, __assign({ color: "inherit", href: "https://twitter.com/MaterialUI", "aria-label": "X", sx: { alignSelf: 'center' } }, { children: _jsx(TwitterIcon, {}) })), _jsx(IconButton, __assign({ color: "inherit", href: "https://www.linkedin.com/company/mui/", "aria-label": "LinkedIn", sx: { alignSelf: 'center' } }, { children: _jsx(LinkedInIcon, {}) }))] }))] }))] })));
}
