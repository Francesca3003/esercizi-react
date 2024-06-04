import { useState } from "react";
import "./Container.css";

function Container({ title, children }) {
  const [collapsed, setCollapsed] = useState(false);

  function handleToggleCollapse() {
    setCollapsed((t) => !t);
  }

  return (
    <div className="container">
      <h2 onClick={handleToggleCollapse} className="title">
        {title}
      </h2>
      {!collapsed && <div className="content">{children}</div>}
    </div>
  );
}
export default Container;
