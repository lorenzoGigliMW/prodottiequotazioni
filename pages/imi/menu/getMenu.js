// export async function getStaticProps() { 
//     const res = await fetch(`https://peq.marketwall.test/rest/menu/getmenu?language=${language}`)
//     //const res = await fetch('https://peq.marketwall.test/rest/menu/getmenu?language='+{props});
//     const data = await res.json();
//     return {
//         props: {
//              data
//         }
//     }
// }


// export async function getStaticPaths() {        
//     const res = await fetch(`https://peq.marketwall.test/rest/menu/getmenu?language=${language}`) 
//     //const res = await fetch('https://peq.marketwall.test/rest/menu/getmenu?language='+{context});
//     const dati = await res.json();
//     const paths =dati.map(elem=>({
//         params:{language: elem.language}//    o     dati.language
//     }));

//     return {
//         paths,
//     fallback:false
 
//     }
// }


const getMenu = (props) => {
    return (
        <>
            <h1> Chiamata getMenu ....</h1>
            <p>{props.data}</p>
        </>
    );
}
export default getMenu;