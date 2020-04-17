import React from "react";
import Logo from "../imgs/hululogo.png";
import Dropdown from "../components/huluDropdown.js";

export default function huluPage() {
  return (
    <div>
      <img className="hulu-img" src ={Logo} alt="Logo"/>
      <Dropdown></Dropdown>
      <Dropdown></Dropdown>
    </div>
  );
}
