import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';
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
var userTestimonials = [
    {
        avatar: _jsx(Avatar, { alt: "Remy Sharp", src: "/static/images/avatar/2.jpg" }),
        name: 'Remy Sharp',
        occupation: 'Project Manager',
        testimonial: "Working with Xzavia was a game-changer for our project. Their expertise and attention to detail helped us navigate complex engineering challenges effortlessly. We're grateful for their professionalism and dedication to delivering top-notch solutions.",
    },
    {
        avatar: _jsx(Avatar, { alt: "Travis Howard", src: "/static/images/avatar/2.jpg" }),
        name: 'Travis Howard',
        occupation: 'Engineering Director',
        testimonial: "I can't recommend Xzavia enough! Their team's innovative approach and deep technical knowledge exceeded our expectations. They truly went above and beyond to ensure our project's success.",
    },
    {
        avatar: _jsx(Avatar, { alt: "Cindy Baker", src: "/static/images/avatar/3.jpg" }),
        name: 'Cindy Baker',
        occupation: 'CTO',
        testimonial: "From the initial consultation to the final implementation, Xzavia Optimization provided unparalleled support and guidance. Their commitment to excellence and ability to find creative solutions saved us time and money. We're thrilled with the results!",
    },
    {
        avatar: _jsx(Avatar, { alt: "Remy Sharp", src: "/static/images/avatar/4.jpg" }),
        name: 'Julia Stewart',
        occupation: 'Senior Engineer',
        testimonial: "Choosing Xzavia Optimization was one of the best decisions we made for our infrastructure project. Their proactive communication and problem-solving skills were instrumental in overcoming obstacles. We're extremely satisfied with their professionalism and expertise.",
    },
    {
        avatar: _jsx(Avatar, { alt: "Travis Howard", src: "/static/images/avatar/5.jpg" }),
        name: 'John Smith',
        occupation: 'Facilities Manager',
        testimonial: "Working with Xzavia Optimization was a seamless experience from start to finish. Their team's technical proficiency and collaborative approach made our project run smoothly. We highly recommend their services to anyone seeking reliable engineering solutions.",
    },
    {
        avatar: _jsx(Avatar, { alt: "Cindy Baker", src: "/static/images/avatar/6.jpg" }),
        name: 'Daniel Wolf',
        occupation: 'CDO',
        testimonial: "The quality of this product exceeded my expectations. It's durable, well-designed, and built to last. Definitely worth the investment!",
    },
];
var whiteLogos = [
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg',
];
var darkLogos = [
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg',
];
var logoStyle = {
    width: '64px',
    opacity: 0.3,
};
export default function Testimonials() {
    var theme = useTheme();
    var logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;
    return (_jsxs(Container, __assign({ id: "testimonials", sx: {
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
                } }, { children: [_jsx(Typography, __assign({ component: "h2", variant: "h4", color: "text.primary" }, { children: "Testimonials" })), _jsx(Typography, __assign({ variant: "body1", color: "text.secondary" }, { children: "See what our customers love about our products. Discover how we excel in efficiency, durability, and satisfaction. Join us for quality, innovation, and reliable support." }))] })), _jsx(Grid, __assign({ container: true, spacing: 2 }, { children: userTestimonials.map(function (testimonial, index) { return (_jsx(Grid, __assign({ item: true, xs: 12, sm: 6, md: 4, sx: { display: 'flex' } }, { children: _jsxs(Card, __assign({ sx: {
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            flexGrow: 1,
                            p: 1,
                        } }, { children: [_jsx(CardContent, { children: _jsx(Typography, __assign({ variant: "body2", color: "text.secondary" }, { children: testimonial.testimonial })) }), _jsx(Box, __assign({ sx: {
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    pr: 2,
                                } }, { children: _jsx(CardHeader, { avatar: testimonial.avatar, title: testimonial.name, subheader: testimonial.occupation }) }))] })) }), index)); }) }))] })));
}
