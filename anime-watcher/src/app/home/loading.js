import CardShimmer from "@/components/shimmer/CardShimmer";
import BannerShimmer from "@/components/shimmer/home/BannerShimmer";
import UpcommingCardShimmer from "@/components/shimmer/home/UpcommingCardShimmer";

const HomeLoading = () => {
  return (
    <div className="p-[10px]">
      <BannerShimmer />
      <div className="flex mt-[100px] gap-[30px]">
        {Array.from({ length: 3 }).map((_, index) => (
          <UpcommingCardShimmer key={index} />
        ))}
      </div>
      <div className="flex mt-[100px] gap-[30px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <CardShimmer key={index} />
        ))}
      </div>
      <div className="flex mt-[100px] gap-[30px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <CardShimmer key={index} />
        ))}
      </div>
    </div>
  );
};

export default HomeLoading;
