import "./Blog.css";
import {Link} from "react-router-dom";
import Searchbar from "../Components/Searchbar";
import Post from "../Pages/Post";


function Blog() {
return (
    <div className="Blog">
            <div className='blog-post'>
                <h1 className = "Title"> TRIVIA BLOGS </h1>
                <Searchbar />
            </div>
            <div className = "create">
                <Link to = "/create" className = "createLink"> Create </Link>
            </div>
            <div className = "post">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />

            </div>
    </div>

   

);

}
export default Blog;
