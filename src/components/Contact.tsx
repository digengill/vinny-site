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



interface Props {
  children?: React.ReactNode
  popup: boolean
  popupHandler: React.Dispatch<React.SetStateAction<boolean>> 
}

function Contact({popup, popupHandler}: Props) {
  const [loading, setLoading] = React.useState(false);
  const [sendDisabled, disableSend] = React.useState(false);
  const [sendSuccess, setSendSuccess] = React.useState(false);
  const [sendFail, setSendFail] = React.useState(false);
  const mail_url: string = (process.env.REACT_APP_MAIL_URL) ? process.env.REACT_APP_MAIL_URL: 'url_missing';
  function handleClick() {
    setLoading(true);
  }

  const handleClose = () => {
    popupHandler(false);
  };

  return (
    <Dialog
        open={popup}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            disableSend(true);
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            const name = formJson.name;
            const message = formJson.message;
            console.log(email);
            console.log(name);
            console.log(message);
            setLoading(true);
            axios.post(mail_url, {
              subject: `Message from ${name}`,
              message: message
          },{
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
        }}
      disableRestoreFocus
      >
        <DialogTitle>Contact Us</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill out the details to send us a message & We will connect with you.
          </DialogContentText>
          { sendSuccess &&
          <Alert severity="success">We recieved your message successfully.</Alert>
          }
          { sendFail &&
          <Alert severity="error">Message failed to send.</Alert>
          }
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Full Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="email"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="message"
            name="message"
            label="Leave a Message"
            type="text"
            fullWidth
            variant="standard"
            multiline={true}
            rows={3}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
         <LoadingButton
            type="submit"
            endIcon={<SendIcon />}
            loading={loading}
            loadingPosition="end"
            variant="contained"
            disabled={sendDisabled} 
          >
          <span>Send</span>
        </LoadingButton>
        </DialogActions>
      </Dialog>
  );
}

export default Contact;
