import Head from 'next/head';
const Index = () => {
    console.log(process.env.NEXT_PUBLIC_API_BASE_URL)
    return (
        <>
        <Head>
            <title>MY BLOG | Home Page</title>
            <meta name =" keywords" content="Questa è la home del mio blog" />
        </Head>
            <h1>Index you info ....</h1>
            <style jsx>{`
            h1 {
                color: darkgereen
            }
        `}
            </style>
        </>
    );
}
export default Index;