import React, {useContext} from "react";
import '../assets/scss/DropDownProfile.scss';
import {ThemeContext} from "../../api/Theme";
import HoverButton from "./HoverButton";
import HoverButtons from "./HoverButtons";
import {AccountBox, ExitToApp} from "@material-ui/icons";

const DropDownProfile = () => {
    const useStyle = useContext(ThemeContext);
    return (
        <div style={useStyle.component} className="dropdown-profile">
            <HoverButton Icon={AccountBox} variant={"text"} text={"Profile"}/>
            <HoverButtons Icon={ExitToApp} variant={"text"} text={"Logout"} to="/"/>
            
        </div>
    );
}
export default DropDownProfile;