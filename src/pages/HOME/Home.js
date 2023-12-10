import FeatureProduct from "../../components/PRODUCTS/FeatureProduct";
import HeroSection from "../../components/HOME/HeroSection";
import Services from "../../components/HOME/Services";
import Trusted from "../../components/HOME/Trusted";
import styled from "styled-components";


const Home = () => {
  const data = {
    name: "sowbi-mart",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

const Wrapper = styled.section`
backgroud-color:${({theme}) => theme.color.bg};
width: 20rem;
height: 20rem;
`;

export default Home;
