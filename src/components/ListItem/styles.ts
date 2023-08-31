import styled from "styled-components";

interface ContainerProps {
    done: boolean;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    color: #20212C;
    padding: 10px;
    border-radius: 10px;
    align-items: center;
    margin-bottom: 10px;

    label {
        color: #ccc;
        text-decoration: ${({ done }) => (done ? 'line-through' : 'initial')};
    }

    input {
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }
`;
