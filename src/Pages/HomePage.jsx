import { Link } from "react-router-dom";

const HomePage=()=>{
    return <div className="main-parent">
        <ul>
            <li><Link to="/fake_api">Fake Api with Pagination</Link> </li>
            <li><Link to="/fake_api_scroll">Fake Api with Scroll</Link> </li>
            <li><Link to="/todo">To DO App with search and pagination</Link> </li>
            <li><Link to="/parent_child">Parent Child CallBack</Link> </li>
        </ul>
    </div>
}
export default HomePage;