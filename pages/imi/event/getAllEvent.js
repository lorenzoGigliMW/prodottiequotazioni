export async function getStaticProps() { 
    const res = await fetch(`https://peq.marketwall.test/rest/events/getallevents`)
    //const res = await fetch('https://peq.marketwall.test/rest/menu/getmenu?language='+{props});
    const data = await res.json();
    return {
        props: {
             data
        }
    }
}


export async function getStaticPaths() {        
    const res = await fetch(`https://peq.marketwall.test/rest/events/getallevents`) 
    //const res = await fetch('https://peq.marketwall.test/rest/menu/getmenu?language='+{context});
    const dati = await res.json();
    const paths =dati.map(elem=>({
        params:{data: elem.data}
    }));

    return {
        paths,
    fallback:false
 
    }
}


const getAllEvent = (props) => {
    return (
        <>
            <h1> Chiamata getAllEvent ....</h1>
            <p>{props.data}</p>
        </>
    );
}
export default getAllEvent;