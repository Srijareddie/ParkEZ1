import { useForm } from "react-hook-form";
import styled from  'styled-components';

const TermsSection = () => {
    const { handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return(
        <TermSection>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <input type="checkbox" id="termsAndCondtion" name="termsAndCondtion"/>
                <label htmlFor="termsAndCondtion">I agree to my personal data being stored and used to receive the newsletter.</label>
            </Form>
            <Line/>
            <p>&copy; Copyright 2023 | ParkEz | All rights reserved</p>
        </TermSection>
    )
}

const TermSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

`
const Line = styled.div`
    width: 100%;
    height: 2px;
    background-color: #ffffff;
`
const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;

    label{
        cursor: pointer;
    }

    input[type='checkbox']{
        width: 15px;
        height: 15px;
    }
`

export default TermsSection