import React, { useState, useEffect, useRef } from "react";
import "../Css/page/posts/posts.css";
import hills from '../Image/img/post/hills.png'
import { Link, useNavigate } from "react-router-dom";
import postsData from "../test-data/postsData";
import PostItem from "../Components/Posts/PostItem";
import tabina from '../Image/tabina.png'
import axios from "axios";

const Posts = () => {
  
  const [loadedData, setLoadedData] = useState([]);

  const navigate = useNavigate();

  const navigateUpload = () => {
    navigate('/upload');
  }

  useEffect(() => {
    axios.get('https://damp-anchorage-45936.herokuapp.com/api/posts',{
      withCredentials: true
    }).then(response => {
      const posts = response.data.posts;
      console.log(posts);
      setLoadedData([...posts]);
    }).catch(err => {
      console.log(err);
    });
  }, [])
  console.log(loadedData);
  return (
    <>
    <div className="posts">
        <div className="posts-header">
            <img src={hills} className="posts-header-background" />
            <div className="posts-header-nav">
                <Link className="posts-header-nav-link">Posts</Link>
                <Link className="posts-header-nav-link">My Posts</Link>
                <div className="posts-header-nav-link-button">
                  <button className="posts-header-nav-button" onClick={navigateUpload}>Upload</button>
                </div>
                
            </div>
        </div>
        <div className="posts-body">
            <div className="posts-body-content">
              {loadedData.map((post) => (
                <div key={post._id}>
                  <PostItem post={post} />
                </div>
              ))}
            </div>
            <div className="posts-body-ad">
              <img src={tabina}  className='nav-logo'/>
              <span className="posts-body-ad-title">Join our community on platforms</span>
              <span className="posts-body-ad-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam alias dolorum nesciunt doloribus. A eos, minima repellendus error dicta consequuntur fugiat temporibus nisi saepe et vel amet porro, alias delectus!</span>
              <button className='nav-link'>Join Now</button>
            </div>
        </div>
    </div>
    </>
  );
};

export default Posts;