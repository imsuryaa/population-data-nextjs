import axios from "axios";
import PopulationData from "./components/PopulationData";
import SEO from "./components/SEO";

const Population = ({ populationData }) => {
  return (
    <>
      <SEO
        pageTitle="Population Data"
        pageDescription="Get the insights about population around the world"
      />
      <PopulationData populationData={populationData} />
    </>
  );
};

export async function getServerSideProps() {
  try {
    const response = await axios.get(
      "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
    );

    const populationData = response.data.data;

    return {
      props: {
        populationData,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        populationData: [], // Return empty array in case of error
      },
    };
  }
}

export default Population;
