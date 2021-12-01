import React, { useState } from "react";
import styled from "styled-components";

const SignIn = () => {
    const [data, setData] = useState({});

    const handleData = (e) => {
        console.log("e:", e);
        const { value, name } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("user Added");
        setData({});
    };
    return (
        <FormContainer>
            <Form>
                <h1>SignIn</h1>
                <form action="" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        onChange={handleData}
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        onChange={handleData}
                    />

                    <select name="role" required onChange={handleData}>
                        <option selected disabled>
                            Select Role
                        </option>
                        <option value="admin">admin</option>
                        <option value="student">student</option>
                    </select>

                    <input type="submit" value="Submit" />
                </form>
            </Form>
        </FormContainer>
    );
};

export default SignIn;

const FormContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
        margin: 10px;
    }
`;
const Form = styled.div`
    border: 1px solid #000;
    border-radius: 10px;
    padding: 10px;

    h1 {
        text-align: center;
    }
    form {
        width: 300px;
        height: 260px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    input {
        height: 40px;
        width: 100%;
        padding: 5px;
    }

    select {
        height: 40px;
        width: 100%;
        padding: 5px;
    }
`;
