import { useHistory } from "react-router-dom";

function useNavigation() {
    const history = useHistory();

    const navigateTo = (path) => {
        history.push(path)
    }
    return {navigateTo};
}

export default useNavigation
