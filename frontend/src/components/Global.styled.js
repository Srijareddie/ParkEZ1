import styled from 'styled-components'

export const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ w }) => w ?? "100px"};
    height: ${({ h }) => h ?? "100px"};

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${({pd}) => pd ?? "7px 15px"};
    border-radius: 10px;
    cursor: pointer;
    &:hover{
        opacity: 0.8;
    }
`

export const HeroSection = styled.section`
    background-image:linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url(${({ image }) => image});
    background-repeat: no-repeat, repeat;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 65px 150px;
    width: 100%;
`

export const CommonSection = styled.section`
    padding: ${({pd}) => pd ?? "50px 100px"};
    display: flex;
    flex-direction: column;
    gap: 40px;
    h2{
        font-size: 1.7rem;
        font-weight: 600;
        text-transform: uppercase;
        color: ${({color}) => color ?? "#0A0C8A"};
        text-align: ${({align}) => align ?? "center"};
    }
`

export const Card = styled.div`
    padding: ${({pd}) => pd ?? "15px 35px"};
    border-radius: 15px;
    box-shadow: 2px 2px 6px 2px #0000001c;
    background-color: #ffffff;
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    label{
        text-transform: capitalize;
        font-weight: 500;
        margin-left: 5px;
    }

    input{
        width: 100%;
        padding: 10px 20px;
        border-radius: 10px;
        box-shadow: 0px 0px 12px 2px #00000024;
    }
    span{
        margin-left: 7px;
        font-size: 0.8rem;
        color: red;
    }
`