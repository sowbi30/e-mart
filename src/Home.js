import FeatureProduct from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
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
