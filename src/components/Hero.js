import heroBear from "../assets/images/hero_bear.png";

function Hero() {
  return (
    <section className="hero-section" id="home">

      <div className="hero-container">

        <div className="hero-content">

          <span className="hero-label">
            ✨ یک بازی شیرین برای کوچولوها
          </span>

          <h1>
            کوچولوها،
            <br />
            آماده‌ی <span>زنگ زدن!</span>
          </h1>

          <p>
            با بازی، موسیقی و سرگرمی،
            شماره تلفن مامان و بابا رو یاد بگیر!
            یادگیری یک مهارت مهم، این‌بار با کلی شادی و بازی.
          </p>

          <div className="hero-buttons">
            <a href="#download" className="primary-button">
              دانلود رایگان برنامه
              <span>↓</span>
            </a>

            <a href="#features" className="secondary-button">
              آشنایی با برنامه
            </a>
          </div>

          <div className="hero-note">
            💛 یادگیری در کنار بازی و سرگرمی
          </div>

        </div>

        <div className="hero-image">

          <div className="hero-circle"></div>

          {/* <img
            src="/images/hero-bear.png"
            alt="شخصیت خرس در بازی من بلدم زنگ بزنم"
          /> */}
          <img src={heroBear} alt="شخصیت خرس در بازی من بلدم زنگ بزنم" />

          <span className="floating-star star-one">✦</span>
          <span className="floating-star star-two">✦</span>
          <span className="floating-heart">♥</span>

        </div>

      </div>
    </section>
  );
}

export default Hero;
