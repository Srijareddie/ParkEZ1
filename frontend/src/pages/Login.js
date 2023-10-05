import styled from "styled-components";
import LoginForm from "../components/Pages/Login/LoginForm";


const Login = () => {
    return(
        <Wrapper className="flex-center">
            <LoginForm />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 150px;
`

export default Login