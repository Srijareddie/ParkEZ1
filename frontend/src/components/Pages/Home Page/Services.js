import styled from "styled-components";
import { CommonSection, Card } from "../../Global.styled";

const Services = () => {
    const services = [
        {
            icon: "bi bi-camera-video-fill",
            text: "Automated Parking Lot Management"
        },
        {
            icon: "bi bi-car-front-fill",
            text: "Customer Parking Assistance"
        },
        {
            icon: "bi bi-shop-window",
            text: "Local Advertising Opportunities"
        },
    ]
    return(
        <CommonSection>
            <h2>Services</h2>
            <CardWrapper className="flex-center">
                {services.map(({icon, text}, idx) => (
                    <ServicesCard key={idx} className="flex-center">
                        <div className="left-side">
                            <p>
                            <i className={icon}></i>
                            </p>
                        </div>
                        <div className="right-side">
                            <p>
                                {text}
                            </p>
                        </div>
                    </ServicesCard>
                ))}
        
            </CardWrapper>
        </CommonSection>
    )
}


const CardWrapper = styled.div`
    gap: 30px;
    width: 100%;
    max-width: 1000px;
    align-items: stretch;
    margin: 0px auto;
    flex-wrap: wrap;
`


const ServicesCard = styled(Card)`
    gap: 20px;
    width: calc(100% / 3 - 20px);
    max-width: 600px;
    margin: 0px auto;

    .left-side p i{
        font-size: 4rem;
    }

    .right-side p{
        font-size: 1.3rem;
        text-align: center;
        font-weight: 500;
    }

`

export default Services