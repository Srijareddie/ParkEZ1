import {Button as CommonButton, HeroSection as CommonSection} from "../../Global.styled";
import { NavLink } from "react-router-dom"
import styled from "styled-components";

const HeroSection = () => {
    return(
        <Section image={require("../../../assets/images/Home Page/Home-Hero-Section.png")}>
            <div>
                <h1>Automated Parking Lot Management Made Easy</h1>
                <p>
                    Increase revenue for your business by using AI to find customers parking spaces and catch and tow non-patron overparkers illegally using your parking lot.

                    Are you a nearby business? Advertise with us and connect with nearby future customers using our App to find parking spaces.
                </p>
                <Button className="scd-btn" pd={"21px 40px"}> 
                    <NavLink to="#">LEARN MORE</NavLink>
                </Button>
            </div>
        </Section>
    )
}

const Section = styled(CommonSection)`
    div{
        width: 80%;
        min-width: 700px;
        max-width: 900px;

    }
    h1{
        color: #ffffff;
        font-size: 1.9rem;
        margin-bottom: 20px;
    }

    p{
        color: #ffffff;
        font-size: 1.2rem;
        margin-bottom: 40px;
    }
`

const Button = styled(CommonButton)`
    a{
        font-size: 1.1rem;
        font-weight: 700;
    }
`
export default HeroSection;