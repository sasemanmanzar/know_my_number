import gameScreen1 from "../assets/images/game-screen-1.webp";
import gameScreen2 from "../assets/images/game-screen-2.webp";
import gameScreen3 from "../assets/images/game-screen-3.webp";

function Screenshots() {
  const images = [
    gameScreen1,
    gameScreen2,
    gameScreen3
  ];

  return (
    <section className="screenshots-section" id="screenshots">

      <div className="section-heading">
        <span>یک نگاه به دنیای بازی</span>
        <h2>داخل بازی چه خبره؟</h2>
        <p>
          با محیط رنگارنگ و سرگرم‌کننده برنامه آشنا شو.
        </p>
      </div>

      <div className="screenshots-container">

        {images.map((image, index) => (
          <div className="screenshot-card" key={index}>
            <img
              src={image}
              alt={`تصویر شماره ${index + 1} از محیط بازی`}
            />
          </div>
        ))}

      </div>
    </section>
  );
}

export default Screenshots;
