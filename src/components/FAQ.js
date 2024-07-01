import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
export default function FAQ() {
    var _a = React.useState(false), expanded = _a[0], setExpanded = _a[1];
    var handleChange = function (panel) { return function (event, isExpanded) {
        setExpanded(isExpanded ? panel : false);
    }; };
    return (_jsxs(Container, __assign({ id: "faq", sx: {
            pt: { xs: 4, sm: 12 },
            pb: { xs: 8, sm: 16 },
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: { xs: 3, sm: 6 },
        } }, { children: [_jsx(Typography, __assign({ component: "h2", variant: "h4", color: "text.primary", sx: {
                    width: { sm: '100%', md: '60%' },
                    textAlign: { sm: 'left', md: 'center' },
                } }, { children: "Frequently asked questions" })), _jsxs(Box, __assign({ sx: { width: '100%' } }, { children: [_jsxs(Accordion, __assign({ expanded: expanded === 'panel1', onChange: handleChange('panel1') }, { children: [_jsx(AccordionSummary, __assign({ expandIcon: _jsx(ExpandMoreIcon, {}), "aria-controls": "panel1d-content", id: "panel1d-header" }, { children: _jsx(Typography, __assign({ component: "h3", variant: "subtitle2" }, { children: "How do I contact customer support if I have a question or issue?" })) })), _jsx(AccordionDetails, { children: _jsxs(Typography, __assign({ variant: "body2", gutterBottom: true, sx: { maxWidth: { sm: '100%', md: '70%' } } }, { children: ["You can reach our customer support team by emailing", _jsx(Link, { children: " support@email.com " }), "or calling our toll-free number. We're here to assist you promptly."] })) })] })), _jsxs(Accordion, __assign({ expanded: expanded === 'panel2', onChange: handleChange('panel2') }, { children: [_jsx(AccordionSummary, __assign({ expandIcon: _jsx(ExpandMoreIcon, {}), "aria-controls": "panel2d-content", id: "panel2d-header" }, { children: _jsx(Typography, __assign({ component: "h3", variant: "subtitle2" }, { children: "Can I return the product if it doesn't meet my expectations?" })) })), _jsx(AccordionDetails, { children: _jsx(Typography, __assign({ variant: "body2", gutterBottom: true, sx: { maxWidth: { sm: '100%', md: '70%' } } }, { children: "Absolutely! We offer a hassle-free return policy. If you're not completely satisfied, you can return the product within [number of days] days for a full refund or exchange." })) })] })), _jsxs(Accordion, __assign({ expanded: expanded === 'panel3', onChange: handleChange('panel3') }, { children: [_jsx(AccordionSummary, __assign({ expandIcon: _jsx(ExpandMoreIcon, {}), "aria-controls": "panel3d-content", id: "panel3d-header" }, { children: _jsx(Typography, __assign({ component: "h3", variant: "subtitle2" }, { children: "What makes your product stand out from others in the market?" })) })), _jsx(AccordionDetails, { children: _jsx(Typography, __assign({ variant: "body2", gutterBottom: true, sx: { maxWidth: { sm: '100%', md: '70%' } } }, { children: "Our product distinguishes itself through its adaptability, durability, and innovative features. We prioritize user satisfaction and continually strive to exceed expectations in every aspect." })) })] })), _jsxs(Accordion, __assign({ expanded: expanded === 'panel4', onChange: handleChange('panel4') }, { children: [_jsx(AccordionSummary, __assign({ expandIcon: _jsx(ExpandMoreIcon, {}), "aria-controls": "panel4d-content", id: "panel4d-header" }, { children: _jsx(Typography, __assign({ component: "h3", variant: "subtitle2" }, { children: "Is there a warranty on the product, and what does it cover?" })) })), _jsx(AccordionDetails, { children: _jsx(Typography, __assign({ variant: "body2", gutterBottom: true, sx: { maxWidth: { sm: '100%', md: '70%' } } }, { children: "Yes, our product comes with a [length of warranty] warranty. It covers defects in materials and workmanship. If you encounter any issues covered by the warranty, please contact our customer support for assistance." })) })] }))] }))] })));
}
