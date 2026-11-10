import phone from "../assets/images/phone.webp";
import pan from "../assets/images/pan.webp";
import train from "../assets/images/train.webp";
import music from "../assets/images/music.webp";

const features = [
  {
    icon: phone,
    title: "یادگیری با بازی",
    description:
      "کودکان با انجام بازی‌های جذاب، شماره تلفن والدین را تمرین می‌کنند.",
    color: "turquoise"
  },
  {
    icon: music,
    title: "موسیقی و سرگرمی",
    description:
      "آموزش همراه با موسیقی، صداها و انیمیشن‌های دوست‌داشتنی.",
    color: "yellow"
  },
  {
    icon: pan,
    title: "مهارتی ارزشمند",
    description:
      "کمک به کودکان برای به خاطر سپردن شماره تلفن والدین.",
    color: "pink"
  }
];

function Features() {
  return (
    <section className="features-section" id="features">

      <div className="section-heading">
        <span>دنیایی از یادگیری و شادی</span>
        <h2>چرا این بازی دوست‌داشتنیه؟</h2>
        <p>
          یادگیری یک مهارت مهم می‌تونه خیلی شیرین و سرگرم‌کننده باشه!
        </p>
      </div>

      <div className="features-container">

        {features.map((feature, index) => (
          <div
            className={`feature-card ${feature.color}`}
            key={index}
          >
            <div className="feature-icon">
              <img src={feature.icon} alt="" />
            </div>

            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Features;
