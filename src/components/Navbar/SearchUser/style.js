import styled from "styled-components";

const SearchUserWrapper = styled.div`
    position: relative;
    width: 563px;
    input {
        position: relative;
        width: 100%;
        height: 45px;
        border-radius: 8px;
        border: none;
        background-color: white;
        padding-left: 17px;
        padding-right: 45px;
        z-index: 7;
        font-size: 19px;

        ::placeholder {
            color: #C6C6C6;
        }
    }

    input:focus {
        outline: none;
    }

    svg {
        position: absolute;
        z-index: 8;
        color: #C6C6C6;
        font-size: 23px;
        right: 15px;
        top: 11px;
    }
`;

const SuggestionsList = styled.ul`
    background-color: #E7E7E7;
    position: absolute;
    padding-top: 24px;
    padding-left: 17px;
    padding-bottom: 40px;
    padding-right: 17px;
    top: 35px;
    width: 563px;
    height: 600px;
    overflow: scroll;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    border-radius: 0 0 8px 8px;
    gap: 16px;
    scrollbar-width: none;

}

    li {
        font-family: 'Lato';
        font-size: 19px;
        display: flex;
        align-items: center;
        gap: 12px;
    }

    img {
        width: 39px;
        height: 39px;
        object-fit: cover;
        border-radius: 50px;
        cursor: pointer;
    }
`;

const Username = styled.span`
    color: #515151;
    text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
    cursor: pointer;
    
`;

const FollowingText = styled.span`
    color: #C5C5C5;
    cursor: default;
`;

export {SearchUserWrapper,
        SuggestionsList,
        Username,
        FollowingText,
};