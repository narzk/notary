import Button from "./Button";
import logo from "./assets/logo.svg";
import React, { useState } from "react";
import Moon from "./assets/Moon";
import Sun from "./assets/Sun";

export default function Main() {
  const [light, setLight] = useState(false);
  const toggleLight = () => setLight(!light);
  return (
    <div
      className="App"
      style={{ backgroundColor: `${light ? "#1A237C" : "#0FAEDC"}` }}
    >
      <button className="light-button" onClick={toggleLight}>{light?<Moon/>:<Sun/>}</button>
      <img src={logo} alt="logo" />
      <div className="title">
        <span>دفترخانه</span>
        <span>۱۴</span>
        <span>شهریار</span>
      </div>
      <Button>
        <a href="https://wa.me/989336024742">آپلود مدارک</a>
      </Button>
      <Button>
        <a href="https://goo.gl/maps/zZhNEwQkDBvzUCmy9">به طرف دفترخانه</a>
      </Button>
      <Button>
        <a href="tel: 02165508824">تماس با دفترخانه</a>
      </Button>
      <Button>
        <a href="https://www.instagram.com/daftarkhoone14/">اینستاگرام</a>
      </Button>
    </div>
  );
}
