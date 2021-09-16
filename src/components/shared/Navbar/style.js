import styled from "styled-components";

const Navbar = styled.div`
    position: fixed;
    z-index: 5;
    height: 72px;
    width: 100%;
    background-color: #151515;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 28px;
    padding-right: 17px;
    box-sizing: border-box;
    color: white;
    
    span {
        font-size: 49px;
        font-weight: 700;
    }
`;

const NavbarMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 18px;

    svg {
        font-size: 25px;
        transform: rotate(0);
        cursor: pointer;
    }

    img {
        cursor: pointer;
        width: 53px;
        height: 53px;
        object-fit: cover;
        border-radius: 50%;
    }
`;


export {
    Navbar,
    NavbarMenu,
};