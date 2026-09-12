export default function ReviewCard({ name, reviewText, stars, avatar }) {
  return (
    <div
      className=" 
   border-accent-primary/50 shadow-sm  hover:border-accent-primary hover:shadow-accent-primary/10 border-2 h-[20vh] w-full rounded-md overflow-hidden bg-bg-surface flex justify-between flex-col p-4 gap-2 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-xl ease-in-out"
    >
      <div className="flex flex-row justify-between ">
        <div className="flex flex-row gap-4">
          <div className="bg-accent-primary p-1 rounded-full">
            <img
              src={avatar}
              alt={name}
              width={48}
              height={48}
              className=" rounded-full"
            />
          </div>

          <p className="flex justify-center items-center text-xl">{name}</p>
        </div>

        <div className="flex justify-center items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <span className="text-accent-primary" key={star}>
              {star <= stars ? "★" : "☆"}
            </span>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm">{reviewText}</p>{" "}
      </div>
    </div>
  );
}
