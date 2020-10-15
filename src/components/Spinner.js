import React from "react";
import { Spinner } from "reactstrap";

const Spin = () => (
  <div style={{textAlign: 'center'}}>
    <Spinner style={{ width: "3rem", height: "3rem" }} type="grow" />
  </div>
);

export {Spin};