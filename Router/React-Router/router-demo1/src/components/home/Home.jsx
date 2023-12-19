import {Link} from "react-router-dom";

const Home = ()=> (
    <>
        <h1>home page</h1>
        <Link to="/about">/about</Link>
        <Link to="about">about</Link>
        <Link to="/nest">nest</Link>


    </>
)

export default Home;
