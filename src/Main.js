import Button from "./Button";
import logo from "./assets/logo.svg";
import React, { useState } from "react";
import Moon from "./assets/Moon";
import Sun from "./assets/Sun";

export default function Main() {
  const [light, setLight] = useState(true);
  const toggleLight = () => setLight(!light);
  return (
    <div
      className="App"
      style={{ backgroundColor: `${light ? "#1A237C" : "#0FAEDC"}` }}
    >
      <button className="light-button" onClick={toggleLight}>
        {light ? <Moon /> : <Sun />}
      </button>
      <img src={logo} alt="logo" />
      <div className="title">
        <span>دفترخانه</span>
        <span>۱۴</span>
        <span>شهریار</span>
      </div>
      <Button link="https://wa.me/989336024742" title="آپلود مدارک" />

      <Button
        link="https://goo.gl/maps/zZhNEwQkDBvzUCmy9"
        title="به طرف دفترخانه"
      />

      <Button link="tel: 02165508824" title="تماس با دفترخانه " />

      <Button
        link="https://www.instagram.com/daftarkhoone14/"
        title="اینستاگرام"
      />
    </div>
  );
}
