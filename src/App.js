import "./App.css";
import Button from "./Button";
import logo from "./assets/logo.svg";
function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo"/>
      <div className="title">
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
          <a href="tel: 02165508824">

          تماس با دفترخانه
          </a>
          </Button>
        <Button>
          <a href="https://www.instagram.com/daftarkhoone14/">اینستاگرام</a>
        </Button>
    </div>
  );
}

export default App;
