import '../assets/scss/HoverButton.scss';
import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";

import {Button} from "@material-ui/core";
import {ThemeContext} from "../../api/Theme";

const HoverButton = ({ Icon, variant, text, to }) => {
const useStyle = useContext(ThemeContext);
    const [currStyle, setCurrStyle] = useState(null);
    const handleOver = () => {
        setCurrStyle(useStyle.button.onHover)
    };
    const handleOut = () => {
        setCurrStyle(null)
    };
    return (
        <Link to={to} className={"hb"}>
            <Button style={currStyle}
                    startIcon={Icon?<Icon/>:null}
                    variant={variant}   
                    onMouseOver={handleOver} onMouseOut={handleOut}>
                {text}
            </Button>
        </Link>
    );
    }
export default HoverButton;
