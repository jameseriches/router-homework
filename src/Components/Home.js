import React from "react"
import {Header} from "semantic-ui-react"

import PostsForm from "./PostsForm"

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
    <>
      <Header as="h1">Create a Post!</Header>
      <PostsForm add={addPost} />
    </>
  )
}

export default Home