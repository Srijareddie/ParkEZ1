import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { Card, CommonSection, Button as CommonButton } from "../../Global.styled"
import ImageBlock from "../../Reusable components/ImageBlock"
const Reviews = () => {

    const reviews = [
        {
            avatar: require("../../../assets/images/Home Page/Avatar1.png"),
            name: "Oliver Carter",
            review: "This app is a game-changer! It detects parking lot usage with incredible accuracy and makes identifying overparking in my lot a breeze. Highly recommend it!"
        },
        {
            avatar: require("../../../assets/images/Home Page/Avatar2.png"),
            name: "Maya Patel",
            review: "The ParkEz parking detection app is a lifesaver for finding great spots in parking lots that use it. It tells me the best available spot in seconds."
        },
        {
            avatar: require("../../../assets/images/Home Page/Avatar3.png"),
            name: "Luna Chen",
            review: "I was skeptical at first, but this app exceeded my expectations. It not only detects total available parking spots in my business' parking lot, but also provides access to security footage in the event of an incident. A must-have for any business owner."
        }
    ]
    return(
        <Section>
            <h2>Reviews</h2>
            <ReviewCardWrapper>
                <ul className="flex">
                    {reviews.map(({avatar, name, review}, idx) => (
                        <li key={`${idx}-name`}>
                            <ReviewCard className="flex flex-between">
                                <div className="left-side">
                                    <ImageBlock src={avatar} w="100px" h="100px" alt={name} />
                                </div>
                                <div className="right-side flex">
                                    <h4>{name}</h4>
                                    <p>{review}</p>
                                </div>
                            </ReviewCard>
                        </li>
                    ))}

                </ul>
            </ReviewCardWrapper>

            <Button className="scd-btn" pd={"21px 40px"}> 
                <NavLink to="#">READ MORE</NavLink>
            </Button>
        </Section>
    )
}

const Section = styled(CommonSection)`
    background-color: #2DC28D;

    h2{
        color: #ffffff;
    }

    ul {
        list-style: none;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 50px;
        max-width: 1000px;
        margin: 0px auto;

    }
    ul li:nth-child(odd),
    ul li:nth-child(odd) div{
        margin-right: auto;
    }

    ul li:nth-child(even),
    ul li:nth-child(even) div{
        margin-left: auto;
    }
`


const ReviewCardWrapper = styled.div`

`
const ReviewCard = styled(Card)`
    width: 60%;
    min-width: 600px;
    max-width: 900px;
    gap: 20px;

    .left-side{
        div{
            border-radius: 50%;
            overflow: hidden;
        }
        img{
            border-radius: 50%;
            overflow: hidden;
        }
    }

    .right-side{
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
`

const Button = styled(CommonButton)`
    width: fit-content;
    margin: 0px auto;
    a{
        font-size: 1.1rem;
        font-weight: 700;
    }
`
export default Reviews