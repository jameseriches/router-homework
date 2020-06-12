// import React from "react"
// import { Form } from "semantic-ui-react"
// import SubmitButton from "./SubmitButton"

// export default class PostsForm extends React.Component {
//   constructor(props) {
//     super(props)
//     this.handleChange.bind(this)
//   }
//         state = { title: "", body: "" }
//         // componentDidMount() {
//         //   if (this.props.id) {
//         //     this.setState({
//         //       title: this.props.title,
//         //       body: this.props.body,
//         //     })
//         //   }
//         // }
//         handleSubmit = (e) => {

//           if (this.props.id) {
//             this.props.edit({ id: this.props.id, ...this.state })
//             // this.props.toggle();
//           } else {
//             this.props.add(this.state)
//           }
//           this.setState({
//             title: "",
//             body: "",
//           })
//         }
//         handleChange = (e) => {
//           this.setState({
//             [e.target.name]: e.target.value,
//           })
//         }

//       render() {
//           return (
//               <Form onSubmit = {this.handleSubmit}>
//               <Form.Group widths="equal">
//               <Form.Input 
//                 placeholder={"Enter Title"}
//                 label={"Title"}
//                 name={"title"}
//                 onChange ={this.handleChange}
//                 value={this.state.title}
//                 />
//               <Form.Input 
//                 placeholder={"Enter Body"}
//                 label={"Body"}
//                 name={"body"}
//                 onChange ={this.handleChange}
//                 value={this.state.body}
//                 />
//                 <SubmitButton />
//                 {/* <Form.Button color ="blue">Submit</Form.Button> */}
//                 </Form.Group>
//                 </Form>
//           );
//         }
// }

