import { useSearchParams } from "react-router-dom";

function Home() {
    const [searchParams] = useSearchParams();
    console.log(searchParams);
    return (
        <>
            <h1>Aqui irá o searchParam</h1>
        </>
    )
}

export default Home;