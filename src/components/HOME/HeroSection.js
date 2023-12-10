import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../styles/Button";


const HeroSection = ({ myData }) => {
  const { name } = myData;

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p style={{color:'lightgreen'}} className="intro-data">Welcome to </p>
            <h1 style={{color:'green'}}> {name} </h1>
            <p style={{color:'purple'}}>
            SOWBI-MART CO Ltd is an Indian e-commerce company headquartered in Madurai.<br/>

             <br/>It provides B2B and customer to customer sales services via its web portal.<br/>

             <br/> The company began in 1996 when Sowbi founded the website SOWBI-MART.com, <br/>

            <br/>a business-to-business portal to connect Indian manufacturers with buyers.<br/>
            </p>
            
            <NavLink to="/products">
              <Button style={{background:'pink',color:'purple',borderRadius:'4px'}}>show now</Button> 
                   </NavLink>
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image">
            <figure>
              <img
                src="images/hero.jpg"
                alt="hero-section-photo"
                className="img-style"
              />
             </figure>
          </div>

    </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`;
  padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }
 
  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;
