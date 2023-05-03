// export async function getStaticProps() { 
//     const res = await fetch(`https://peq.marketwall.test/rest/series/instantByIndex` 
//     //const res = await fetch('https://peq.marketwall.test/rest/series/instantByIndex'//?code=+{props.code}+'&language='+{props.language}
//     );
//     const data = await res.json();
//     return {
//         props: {
//              data
//         }
//     }
// }


// export async function getStaticPaths() {         
//     const res = await fetch('https://peq.marketwall.test/rest/series/instantByIndex'//?code=+{context.code}+'&language='+{context.language}
//     );
//     const dati = await res.json();
//     const paths =dati.map(elem=>({
//         params:{language: elem.data.language}
//     }));

//     return {
//         paths,
//     fallback:false
 
//     }
// }


const instantByIndex = (props) => {
    return (
        <>
            <h1> Chiamata instantByIndex ....</h1>
            <p>{props.data}</p>
        </>
    );
}
export default instantByIndex;