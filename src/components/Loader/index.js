import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import styled from "styled-components";

function StyledLoader() {
	return (
		<StyledLoaderWrapper>
			Loading...
			<Loader type="ThreeDots" color="white" height={70} width={70} />
		</StyledLoaderWrapper>
	);
}

const StyledLoaderWrapper = styled.div`
	width: 100%;
	color: white;
	font-size: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
export default StyledLoader;
