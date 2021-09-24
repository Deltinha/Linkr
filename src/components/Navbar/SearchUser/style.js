import styled from "styled-components";

const SearchUserWrapper = styled.div`
    input {
        position: relative;
        width: 563px;
        height: 45px;
        border-radius: 8px;
        border: none;
        background-color: white;
        padding-left: 17px;
        padding-right: 17px;
    }

    input:focus {
        outline: none;
    }
`;

const SuggestionsList = styled.ul`
    background-color: #E7E7E7;
    position: absolute;
    width: 563px;

    li {
        color: #515151;
        font-family: 'Lato';
        font-size: 19px;
    }
`;

export {SearchUserWrapper,
        SuggestionsList,
};