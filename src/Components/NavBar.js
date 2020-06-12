import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <button>
          <NavLink exact activeStyle={{ color:   "blue" }} to="/">
            Home
          </NavLink>
        </button>

        <button>
          <NavLink activeStyle={{ color: "blue" }} to="/ContactUs">
            Contact Us
          </NavLink>
        </button>
        
        <button>
          <NavLink activeStyle={{ color: "blue" }} to="/Posts">
            Posts
          </NavLink>
        </button>

      </div>
    );
  }
}

// export default class NavBar extends Component {
  //   render() {
    //   const [hover, setHover] = useState(false);
//     return (
//       <div 
//         onMouseEnter={() => setHover(true)}
//         onMouseLeave={() => setHover(false)}
//         style={
//           hover
//             ? { ...styles.navBar, ...styles.hover } : styles.navBar
//         }
//       >
//         <button>
//           <NavLink exact to="/">
//            Home
//          </NavLink>
//         </button>

//         <button>
//           <NavLink to="/ContactUs">
//             Contact Us
//           </NavLink>
//         </button>

//         <button>
//           <NavLink to="/Posts">
//             Posts
//           </NavLink>
//         </button>
//       </div>
//     );
//   }
// }

