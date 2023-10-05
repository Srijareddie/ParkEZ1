import styled from "styled-components";
import SignUpForm from "../components/Pages/SignUp/SignUpForm";
import ImageBlock from "../components/Reusable components/ImageBlock";
const SignUp = () => {
    return(
        <Wrapper className="flex flex-between">
            <div>

                <ImageBlock src={require("../assets/images/SignUp/vector.jpg")} w="100%" h="auto" alt="sign up" />
            </div>
            <div>

                <SignUpForm />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 50px 100px;
    gap: 100px;
    & > *{
        flex: 1 1;
    }
`
export default SignUp