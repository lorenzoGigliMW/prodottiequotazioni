export async function getStaticProps() { 
    const res = await fetch('https://peq.marketwall.test/rest/menu/getmenu?language=it');
    const data = await res.json();
    return {
        props: {
             data
        }
    }
}


export async function getStaticPaths(context) {         
    const res = await fetch('https://peq.marketwall.test/rest/menu/getmenu?language=it');
    const data = await res.json();
    const paths =data.map(language=>({
        params:{language: data.language}
    }));

    return {
        paths,
    fallback:false
 
    }
}


const getMenu = (props) => {
    return (
        <>
            <h1> Chiamata getMenu ....</h1>
            <p>{props.data}</p>
        </>
    );
}
export default getMenu;