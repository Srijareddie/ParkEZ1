import { useForm } from "react-hook-form";
import styled from 'styled-components'
const SubscribeForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(watch("example"));
    return(
        <Form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="subscribeEmail">Get the latest News</label>
            <InputWrapper>
                <input type="email" {...register("exampleRequired", { required: true })} placeholder="Email ID" /> 
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit" value="Subscribe"/>
            </InputWrapper>
        </Form>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    label{
        font-size: 18px;
        font-weight: 600;
    }
    
`
const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;

    input[type='email']{
        padding: 11px 28px;
        border-radius: 7px;
        background-color: #ffffff;
    }

    input[type='submit']{
        padding: 11px 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        background-color: #FFFFFF;
        text-transform: uppercase;
        cursor:pointer;
        font-weight: 600;

        &:hover{
            opacity: 0.8;
        }
    }
`

export default SubscribeForm