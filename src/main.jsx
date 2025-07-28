import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import '../Teste.js';
import Pagina2 from './Pagina2.jsx'
import Chat from './Chat.jsx';
import { MercureProvider } from './contexts/MercureContext.jsx';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/pagina2",
        element: <Pagina2 />
    },
    {
        path: "/chat",
        element: <Chat />
    }
])

createRoot(document.getElementById('root')).render(
    <MercureProvider>
        <RouterProvider router ={router} />
    </MercureProvider>
)
