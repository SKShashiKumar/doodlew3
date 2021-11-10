import "./Header";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <div style={{ position: "fixed" }}>
      <div class="sidebar">
        <a class="active">
        <img src="https://img.icons8.com/ios-filled/20/ffffff/x.png"/> Close
        </a>
        <a href="#news">
        <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/20/0000ff/external-burger-food-kiranshastry-solid-kiranshastry.png"/>
        FOOD
        </a>
        <a href="#contact">
        <img src="https://img.icons8.com/ios-filled/20/0000ff/info.png"/>
        ABOUT</a>
      </div>
    </div>
  );
};

export default Sidebar;
