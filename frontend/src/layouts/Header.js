import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Global Components/Navbar/Navbar";
import { ImageWrapper } from "../components/Global.styled";
import { Header as StyledHeader } from "../components/Layout.styled";


const Header = () => {
    
    return(
        <StyledHeader>
            <StyledNav className="flex-between">
                <div className="flex-left">
                    <NavLink to="/">
                        <ImageWrapper w="100px" h="auto">
                            <img src={require('../assets/images/logo.png')} alt="logo"/>
                        </ImageWrapper>
                    </NavLink>
                </div>
                <Navbar/>
            </StyledNav>
        </StyledHeader>
    )
}

const StyledNav = styled.nav`
    gap: 30px;
    display: flex;
    align-items: center;

    ul{
        display: flex;
        align-items: center;
        gap: 12px;
        list-style: none;
        margin:0px;
    }

    ul li {
        cursor:pointer;
    }

    ul li:hover{
        background-color: #e0dede73;
    }

    ul li > a{
        text-decoration: none;
        color: #000000;
        font-size: 16px;
        cursor: pointer;
        display: block;
        padding: 15px 10px;
    }

    ul li div a{
        text-decoration: none;
        color: #000000;
        font-size: 16px;
        cursor: pointer;
        display: block;
        text-align: center;
    }
    
    li > .active{
        border-bottom: 2px solid #000000;
    }


    .active{
        color: #030ab2;
    }

    .flex-left{
        display:flex;
        align-items: center;
        gap: 10px;
    }
    
`
export default Header