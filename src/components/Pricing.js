import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
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
var tiers = [
    {
        title: 'Free',
        price: '0',
        description: [
            '10 users included',
            '2 GB of storage',
            'Help center access',
            'Email support',
        ],
        buttonText: 'Sign up for free',
        buttonVariant: 'outlined',
    },
    {
        title: 'Professional',
        subheader: 'Recommended',
        price: '15',
        description: [
            '20 users included',
            '10 GB of storage',
            'Help center access',
            'Priority email support',
            'Dedicated team',
            'Best deals',
        ],
        buttonText: 'Start now',
        buttonVariant: 'contained',
    },
    {
        title: 'Enterprise',
        price: '30',
        description: [
            '50 users included',
            '30 GB of storage',
            'Help center access',
            'Phone & email support',
        ],
        buttonText: 'Contact us',
        buttonVariant: 'outlined',
    },
];
export default function Pricing() {
    return (_jsxs(Container, __assign({ id: "pricing", sx: {
            pt: { xs: 4, sm: 12 },
            pb: { xs: 8, sm: 16 },
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: { xs: 3, sm: 6 },
        } }, { children: [_jsxs(Box, __assign({ sx: {
                    width: { sm: '100%', md: '60%' },
                    textAlign: { sm: 'left', md: 'center' },
                } }, { children: [_jsx(Typography, __assign({ component: "h2", variant: "h4", color: "text.primary" }, { children: "Pricing" })), _jsxs(Typography, __assign({ variant: "body1", color: "text.secondary" }, { children: ["Quickly build an effective pricing table for your potential customers with this layout. ", _jsx("br", {}), "It's built with default Material UI components with little customization."] }))] })), _jsx(Grid, __assign({ container: true, spacing: 3, alignItems: "center", justifyContent: "center" }, { children: tiers.map(function (tier) { return (_jsx(Grid, __assign({ item: true, xs: 12, sm: tier.title === 'Enterprise' ? 12 : 6, md: 4 }, { children: _jsxs(Card, __assign({ sx: {
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 4,
                            border: tier.title === 'Professional' ? '1px solid' : undefined,
                            borderColor: tier.title === 'Professional' ? 'primary.main' : undefined,
                            background: tier.title === 'Professional'
                                ? 'linear-gradient(#033363, #021F3B)'
                                : undefined,
                        } }, { children: [_jsxs(CardContent, { children: [_jsxs(Box, __assign({ sx: {
                                            mb: 1,
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            color: tier.title === 'Professional' ? 'grey.100' : '',
                                        } }, { children: [_jsx(Typography, __assign({ component: "h3", variant: "h6" }, { children: tier.title })), tier.title === 'Professional' && (_jsx(Chip, { icon: _jsx(AutoAwesomeIcon, {}), label: tier.subheader, size: "small", sx: {
                                                    background: function (theme) {
                                                        return theme.palette.mode === 'light' ? '' : 'none';
                                                    },
                                                    backgroundColor: 'primary.contrastText',
                                                    '& .MuiChip-label': {
                                                        color: 'primary.dark',
                                                    },
                                                    '& .MuiChip-icon': {
                                                        color: 'primary.dark',
                                                    },
                                                } }))] })), _jsxs(Box, __assign({ sx: {
                                            display: 'flex',
                                            alignItems: 'baseline',
                                            color: tier.title === 'Professional' ? 'grey.50' : undefined,
                                        } }, { children: [_jsxs(Typography, __assign({ component: "h3", variant: "h2" }, { children: ["$", tier.price] })), _jsx(Typography, __assign({ component: "h3", variant: "h6" }, { children: "\u00A0 per month" }))] })), _jsx(Divider, { sx: {
                                            my: 2,
                                            opacity: 0.2,
                                            borderColor: 'grey.500',
                                        } }), tier.description.map(function (line) { return (_jsxs(Box, __assign({ sx: {
                                            py: 1,
                                            display: 'flex',
                                            gap: 1.5,
                                            alignItems: 'center',
                                        } }, { children: [_jsx(CheckCircleRoundedIcon, { sx: {
                                                    width: 20,
                                                    color: tier.title === 'Professional'
                                                        ? 'primary.light'
                                                        : 'primary.main',
                                                } }), _jsx(Typography, __assign({ component: "text", variant: "subtitle2", sx: {
                                                    color: tier.title === 'Professional' ? 'grey.200' : undefined,
                                                } }, { children: line }))] }), line)); })] }), _jsx(CardActions, { children: _jsx(Button, __assign({ fullWidth: true, variant: tier.buttonVariant, component: "a", href: "/material-ui/getting-started/templates/checkout/", target: "_blank" }, { children: tier.buttonText })) })] })) }), tier.title)); }) }))] })));
}
