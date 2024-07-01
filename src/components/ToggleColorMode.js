import { jsx as _jsx } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded';
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
function ToggleColorMode(_a) {
    var mode = _a.mode, toggleColorMode = _a.toggleColorMode;
    return (_jsx(Box, __assign({ sx: { maxWidth: '32px' } }, { children: _jsx(Button, __assign({ variant: "text", onClick: toggleColorMode, size: "small", "aria-label": "button to toggle theme", sx: { minWidth: '32px', height: '32px', p: '4px' } }, { children: mode === 'dark' ? (_jsx(WbSunnyRoundedIcon, { fontSize: "small" })) : (_jsx(ModeNightRoundedIcon, { fontSize: "small" })) })) })));
}
export default ToggleColorMode;
