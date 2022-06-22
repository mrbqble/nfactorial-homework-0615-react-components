import { DefaultContext } from "../../Context";
import { useContext } from "react";

export const DarkMode = () => {
    const { handleDarkMode } = useContext(DefaultContext);

    return (
        <button className="favorite-button" onClick={() => handleDarkMode()}>Change Mode</button>
    )
}