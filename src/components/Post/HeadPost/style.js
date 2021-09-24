import styled from "styled-components";

const RepostUser = styled.div`
    width: 611px;
    background-color: #1E1E1E;
    border-radius: 16px;
    height: 33px;
    display: flex;
    align-items: center;
    padding-left: 16px;
    color: white;
    font-family: Lato;
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    p {
        margin-left: 5px;
    }
    span {
        font-weight: 700;
    }
    @media screen and (max-width: 600px) {
        width: 100%;
        max-width: 100vw;
        border-radius: 0;
    }
`;

export {
    RepostUser
}
