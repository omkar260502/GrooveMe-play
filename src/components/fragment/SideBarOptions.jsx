import React, { useRef } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function SideBarOptions(props) {
  const Icon = props.Icon;
  const title = props.title;
  const className = props.className;
  const sideBarRef = useRef();
  const href = props.href;

  return (
    <Button
      onClick={() => {
        window.location.href = href;
      }}
      className={className}
      startIcon={Icon && <Icon />}
    >
      <Link ref={sideBarRef} to="#" />
      {title}
    </Button>
  );
}

export default SideBarOptions;
