import styled from "styled-components";
import Modal from "styled-react-modal";

const MapModal = Modal.styled`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #333333;
  width: 790px;
  height: 354px;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  padding: 18px 37px 33px 37px;
  border-radius: 20px;

  @media (max-width: 640px){
    width: 355px;
    height: 300px;
  }
`;

const IconBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 5px;
    cursor: pointer;
`;

const CloseIcon = styled.div`
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 5px;
`;

const Content = styled.div`
    width: 100%;
    font-family: Oswald;
    font-size: 38px;
    line-height: 56px;
    color: #fff;
`;

const Infos = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    position: relative;
`;

const ContentMap = styled.div`
    height: 240px;
    width: 713px;
    @media (max-width: 640px){
        width: 100%;
        height: 160px;
    }
`;

export {
    MapModal,
    IconBox,
    CloseIcon,
    Content,
    Infos,
    ContentMap
}