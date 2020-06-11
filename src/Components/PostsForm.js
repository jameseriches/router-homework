import React from "react"
import { Form } from "semantic-ui-react"

export default class PostsForm extends React.Component {
  state = { title: "", body: "" }
  componentDidMount() {
    if (this.props.id) {
      this.setState({
        title: this.props.title,
        body: this.props.body,
      })
    }
  }
  handleSubmit = (e) => {
    if (this.props.id) {
      this.props.edit({ id: this.props.id, ...this.state })
      this.props.toggle();
    } else {
      this.props.add(this.state)
    }
    this.setState({
      title: "",
      body: "",
    })
  }
  handleChange = (e) => {
    this.setState({
      [e.tartget.name]: e.target.value,
    })
  }

render() {
    return (
        <Form onSubmit = {this.handleSubmit}>
        <Form.Group widths="equal">
        <Form.Input 
          placeholder={"Enter Title"}
          label={"title"}
          name={"title"}
          onChannge ={this.handleChange}
          value={this.state.title}
          />
         <Form.Input 
          placeholder={"Enter Body"}
          label={"Body"}
          name={"Body"}
          onChannge ={this.handleChange}
          value={this.state.title}
          />

          <Form.Button color ="blue"></Form.Button>
          </Form.Group>
          </Form>
    );
}

}

