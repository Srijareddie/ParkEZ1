import ContactDetails from "../components/Global Components/Footer/ContactDetails";
import SubscribeForm from "../components/Global Components/Footer/SubscribeForm";
import TermsSection from "../components/Global Components/Footer/TermsSection";
import { Footer as StyledFooter } from "../components/Layout.styled";
import styled from "styled-components"
import { NavLink } from "react-router-dom";

const Footer = () => {
    return(
        <StyledFooter>
            <SecondaryWrapper>
                <FooterWrapper>
                    <LeftSide>
                        <NavLink to="/">
                            ParkEz
                        </NavLink>
                        <SubscribeForm/>
                    </LeftSide>
                    <ContactDetails/>
                </FooterWrapper>
                <TermsSection />
            </SecondaryWrapper>
        </StyledFooter>
    )
}

const SecondaryWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
    margin: 0px auto;
`

const FooterWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`
const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;

    a{
        color: #ffffff;
        text-decoration: none;
        cursor: pointer;
        font-size: 32px;
        font-weight: 600;
    }
`
export default Footer