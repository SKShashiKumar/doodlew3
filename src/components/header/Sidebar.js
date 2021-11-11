import "./Header";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <div className="sideFix">
      <div className="sidebar">
        <a className="active" href="#home">
          <img src="https://img.icons8.com/ios-filled/20/ffffff/x.png" alt="closeIcon"/> Close
        </a>
        <a href="#news">
          <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/20/0000ff/external-burger-food-kiranshastry-solid-kiranshastry.png" alt="FoodIcon"/>
          FOOD
        </a>
        <a href="#contact">
          <img src="https://img.icons8.com/ios-filled/20/0000ff/info.png" alt="AboutIcon"/>
          ABOUT
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
