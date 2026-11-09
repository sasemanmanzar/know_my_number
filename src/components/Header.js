import appIcon from "../assets/images/app-icon.png";

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">

        <a href="#home" className="brand">
          <img
            src={appIcon}
            alt="آیکون من بلدم زنگ بزنم"
          />
          <span>من بلدم زنگ بزنم!</span>
        </a>

        <nav className="main-nav">
          <a href="#home">خانه</a>
          <a href="#features">امکانات</a>
          <a href="#screenshots">محیط بازی</a>
          <a href="#privacy">حریم خصوصی</a>
        </nav>

        <a href="#download" className="header-download">
          دانلود برنامه
          <span>↓</span>
        </a>

      </div>
    </header>
  );
}

export default Header;
