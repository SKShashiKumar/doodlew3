import "./Header";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <div className="container">
    <div className="sideFix">
      <div className="sidebar">
        <a href="#home"> <h4> Close Menu </h4> </a>
        <a href="#news"><h4>Food</h4></a>
        <a href="#contact"><h4>About</h4></a>
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
