import React, { Component } from "react";

// Stateless Funcitonal Component
// Can't use life cycle hooks here. Use a class instead if you have to use them
const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");

  return (
    <nav className="navbar bg-light">
      <a href="#" className="navbar-brand">
        Number of counters:{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar bg-light">
//         <a href="#" className="navbar-brand">
//           Number of counters:{" "}
//           <span className="badge badge-pill badge-secondary">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

export default NavBar;
