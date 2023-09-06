import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid #555;
    border-radius: 15px;
    margin: 20px 0;
    padding: 10px;
    display: flex;
    align-items: center;

    .image {
        font-size: 20px;
        margin-right: 9px;
        padding-bottom: 5px;
    }

    input {
        border: 0;
        outline: 0;
        font-size: 18px;
        flex: 1;
        color: #fff;
        background: transparent;
    }
`