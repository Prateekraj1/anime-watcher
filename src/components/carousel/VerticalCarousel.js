import AnimeCard from "../cards/AnimeCard";

const VerticalCarousel = ({ finalQuery, sectionTitle }) => {
  return (
    <div className="vertical-grid-container">
      <h1 className="row-title ml-[1%] text-[#D8D8D8]">
        {sectionTitle}
      </h1>
      <div className="vertical-grid">
        {finalQuery.map((query, index) => (
          <div key={query.id || index} className="text-center">
            <AnimeCard
              image={query.image}
              id={query.id}
              sectionTitle={sectionTitle}
            />
            <p className="text-white mt-1">
              {query.title.english ?? query.title.romaji}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalCarousel;
