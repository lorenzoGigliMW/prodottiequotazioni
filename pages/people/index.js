import Link from 'next/link';
export async function getStaticProps() { //getServerSideProps()
    const res = await fetch('url');
    const data = await res.json();
    return {
        props: {
            people: data
        }
    }
}
const AllPeopleIndex = (props) => {
    return (
        <>
            <h1>index di people ....</h1>
            <ul>
                {
                    props.peple.map(person => (//percorso che porta ad una singola persona
                        <li key={person.id}>
                            <Link href={`/people/${person.id}`}><a>{person.name} </a></Link>
                        </li>
                    ))
                }
            </ul>
        </>
    );
}
export default AllPeopleIndex;