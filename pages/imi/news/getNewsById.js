// export async function getStaticProps() { 
//     const res = await fetch(`https://peq.marketwall.test/rest/news/getnewsbyid?id=${id}`)
//     //const res = await fetch('https://peq.marketwall.test/rest/menu/getmenu?language='+{props});
//     const data = await res.json();
//     return {
//         props: {
//              data
//         }
//     }
// }


// export async function getStaticPaths() {        
//     const res = await fetch(`https://peq.marketwall.test/rest/news/getnewsbyid?id=${id}`) 
//     //const res = await fetch('https://peq.marketwall.test/rest/menu/getmenu?language='+{context});
//     const dati = await res.json();
//     const paths =dati.map(elem=>({
//         params:{id: elem.id}
//     }));

//     return {
//         paths,
//     fallback:false
 
//     }
// }


const getnewsbyid = (props) => {
    return (
        <>
            <h1> Chiamata Getnewsbyid ....</h1>
            <p>{props.data}</p>
        </>
    );
}
export default getnewsbyid;