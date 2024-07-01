import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
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
        icon: _jsx(SettingsSuggestRoundedIcon, {}),
        title: 'Adaptable performance',
        description: 'Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.',
    },
    {
        icon: _jsx(ConstructionRoundedIcon, {}),
        title: 'Built to last',
        description: 'Experience unmatched durability that goes above and beyond with lasting investment.',
    },
    {
        icon: _jsx(ThumbUpAltRoundedIcon, {}),
        title: 'Great user experience',
        description: 'Integrate our product into your routine with an intuitive and easy-to-use interface.',
    },
    {
        icon: _jsx(AutoFixHighRoundedIcon, {}),
        title: 'Innovative functionality',
        description: 'Stay ahead with features that set new standards, addressing your evolving needs better than the rest.',
    },
    {
        icon: _jsx(SupportAgentRoundedIcon, {}),
        title: 'Reliable support',
        description: 'Count on our responsive customer support, offering assistance that goes beyond the purchase.',
    },
    {
        icon: _jsx(QueryStatsRoundedIcon, {}),
        title: 'Precision in every detail',
        description: 'Enjoy a meticulously crafted product where small touches make a significant impact on your overall experience.',
    },
];
export default function Highlights() {
    return (_jsx(Box, __assign({ id: "highlights", sx: {
            pt: { xs: 4, sm: 12 },
            pb: { xs: 8, sm: 16 },
            color: 'white',
            bgcolor: '#06090a',
        } }, { children: _jsxs(Container, __assign({ sx: {
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 3, sm: 6 },
            } }, { children: [_jsxs(Box, __assign({ sx: {
                        width: { sm: '100%', md: '60%' },
                        textAlign: { sm: 'left', md: 'center' },
                    } }, { children: [_jsx(Typography, __assign({ component: "h2", variant: "h4" }, { children: "Highlights" })), _jsx(Typography, __assign({ variant: "body1", sx: { color: 'grey.400' } }, { children: "Explore why our product stands out: adaptability, durability, user-friendly design, and innovation. Enjoy reliable customer support and precision in every detail." }))] })), _jsx(Grid, __assign({ container: true, spacing: 2.5 }, { children: items.map(function (item, index) { return (_jsx(Grid, __assign({ item: true, xs: 12, sm: 6, md: 4 }, { children: _jsxs(Stack, __assign({ direction: "column", color: "inherit", component: Card, spacing: 1, useFlexGap: true, sx: {
                                p: 3,
                                height: '100%',
                                border: '1px solid',
                                borderColor: 'grey.800',
                                background: 'transparent',
                                backgroundColor: 'grey.900',
                            } }, { children: [_jsx(Box, __assign({ sx: { opacity: '50%' } }, { children: item.icon })), _jsxs("div", { children: [_jsx(Typography, __assign({ fontWeight: "medium", gutterBottom: true }, { children: item.title })), _jsx(Typography, __assign({ variant: "body2", sx: { color: 'grey.400' } }, { children: item.description }))] })] })) }), index)); }) }))] })) })));
}
