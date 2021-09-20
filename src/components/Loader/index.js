import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { StyledLoaderWrapper } from "./style";

function StyledLoader() {
	return (
		<StyledLoaderWrapper>
			Loading...
			<Loader type="ThreeDots" color="white" height={70} width={70} />
		</StyledLoaderWrapper>
	);
}

export default StyledLoader;
