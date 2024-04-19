import axios from "axios"
import Footer from "../components/Footer"
import HomePosts from "../components/HomePosts"
import Navbar from "../components/Navbar"
import { URL } from "../url";
import { useEffect } from "react"
import { useState } from "react"
import { useLocation } from "react-router-dom";


const Home = () => {

  const {search} = useLocation()
  // console.log(search)

  const [posts, setPosts] = useState([])
  const [noResults,setNoResults] = useState(false)

const fetchPosts = async () => {
    try {
      const res = await axios(URL+"/api/posts/"+search)
      // console.log(res.data)
      setPosts(res.data)
      if(res.data.length===0){
        setNoResults(true)
      }
      else{
        setNoResults(false)
      }

      setPosts(res.data)
    } catch (err) {
      console.log(err);
    }
}

useEffect(()=>{
  fetchPosts()
},[search])

  return (
    <>
    <Navbar/>
    <div className="px-8 md:px-[200px] min-h-[80vh]">
        {!noResults?posts.map((post)=>(
            <HomePosts key={post._id} post={post}/>
        )):<h3 className="text-center font-bold mt-16">No posts Available</h3>}
    </div>
    <Footer/>
    </>
  )
}

export default Home