// export async function getStaticProps() { 
//     const res = await fetch(`https://peq.marketwall.test/rest/series/dossierbystock?code=${code}&language=${language}` 
//     //const res = await fetch('https://peq.marketwall.test/rest/series/dossierbystock?code='//+{props.code}+'&language='+{props.language}
//     );
//     const data = await res.json();
//     return {
//         props: {
//              data
//         }
//     }
// }


// export async function getStaticPaths() {     
//     const res = await fetch(`https://peq.marketwall.test/rest/series/dossierbystock?code=${code}&language=${language}`     
//     //const res = await fetch('https://peq.marketwall.test/rest/series/dossierbystock?code='//+{context.code}+'&language='+{context.language}
//     );
//     const dati = await res.json();
//     const paths =dati.map(elem=>({
//         params:{language: elem.data.language}//    o     dati.language
//     }));

//     return {
//         paths,
//     fallback:false
 
//     }
// }


const dossierByStock = (props) => {
    return (
        <>
            <h1> Chiamata dossierByStock ....</h1>
            <p>{props.data}</p>
        </>
    );
}
export default dossierByStock;