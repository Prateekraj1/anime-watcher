import CardShimmer from "@/components/shimmer/CardShimmer";

const MovieLoading = () => {
  return (
    <div className="p-[10px]">
      <div className="flex mt-[100px] gap-[30px] sm:hidden">
        {Array.from({ length: 5 }).map((_, index) => (
          <CardShimmer key={index} />
        ))}
      </div>
      <div className="hidden mt-[100px] gap-[30px] sm:flex">
        {Array.from({ length: 3 }).map((_, index) => (
          <CardShimmer key={index} />
        ))}
      </div>
      <div className="flex mt-[100px] gap-[30px] sm:hidden">
        {Array.from({ length: 5 }).map((_, index) => (
          <CardShimmer key={index} />
        ))}
      </div>
      <div className="hidden mt-[100px] gap-[30px] sm:flex">
        {Array.from({ length: 3 }).map((_, index) => (
          <CardShimmer key={index} />
        ))}
      </div>
      <div className="flex mt-[100px] gap-[30px] sm:hidden">
        {Array.from({ length: 5 }).map((_, index) => (
          <CardShimmer key={index} />
        ))}
      </div>
      <div className="hidden mt-[100px] gap-[30px] sm:flex">
        {Array.from({ length: 3 }).map((_, index) => (
          <CardShimmer key={index} />
        ))}
      </div>
      <div className="flex mt-[100px] gap-[30px] sm:hidden">
        {Array.from({ length: 5 }).map((_, index) => (
          <CardShimmer key={index} />
        ))}
      </div>
      <div className="hidden mt-[100px] gap-[30px] sm:flex">
        {Array.from({ length: 3 }).map((_, index) => (
          <CardShimmer key={index} />
        ))}
      </div>
      <div className="flex mt-[100px] gap-[30px] sm:hidden">
        {Array.from({ length: 5 }).map((_, index) => (
          <CardShimmer key={index} />
        ))}
      </div>
      <div className="hidden mt-[100px] gap-[30px] sm:flex">
        {Array.from({ length: 3 }).map((_, index) => (
          <CardShimmer key={index} />
        ))}
      </div>
      <div className="flex mt-[100px] gap-[30px] sm:hidden">
        {Array.from({ length: 5 }).map((_, index) => (
          <CardShimmer key={index} />
        ))}
      </div>
      <div className="hidden mt-[100px] gap-[30px] sm:flex">
        {Array.from({ length: 3 }).map((_, index) => (
          <CardShimmer key={index} />
        ))}
      </div>
    </div>
  );
};

export default MovieLoading;
