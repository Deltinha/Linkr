import styled from "styled-components";

const IconBox = styled.div`
    display: flex;
    position: absolute;
    bottom: 20px;
    cursor: pointer;
    font-size: 13px;
    font-weight: 300;
    line-height: 16px;
    p {
        color: ${(props) => props.color};
    }
    @media (max-width: 640px){
        bottom: 10px;
    }
`;

export {
    IconBox
}