import React from "react";
import { Header } from "semantic-ui-react";
import PostForm from "./PostForm";


class Home extends React.Component {
    //   state = {
    //     posts: [
    //       { id: 1, title: "Cats", body: "Cats or dogs?" },
    //       { id: 2, title: "React", body: "Is awesome" },
    //       { id: 3, title: "PaddleBoarding", body: "super fun" },
    //     ],
    //   };
      addPost = (postData) => {
        const post = { id: `Math.random()`, ...postData };
        // const post =
        // {id: `Math.random()`, title: postData.title, body:postData.body }
        const newPosts = [post, ...this.state.posts];
        this.setState({
          posts: newPosts,
        });
      };
    //   renderPosts() {
    //     return this.state.posts.map((post) => {
    //       // return <Post key={post.id} title={post.title} body={post.body} id={post.id} />;
    //       return <Post key={post.id} {...post} />;
    //     });
    //   }
      render() {
        return (
          <div>
            <Header as="h1">Create a Post!</Header>
            <PostForm add={this.addPost} />
            {/* {* {this.renderPosts()}  */}
            
          </div>
        );
    }
}















export default Home;









// class Blog extends React.Component {
//   state = {
//     posts: [
//       { id: 1, title: "Cats", body: "Cats or dogs?" },
//       { id: 2, title: "React", body: "Is awesome" },
//       { id: 3, title: "PaddleBoarding", body: "super fun" },
//     ],
//   };
//   addPost = (postData) => {
//     const post = { id: `Math.random()`, ...postData };
//     // const post =
//     // {id: `Math.random()`, title: postData.title, body:postData.body }
//     const newPosts = [post, ...this.state.posts];
//     this.setState({
//       posts: newPosts,
//     });
//   };
//   renderPosts() {
//     return this.state.posts.map((post) => {
//       // return <Post key={post.id} title={post.title} body={post.body} id={post.id} />;
//       return <Post key={post.id} {...post} />;
//     });
//   }
//   render() {
//     return (
//       <div>
//         <Header as="h1">Blog</Header>
//         <PostForm add={this.addPost} />
//         {this.renderPosts()}
//       </div>
//     );
//   }
// }
// export default Blog;