import React from "react";
import { Link } from "react-router-dom";
import Prototypes from "prop-types";

function ReferInfo({ id, title, desc, category, property }) {
  return (
    <li>
      <Link
        to={{
          pathname: "refer-detail",
          state: { id, title, desc, category, property },
        }}
      >
        <span className="alpha">{id}</span>
        <span className="attr">{title}</span>
        <span className="desc">{desc}</span>
      </Link>
    </li>
  );
}

ReferInfo.prototype = {
  id: Prototypes.number.isRequired,
  title: Prototypes.number.isRequired,
  desc: Prototypes.number.isRequired,
};

export default ReferInfo;
