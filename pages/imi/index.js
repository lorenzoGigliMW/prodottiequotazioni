import Link from 'next/link';

const ProdottiEQuot = (props) => {
    return (
        <>
        <div>
            <h1>Prodotti e Quotazioni</h1>
        </div>
        <div>
            <h3>HOMEPAGE:</h3>
          <Link href={`/Homepage`}><a>Home</a></Link>
          <h3>FILTRI:</h3>
          <Link href={`/filtri`}><a>Filtri</a></Link>
        </div>
        <div><p>Ultimo aggiornamento: {props.data}</p></div>
        </>
    );
}
export default ProdottiEQuot;