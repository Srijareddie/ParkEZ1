import { Card, CommonSection } from "../../Global.styled";
import styled from "styled-components"
import ImageBlock from "../../Reusable components/ImageBlock";

const KeyProperties = () => {

    const properties_1 = [
        {
            icon: "bi bi-ui-checks-grid",
            text: "Accuracy",
        },
        {
            icon:"bi bi-ui-checks-grid",
            text: "Reliability",
        },
        {
            icon:"bi bi-ui-checks-grid",
            text: "Speed",
        },
        {
            icon:"bi bi-ui-checks-grid",
            text: "Compatibility",
        },
    ]

    const properties_2 = [
        {
            icon: "bi bi-ui-checks-grid",
            text: "Easy installation",
        },
        {
            icon:"bi bi-ui-checks-grid",
            text: "Low Maintenance",
        },
        {
            icon:"bi bi-ui-checks-grid",
            text: "Energy efficiency",
        },
        {
            icon:"bi bi-ui-checks-grid",
            text: "Integration",
        },
    ]
    return(
        <Section>
            <h2>Key Properties</h2>
            <PropertiesMainWrapper className="flex-center">
                <PropertiesWrapper>
                    {properties_1.map(({icon, text}, idx) => (

                        <PropertiesCard key={`${idx}-text`} className="flex-center">
                            <i className={icon}></i>
                            <p>{text}</p>
                        </PropertiesCard>
                    ))}

                </PropertiesWrapper>

                
                <CarTextImageWrapper className="flex-center">
                    <ImageBlock src={require("../../../assets/images/Home Page/properties_car.png")} alt="car-navigation" w={"220px"} h={"220px"}/>
                    <h3>ParkEz</h3>
                </CarTextImageWrapper>

                <PropertiesWrapper>
                {properties_2.map(({icon="bi bi-ui-checks-grid", text}, idx) => (

                    <PropertiesCard key={`${idx}-text`} className="flex-center">
                        <i className={icon}></i>
                        <p>{text}</p>
                    </PropertiesCard>
                ))}
                </PropertiesWrapper>
            </PropertiesMainWrapper>
        </Section>
    )
}

const Section = styled(CommonSection)`
    background: #1A1BE5;

    h2{
        color: #ffffff;
    }
`

const PropertiesMainWrapper = styled.div`
    gap: 40px;
`

const PropertiesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 30%;
`

const PropertiesCard = styled(Card)`
    justify-content: flex-start;
    width: 100%;
    gap: 10px;
    i{
        font-size: 3rem;
    }

    p{
        font-size: 1.5rem;
    }
`

const CarTextImageWrapper = styled(Card)`
    flex-direction: column;
    gap: 40px;
    h3{
        font-size: 1.6rem;
        text-align: center;
    }
`
export default KeyProperties;