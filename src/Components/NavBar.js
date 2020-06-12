import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <NavLink exact activeStyle={{ color: "blue" }} to="/">
          Home
        </NavLink>
        <NavLink activeStyle={{ color: "blue" }} to="/ContactUs">
          Contact Us
        </NavLink>
        <NavLink activeStyle={{ color: "blue" }} to="/Posts">
          Posts
        </NavLink>
      </div>
    );
  }
}

// export default class NavBar extends Component {
//   const [hover, setHover] = useState(false);
//   render() {
//     return (
//       <div 
//         onMouseEnter={() => setHover(true)}
//         onMouseLeave={() => setHover(false)}
//         style={
//           hover
//             ? { ...styles.navBar, ...styles.hover } : styles.navBar
//         }
//       >
//         <NavLink exact to="/">
//           Home
//         </NavLink>
//         <NavLink to="/ContactUs">
//           Contact Us
//         </NavLink>
//         <NavLink to="/Posts">
//           Posts
//         </NavLink>
//       </div>
//     );
//   }
// }

