import { useContext } from "react";
import { IoIosSunny, IoIosMoon } from "react-icons/io";
import { themeContext } from "../../Context.jsx";

export const Toggle = () => {
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkmode;

  const callback = () => {
    theme.dispatch({type : "TOGGLE"})
  };

  return (
    <label className="toggle-switch">
      <input type="checkbox" defaultChecked={darkmode} onClick={callback} />
      <span>
        <IoIosMoon size={30} color="white" />
        <IoIosSunny size={30} color="white" />
      </span>
    </label>
  );
};
