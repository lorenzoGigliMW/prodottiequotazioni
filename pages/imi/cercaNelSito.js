const Cerca = () => {
    return (
        <>
            <HeaderPEQ />
            <div className="CercaNelSito">
                <form action="/action.php">
                    <input type="text" name="ricerca" value="inserici dati ricerca" />

                    <input type="submit" value="Submit" />
                </form>
                <h6>Premere INVIO per la ricerca o ESC per uscire</h6>
            </div>
        </>
    );
}
export default Cerca;