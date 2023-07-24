import { Link } from "react-router-dom";
import { menu } from "../../data/data.js";
import "../menu/menu.scss";

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((value) => (
        <div className="main-title" key={value.id}>
          <div>{value.title}</div>
          {value.listItems.map((value) => (
            <Link to={value.url} className="list-item" key={value.id}>
              <span>{value.icon}</span>
              <span>{value.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
