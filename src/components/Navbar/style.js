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
    
    & > span {
        font-size: 49px;
        font-weight: 700;
        cursor: pointer;
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

const NavbarLinks = styled.div`
    width: 150px;
    background-color: #171717;
    display: flex;
    flex-direction: column;
    gap: 11px;
    align-items: center;
    border-radius: 0 0 0 20px;
    position: absolute;
    right: 0;
    top: 72px;
    padding-top: 10px;
    padding-bottom: 15px;

    span {
        cursor: pointer;
        color: white;
        font-size: 17px;
        text-decoration: none;
    }
`;

export {
    Navbar,
    NavbarMenu,
    NavbarLinks,
};