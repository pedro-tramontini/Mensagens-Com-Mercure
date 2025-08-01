import { EventSourcePolyfill } from 'event-source-polyfill';
import React, { createContext, useContext, useEffect, useState } from 'react';

const MercureContext = createContext();

export const MercureProvider = ({children}) => {

    const [conteudoMercure, setConteudoMercure] = useState({})

    useEffect(() => {
        const token = import.meta.env.VITE_APP_JWT_KEY
        const url = new URL("https://localhost/.well-known/mercure");
        url.searchParams.append("topic", "https://example.com/my-private-topic/miguel/1");
        
        const eventSource = new EventSourcePolyfill(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        
        eventSource.onmessage = ({data}) => {
            const dataMensagem = JSON.parse(data);
            setConteudoMercure(dataMensagem)
        }; 
        return () => {
            eventSource.close()
        }
    }, [])
    

// function changeFavicon(src) {
//     let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
//     link.type = 'image/x-icon';
//     link.rel = 'shortcut icon';
//     link.href = src;
//     document.getElementsByTagName('head')[0].appendChild(link);
// }

return (
    <MercureContext.Provider value={{ conteudoMercure }}>
        {children}
    </MercureContext.Provider>
    )
}

export const useMercure = () => useContext(MercureContext)