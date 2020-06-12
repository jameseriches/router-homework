import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Segment, Header, Button, Icon } from "semantic-ui-react";
import PostsForm from "./PostsForm";

const Posts = (props) => {
  const [editing, setEditing] = useState(false)

  const toggleEdit = () => setEditing(!editing)
  // toggleEdit = () => this.setState({ editing: !this.state.editing });

    return (
      <Segment
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {editing ? (
          <PostsForm
            {...props}
            edit={props.edit}
            toggle={toggleEdit}
          />
        ) : (
          <>
            <Header as="h3">{props.title}</Header>
            <p>{props.body}</p>
          </>
        )}
        {/* <div>
          <Button icon color="Green" onClick={toggleEdit}>
            <Icon name="pencil" />
          </Button>
          <Button icon color="yellow">
            <Icon name="trash" />
          </Button>
          <Link
            to={{
              pathname: `/home/${props.id}`,
              state: {
                key1: "data", 
                title: props.title,
                body: props.body,
              },
            }}
          >
          </Link> */}
        {/* </div> */}
      </Segment>
    );
}

export default Posts;

// {props.posts.map((post) => <Posts key={post.id} {...post} />)}