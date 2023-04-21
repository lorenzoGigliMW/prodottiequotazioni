import Link from 'next/link';

export default function NavigazionePag() {
    return (
        <div>
            <div className="NavigazionePagine">
                <nav>
                    <ul>
                        <li><Link href="/home"><a>Prodotti</a></Link></li>
                        <li><Link href="/chisiamo"><a>News e Formazione</a></Link></li>
                        <li><Link href="/news"><a>Studi e Ricerche</a></Link></li>
                        <li><Link href="/contatti"><a>Documentazione</a></Link></li>
                        <li><Link href="/cerca"><a>Cerca nel sito</a></Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}