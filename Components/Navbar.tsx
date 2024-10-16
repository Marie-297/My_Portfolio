"use client"

import React from "react";
import { ButtonLinks } from "@/app/data";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div>
      {ButtonLinks.map((btnlink, index) => (
        <Button key={index}>{btnlink.label}</Button>
      ))}
    </div>
  );
};

export default Navbar;