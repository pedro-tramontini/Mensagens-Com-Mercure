import { Box, Button, TextField, Typography } from '@mui/material';
// import { firebaseConfig, vapidKey } from './configuration';
// import { initializeApp } from 'firebase/app';
// import { getMessaging, getToken } from 'firebase/messaging';
const App = () => {

// const app = initializeApp(firebaseConfig);
// const messaging = getMessaging();
// // getToken(messaging, {vapidKey: "BKQ-nqWcKcpw2GEQdIz-KxhPcnrpq1yTERGYWQzPjjThXab7Qedja38ZefSNMOThmbKpeRQXTI7qSyFZ1VPo5xs"})

//  getToken(messaging, { vapidKey: vapidKey }).then((currentToken) => {
//   if (currentToken) {
//   console.log(currentToken)    // ...
//   } else {
//     // Show permission request UI
//     console.log('No registration token available. Request permission to generate one.');
//     // ...
//   }
// }).catch((err) => {
//   console.log('An error occurred while retrieving token. ', err);
//   // ...
// });

// let permission_notify = false;
const pedirPermissaoNotificacao = async () => {

  if (Notification.permission === 'granted') {
    return;
  } 

  if (Notification.permission !== 'denied') {
    await Notification.requestPermission();
  }
}

return (
  <Box >
    <form>
      <Typography>Mensagem</Typography>
      <TextField id='outlined_basic' label="Mensagem" variant='outlined'/>
      <Button onClick={() => pedirPermissaoNotificacao()} >Permitir notificações?</Button>
      <Button >Permitir notificações?</Button>
    </form>
  </Box>
  );
};

export default App;
