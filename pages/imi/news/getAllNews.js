// export async function getStaticProps() { 
//     const res = await fetch(`https://peq.marketwall.test/rest/news/getallnews`)
//     //const res = await fetch('https://peq.marketwall.test/rest/menu/getmenu?language='+{props});
//     const data = await res.json();
//     return {
//         props: {
//              data
//         }
//     }
// }


// export async function getStaticPaths() {        
//     const res = await fetch(`https://peq.marketwall.test/rest/news/getallnews`) 
//     //const res = await fetch('https://peq.marketwall.test/rest/menu/getmenu?language='+{context});
//     const dati = await res.json();
//     const paths =dati.map(elem=>({
//         params:{data: elem.data}
//     }));

//     return {
//         paths,
//     fallback:false
 
//     }
// }


const getallnews = (props) => {
    return (
        <>
            <h1> Chiamata getallnews ....</h1>
            <p>{props.data}</p>
        </>
    );
}
export default getallnews;