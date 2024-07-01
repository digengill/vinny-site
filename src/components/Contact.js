import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import axios from 'axios';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';
import Alert from '@mui/material/Alert';
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
function Contact(_a) {
    var popup = _a.popup, popupHandler = _a.popupHandler;
    var _b = React.useState(false), loading = _b[0], setLoading = _b[1];
    var _c = React.useState(false), sendDisabled = _c[0], disableSend = _c[1];
    var _d = React.useState(false), sendSuccess = _d[0], setSendSuccess = _d[1];
    var _e = React.useState(false), sendFail = _e[0], setSendFail = _e[1];
    var mail_url = (process.env.REACT_APP_MAIL_URL) ? process.env.REACT_APP_MAIL_URL : 'url_missing';
    function handleClick() {
        setLoading(true);
    }
    var handleClose = function () {
        popupHandler(false);
    };
    return (_jsxs(Dialog, __assign({ open: popup, onClose: handleClose, PaperProps: {
            component: 'form',
            onSubmit: function (event) {
                event.preventDefault();
                disableSend(true);
                var formData = new FormData(event.currentTarget);
                var formJson = Object.fromEntries(formData.entries());
                var email = formJson.email;
                var name = formJson.name;
                var message = formJson.message;
                console.log(email);
                console.log(name);
                console.log(message);
                setLoading(true);
                axios.post(mail_url, {
                    subject: "Message from ".concat(name),
                    message: message
                }, {
                    headers: {
                        'Ocp-Apim-Subscription-Key': process.env.REACT_APP_MAIL_API_KEY
                    }
                }).then(function (response) {
                    console.log(response);
                    setLoading(false);
                    setSendFail(false);
                    setSendSuccess(true);
                })
                    .catch(function (error) {
                    console.log(error);
                    disableSend(false);
                    setSendFail(true);
                });
                //handleClose();
            },
        }, disableRestoreFocus: true }, { children: [_jsx(DialogTitle, { children: "Contact Us" }), _jsxs(DialogContent, { children: [_jsx(DialogContentText, { children: "Please fill out the details to send us a message & We will connect with you." }), sendSuccess &&
                        _jsx(Alert, __assign({ severity: "success" }, { children: "We recieved your message successfully." })), sendFail &&
                        _jsx(Alert, __assign({ severity: "error" }, { children: "Message failed to send." })), _jsx(TextField, { autoFocus: true, required: true, margin: "dense", id: "name", name: "name", label: "Full Name", type: "text", fullWidth: true, variant: "standard" }), _jsx(TextField, { autoFocus: true, required: true, margin: "dense", id: "email", name: "email", label: "Email Address", type: "email", fullWidth: true, variant: "standard" }), _jsx(TextField, { autoFocus: true, required: true, margin: "dense", id: "message", name: "message", label: "Leave a Message", type: "text", fullWidth: true, variant: "standard", multiline: true, rows: 3 })] }), _jsxs(DialogActions, { children: [_jsx(Button, __assign({ onClick: handleClose }, { children: "Cancel" })), _jsx(LoadingButton, __assign({ type: "submit", endIcon: _jsx(SendIcon, {}), loading: loading, loadingPosition: "end", variant: "contained", disabled: sendDisabled }, { children: _jsx("span", { children: "Send" }) }))] })] })));
}
export default Contact;
