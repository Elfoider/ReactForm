import React from "react";
import { Icon, Button } from "semantic-ui-react";

import "./TopBar.scss";

export default function TopBar(props) {
  const { setVisible } = props;
  return (
    <div className="top">
      <div className="menu-toggle">
        <Icon
          name="bars"
          circular
          link
          size="large"
          onClick={() => {
            setVisible(true);
          }}
        />
      </div>
      <div className="c-panel">
        <Button icon='user' content='Login de Empleados' />
      </div>
    </div>
  );
}
