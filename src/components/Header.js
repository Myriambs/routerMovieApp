import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
const Header = ({ setNameSearch }) => {
  return (
    <header>
      <h1>Should I watch it?</h1>
      <button> <Link   to='/add'    >Add movie ?</Link>  </button>
      
      <form id="form">
        <input
          type="text"
          placeholder="Search"
          id="search"
          className="search"
          onChange={(e) => setNameSearch(e.target.value)}
        />
      </form>
    </header>
  );
};

export default Header;
// /////////////////////////////**** partie challenge 
// import React from "react";
// import "../App.css";

// const Header = ({ setNameSearch }) => {
//   return (
//     <header>
//       <h1>Should I watch it?</h1>
//       <form id="form">
//         <input
//           type="text"
//           placeholder="Search"
//           id="search"
//           className="search"
//           onChange={(e) => setNameSearch(e.target.value)}
//         />
//       </form>
//     </header>
//   );
// };

// export default Header;
