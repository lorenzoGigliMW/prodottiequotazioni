import Link from 'next/link';
import Image from 'next/image'

export default function Nav() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link href="/home"><a>IMI CORPORATE & INVESTMENT BANKING</a></Link></li>
                    <li><Link href="/chisiamo"><a>CHI SIAMO</a></Link></li>
                    <li><Link href="/news"><a>NEWS</a></Link></li>
                    <li><Link href="/contatti"><a>CONTATTI</a></Link></li>
                    <li><Image
                        src="nomeimmagine.png"
                        alt="cornetta"   //fill
                        width={100}      // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw" 
                        height={100}
                    /></li>
                    <li><Link href="/numero"><a>800.303.303</a></Link></li>
                </ul>
            </nav><hr />
            <div>

                <Image
                    src="imi.png"
                    alt="cornetta"   //fill
                    width={300}      // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw" 
                    height={300}
                />

                <Image
                    src="intesasanpaolo.png"
                    alt="intesaSP"   //fill
                    width={300}      // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw" 
                    height={300}
                />
            </div>
            <hr />
            <div>
                <Image
                    src="grafico.png"
                    alt="grafico"   //fill
                    width={100}      // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw" 
                    height={100}
                />
                <h2>Prodotti e Quotazioni</h2>
            </div>

            {/* <div className="NavigazionePagine">
<nav>
    <ul>
        <li><Link href="/home"><a>Prodotti</a></Link></li>
        <li><Link href="/chisiamo"><a>News e Formazione</a></Link></li>
        <li><Link href="/news"><a>Studi e Ricerche</a></Link></li>
        <li><Link href="/contatti"><a>Documentazione</a></Link></li>
        <li><Link href="/cerca"><a>Cerca nel sito</a></Link></li>
    </ul>
</nav>
</div> */}
        </div>
    );
}