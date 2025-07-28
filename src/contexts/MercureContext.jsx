import { EventSourcePolyfill } from 'event-source-polyfill';
import React, { createContext, useContext, useEffect, useState } from 'react';

const MercureContext = createContext();

export const MercureProvider = ({children}) => {

    const [conteudoMercure, setConteudoMercure] = useState({})

    useEffect(() => {
        const token = 'eyJhbGciOiJIUzI1NiJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsiKiJdLCJzdWJzY3JpYmUiOlsiaHR0cHM6Ly9leGFtcGxlLmNvbS9teS1wcml2YXRlLXRvcGljL3tpZH0vMSIsIntzY2hlbWV9Oi8veytob3N0fS9kZW1vL2Jvb2tzL3tpZH0uanNvbmxkIiwiLy53ZWxsLWtub3duL21lcmN1cmUvc3Vic2NyaXB0aW9uc3svdG9waWN9ey9zdWJzY3JpYmVyfSJdLCJwYXlsb2FkIjp7InVzZXIiOiJodHRwczovL2V4YW1wbGUuY29tL3VzZXJzL2R1bmdsYXMiLCJyZW1vdGVBZGRyIjoiMTI3LjAuMC4xIn19fQ.vDpRRYK260nhsE759cEsDcVLCVnX7iaRCFpkBhAyYI0'
        const url = new URL("https://localhost/.well-known/mercure");
        url.searchParams.append("topic", "https://example.com/my-private-topic/miguel/1");
        
        const eventSource = new EventSourcePolyfill(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        
        eventSource.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setConteudoMercure(data)
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