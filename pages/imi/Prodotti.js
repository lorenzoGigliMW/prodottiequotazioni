import HeaderPEQ from "../../components/imi/HeaderPEQ";
import NavigazionePag from "../../components/imi/NavigazionePag";
const Prodotti = () => {
    return (
        <>
        <h1>Prodotti ....</h1>
      <HeaderPEQ/>
      <NavigazionePag />
            <ul>
                <li>Tutti</li>
                <li>Certificati di Investimento  &gt;
                    <ul>
                        <table>
                            <tr>
                                <th>A CAPITALE PROTETTO</th>
                                <th>A CAPITALE CONDIZIONATAMENTE PROTETTO</th>
                                <th>A CAPITALE NON PROTETTO</th>
                            </tr>
                            <tr>
                                <td>Equity Protection</td>
                                <td>Bonus</td>
                                <td>Benchmark</td>
                            </tr>
                            <tr>
                                <td>Digital</td>
                                <td>Bonus Cap Barriera Continua End of Day</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Cash Collect Protetto</td>
                                <td>Express</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Twin Win / One Win</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Accelerator</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Digital</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Premium</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Cash Collect</td>
                                <td></td>
                            </tr>
                        </table>
                    </ul>
                </li>
                <li>Prodotti a Leva    &gt;
                    <ul>
                        <li>Certificati Leva Fissa</li>
                        <li>Covered Warrant</li>
                    </ul>
                </li>
                <li>Obbligazioni</li>
            </ul>
        </>
    );
}
export default Prodotti;