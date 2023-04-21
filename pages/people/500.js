import {useRouter} from 'next/router';
import {useEffect} from 'react';

export default function NotFound() {
    const router=useRouter();
    useEffect (()=>{                               //avviato solo una volta all'inizializzazione della pagina
        setTimeout(()=>{router.push('/')},2000); //dopo 2 secondi mi fa ritornare nella home
    },[])
    return (
        <>
            <h1>500 - Server Error</h1>
            <p> Non ho trovato la pagina</p>
        </>
    );
}