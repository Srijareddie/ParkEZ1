import styled from "styled-components";
import ContactUs from "../components/Pages/Contact/ContactUs"

const Contact = () => {
    return(
        <>
        <Wrapper className="flex-center"> 
            <ContactUs />
        </Wrapper> 
            
        </>
    )
}

 const Wrapper = styled.div`
    padding: 150px;
`
export default Contact
