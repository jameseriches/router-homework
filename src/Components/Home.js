import React from "react"
import newPostForm from './newPostForm'
// import {Header} from "semantic-ui-react"

// import PostsForm from "./PostsForm"

const Home = (props) => {

  const addPost = (postData) => {
    const post = {
      id: Math.random(),
      title: postData.title,
      body: postData.body,
    }

    props.setPosts([post, ...props.posts])
  }

  return (
    <header>
      <h1>Create a Post!</h1>
      <newPostForm add={addPost} />
    </header>
  )
}

export default Home