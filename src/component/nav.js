import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [text, setText] = useState([]);

  const mainNav = [
    {
      display: "Exam",
      path: "/exam",
    },
    {
      display: "Home",
      path: "/home/2",
    },
  ];

  return (
    <div>
      <form>
        <button>
          <NavLink className={"button"} to="/exam">
            Exam
          </NavLink>
        </button>
        <input 
          type="checkbox" checked={checked}  onChange={
            ()=>{
                if(checked){
                    setText('')
                }
                setChecked(!checked)
            }
          } />
        <input type="text" disabled={checked}  value={text}  onChange={e => setText(e.target.value)}/>
        <button
          onClick={() => {
            navigate("/home");
          }}
        >
          CLick me
        </button>
        <ul className="menu">
          {mainNav.map((item, index) => (
            <li key={index} className="header-menu-left">
              <NavLink to={item.path}>
                <span>{item.display}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </form>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {mainNav.map((item, index) => (
            <tr key={index}>
              <td>Alfreds Futterkiste</td>
              <td>
                <NavLink to={item.path}>
                  <span>{item.display}</span>
                </NavLink>
              </td>
              <td>Germany</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Nav;
