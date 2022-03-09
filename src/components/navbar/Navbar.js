import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2060px-Netflix_2015_logo.svg.png"
            alt=""
          />

          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://yt3.ggpht.com/yti/APfAmoFhU3U61IyLWDV6NxD9h-bwU0f7GwIy-v5oqmbJ=s88-c-k-c0x00ffffff-no-rj-mo"
            alt="vforbmw"
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;