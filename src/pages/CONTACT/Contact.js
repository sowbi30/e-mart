import styled from "styled-components";
import Marquee from "react-fast-marquee";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .slide img{
      width: 10rem;
      margin: 0 20px;
      gap: 2px;
    }

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>

      
<div className="col-12 p-3">
            <Marquee className='p-2 slide'>
              <div>
              <img src="./icons/icon1.png" alt="my logo img" /> 
                <p className="card-text mb-2">Fast Orders</p>
              </div>
              <div>
              <img src="./icons/icon2.png" alt="my logo img" /> 
                <p className="card-text mb-2">Quick Shipping</p>

              </div>
              <div>
              <img src="./icons/icon3.png" alt="my logo img" /> 
                <p className="card-text mb-2">High Saves</p>
              </div>
              <div>
              <img src="./icons/icon4.png" alt="my logo img" /> 
                <p className="card-text">24/7 Support</p>
              </div>
              <div>
              <img src="./icons/icon5.png" alt="my logo img" /> 
                <p className="card-text">Online Orders</p>
              </div>
            </Marquee>
          </div>


      <div className="container" style={{background:'lavender',border:'1px solid purple'}}>
      <div className="grid">
        
      <p><span style={{fontSize:'25px',fontWeight:'bold'}}>Contact Us Here </span><br />
      Address: Sowbi-Mart,Madurai,Tamilnadu <br/>
      Phone: Call us at +91-000-000-0000<br />
      8 A.M to 6 P.M </p>
      </div>
      <br />
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125766.19577315214!2d78.04042158065874!3d9.917826796721695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7264f63933!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1701529316448!5m2!1sen!2sin" 
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

      <div className="container" style={{background:'lavender',border:'1px solid purple',paaddingTop:'5px'}}>
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xzbllqjw"  // makes formspree pacakege to store the user data and will get tthe mail info too
            method="POST"
            className="contact-inputs">
              <p style={{fontSize:'25px', fontWeight:'bold', textDecoration:'underline'}}> Share Your Thoughts</p>

            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
              style={{paddingTop:'2px'}}
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"></textarea>

            <input type="submit" style={{background:'purple',display:'flex'}}value="send" />
          </form>
          </div>

      </div>
    </Wrapper>
  );
};

export default Contact;
