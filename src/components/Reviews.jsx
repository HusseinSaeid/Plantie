import MarqueeImport from "react-fast-marquee";
import ReviewCard from "./ui/ReviewCard";
const Marquee = MarqueeImport.default ?? MarqueeImport;
import avatar from "../assets/Avatar.webp";

export default function Review() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Jenkins",
      reviewText:
        "The formula exceeded my expectations! Super deep moisture and beautiful packaging.",
      stars: 5,
      avatar: avatar,
    },
    {
      id: 2,
      name: "Marcus Chen",
      reviewText:
        "Clean fresh formula and great smoothness. Took a bit extra to absorb, but totally worth it.",
      stars: 4,
      avatar: avatar,
    },
    {
      id: 3,
      name: "Elena Rostova",
      reviewText:
        "Absolutely love the bottle! Customer support was also super helpful when I had questions.",
      stars: 5,
      avatar: avatar,
    },
    {
      id: 4,
      name: "David Miller",
      reviewText:
        "Decent shampoo for the price point. Works as advertised, though usage instructions could be clearer.",
      stars: 3,
      avatar: avatar,
    },
    {
      id: 5,
      name: "Aisha Patel",
      reviewText:
        "Hands down the best skincare I've used this year. Will definitely order again!",
      stars: 5,
      avatar: avatar,
    },
    {
      id: 6,
      name: "Liam O'Connor",
      reviewText:
        "Sleek and easy to use right out of the jar. Highly recommended to anyone on the fence.",
      stars: 5,
      avatar: avatar,
    },
    {
      id: 7,
      name: "Sofia Rodriguez",
      reviewText:
        "Good overall value, though the scent was slightly richer in person than on photos.",
      stars: 4,
      avatar: avatar,
    },
    {
      id: 8,
      name: "James Wilson",
      reviewText:
        "Balm arrived slightly damaged, but support sent a free replacement within 24 hours. Impressed!",
      stars: 4,
      avatar: avatar,
    },
    {
      id: 9,
      name: "Amara Nwosu",
      reviewText:
        "Flawless nourishment and herbal cleansing. Couldn't ask for better quality.",
      stars: 5,
      avatar: avatar,
    },
    {
      id: 10,
      name: "Lucas Dubois",
      reviewText:
        "Average experience overall. It does the job, but shipping took much longer than promised.",
      stars: 3,
      avatar: avatar,
    },
  ];
  return (
    <section
      id="reviews"
      style={{
        minHeight: "90vh",
        width: "100%",
      }}
      className="py-15"
    >
      <div className="flex justify-center items-center">
        <h2>What They Said About Us</h2>
      </div>
      <Marquee
        autofill={true}
        speed={50}
        gradient={true}
        pauseOnHover={true}
        pauseOnClick={true}
        gradientColor={"#121212"}
      >
        {reviews.slice(0, 5).map((review) => (
          <div key={review.id} className="w-[50vh] shrink-0 mx-6 mt-23 py-8">
            <ReviewCard
              name={review.name}
              reviewText={review.reviewText}
              stars={review.stars}
              avatar={review.avatar}
            />
          </div>
        ))}
      </Marquee>
      <Marquee
        autofill={true}
        speed={50}
        gradient={true}
        pauseOnHover={true}
        pauseOnClick={true}
        direction={"right"}
        gradientColor={"#121212"}
      >
        {reviews.slice(-5).map((review) => (
          <div key={review.id} className="w-[50vh] shrink-0 over mx-6 mt-16">
            <ReviewCard
              name={review.name}
              reviewText={review.reviewText}
              stars={review.stars}
              avatar={review.avatar}
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
