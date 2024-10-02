import GridRenderer from "@/components/carousel/GridRenderer";

const SearchPage = async ({ params }) => {
  try {
    const baseURL = process.env.NEXT_PUBLIC_CONSUMET_API_URL;
    const response = await fetch(`${baseURL}/meta/anilist/${params?.searchedvalue}`);
    
    if (!response.ok) {
      throw new Error("Failed to fetch search data");
    }

    const searchData = await response.json();

    return (
      <>
        <h1
          style={{
            fontSize: "3rem",
            color: "white",
            marginTop: 80,
            marginLeft: 20,
          }}
        >
          Search Results for <span style={{ color: "yellow" }}>{params?.searchedvalue}</span>
        </h1>
        <GridRenderer finalQuery={searchData?.results} />
      </>
    );
  } catch (error) {
    console.error("Error fetching search data:", error);

    return (
      <h1
        style={{
          fontSize: "3rem",
          color: "white",
          marginTop: 80,
          marginLeft: 20,
        }}
      >
        Failed to load search results for <span style={{ color: "yellow" }}>{params?.searchedvalue}</span>
      </h1>
    );
  }
};

export default SearchPage;
