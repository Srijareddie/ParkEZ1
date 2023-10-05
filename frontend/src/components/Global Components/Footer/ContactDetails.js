import { NavLink } from "react-router-dom"
import styled from 'styled-components'

const ContactDetails = () => {
    return(
        <ContactDetailsWrapper>
            <h6>Contact & Headquarters</h6>
            <NavLink to="#" onClick={(e) => window.location.href='mailto:info@parkez.com'}>
                info@parkez.com
            </NavLink>
            <NavLink to="#" onClick={(e) => window.location.href='tel:+13473224419'}>
                +1 (347)-322-4419
            </NavLink>
            <p>Pace University</p>
            <div className="flex-right">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-whatsapp"></i>
            </div>
        </ContactDetailsWrapper>
    )
}

const ContactDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    a{
        color: #ffffff;
    }

    div.flex-right{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 15px;
    }

    div.flex-right i{
        display: block;
        font-size: 22px;
        cursor: pointer;

        &:hover{
            opacity: 0.7;
        }
    }
`

export default ContactDetails