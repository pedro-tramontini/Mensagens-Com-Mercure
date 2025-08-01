import { Box, Button, TextField, Typography } from '@mui/material';
const App = () => {

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
      <Button onClick={() => pedirPermissaoNotificacao()}>Permitir notificações?</Button>
      <Button >Permitir notificações?</Button>
    </form>
  </Box>
  );
};

export default App;
