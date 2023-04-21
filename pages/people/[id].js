import{useRouter} from 'next/router';
export async function getStaticProps(context) {           //getServerSideProps()
    const res = await fetch('url');
    const data = await res.json();
    const person = people.filter(p=>p.id==context.params.id);
    return {
        props: {
            person //person : person[0]
        }
    }
}

export async function getStaticPaths(context) {          //non servono i path per getServerSideProps
    const res = await fetch('url');
    const people = await res.json();
    const paths =people.map(person=>({
        params:{id: person.id}
    }));

    return {
        paths,
    fallback:false
 
    }
}

export default function Person(props) {
    const router= useRouter();
 return (                                               //Person ID : {props.person.id}
                                                        //<h2>{person.name}</h2>
        <>
            <h1>Person ID : {props.person[0].id}</h1>
            <p>Sei all interno di people id</p>
        </>
    )
}