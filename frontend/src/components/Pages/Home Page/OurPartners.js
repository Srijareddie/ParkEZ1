import { Card, CommonSection } from "../../Global.styled"
import styled from "styled-components"
import ImageBlock from "../../Reusable components/ImageBlock"
const OurPartners = () => {
    const brands = [
        {
            brand_image: require("../../../assets/images/Home Page/dunkin.png")
        },
        {
            brand_image: require("../../../assets/images/Home Page/mcdonalds.png")
        },
        {
            brand_image: require("../../../assets/images/Home Page/walmart.png")
        },
        {
            brand_image: require("../../../assets/images/Home Page/starbucks.png")
        }
    ]
    return(
        <CommonSection>
            <h2>Our Partners</h2>

            <BrandCard>
                {brands.map(({brand_image}, idx) => (
                    <Card key={idx}>
                        <ImageBlock src={brand_image} w="80px" h="80px" />  
                    </Card>
                ))}
                
            </BrandCard>
        </CommonSection>
    )
}

const BrandCard = styled.div`
    display: grid;
    grid-template-columns: repeat(4, min-content);
    align-items: stretch;
    justify-content: center;
    gap: 30px;
`


export default OurPartners