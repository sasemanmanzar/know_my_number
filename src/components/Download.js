import download from "../assets/images/download.svg";

function Download() {
  return (
    <section className="download-section" id="download">

      <div className="download-container">

        <span>💞 وقت بازی و یادگیریه!</span>

        <h2>
          کوچولوت رو برای یک ماجراجویی
          <br />
          شیرین آماده کن!
        </h2>

        <p>
          همین حالا برنامه رو دریافت کن.
        </p>

        {/* <div className="download-buttons">

          <a href="#" className="store-button">
            دانلود از کافه‌بازار
          </a>

          <a href="#" className="store-button">
            دانلود از مایکت
          </a>

          <a href="/app.apk" className="direct-download-button" download>
            دانلود مستقیم
          </a>

        </div> */}

        <div className="download-buttons">

          <div className="store-buttons">
            <a href="https://cafebazaar.ir/app/com.asemanmanzar.memorizingphonenumbers" className="store-button">
              دانلود از کافه‌بازار
            </a>

            <a href="https://myket.ir/app/com.asemanmanzar.memorizingphonenumbers" className="store-button">
              دانلود از مایکت
            </a>
          </div>

          {/* <a href="/app.apk" className="direct-download-button" download>
            دانلود مستقیم
          </a> */}

          <a href="/app.apk" className="direct-download-button" download>
            <img src={download} alt="" />
            <span>دانلود مستقیم  </span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Download;
