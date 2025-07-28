import { Box, Button } from '@mui/material';


const Pagina2 = () => {
const publicKey= 'BPEVoHDejQ2uzRBOeQsGX2g9opmlWUrICJldmcaqjXDu166iQigeN-osyFGlGpNZmZp4d0cqdX22-Z_YOY7JGTY'

navigator.serviceWorker.register('sw_2.js');

const registrar = async () => {
    await navigator.serviceWorker.ready.then((serviceWorkerRegistration) => {
      const options = {
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicKey)
      }
      serviceWorkerRegistration.pushManager.subscribe(options).then(
        (pushSubscription) => {
          console.log('SUBSCRIPTION:', JSON.stringify(pushSubscription))
        }
      )
    }
  )
}

  function urlBase64ToUint8Array(base64String) {
        const padding = '='.repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
        const rawData = atob(base64);
        const outputArray = new Uint8Array(rawData.length);
        for (let i = 0; i < rawData.length; ++i) {
          outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
      }


return (
  <Box >
    <form>
      <Button onClick={() => registrar()}>Clique para se registrar e receber notificações!</Button>

    </form>
  </Box>
  );
};

export default Pagina2;
