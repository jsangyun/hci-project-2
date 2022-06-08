import React from "react";
import '../css/MobileDevice.css'
import { Stack, List, ListItemText, Divider } from "@mui/material";

var MobileDevice = ({mainColor, secondaryColor, accentColor, backgroundColor, isSecondary}) => {
    return ( 
        <div className="mobile-device" style={{backgroundColor: backgroundColor}}>
            <Stack className="content-view" spacing={2}>
                <div style={{color: isSecondary ? mainColor : secondaryColor, fontSize: "20px"}}>Welcome!</div>
                <h3 style={{color: isSecondary ? mainColor : secondaryColor}}>Hello World!</h3>
                <List className="table-view" style={{color: isSecondary ? mainColor : secondaryColor}}>
                    <ListItemText>List Item 1</ListItemText>
                    <Divider style={{backgroundColor: secondaryColor}}/>
                    <ListItemText>List Item 2</ListItemText>
                    <Divider style={{backgroundColor: secondaryColor}}/>
                    <ListItemText>List Item 3</ListItemText>
                    <Divider style={{backgroundColor: secondaryColor}}/>
                </List>
                <div className="block-item" style={{backgroundColor: isSecondary ? mainColor : secondaryColor, color: accentColor}}>Grid Item</div>
                
                <div className={isSecondary ? "button-type-2" : "button-type-1"}
                    style={{backgroundColor: accentColor, color: secondaryColor}}>Button 1</div>
                <div className={isSecondary ? "button-type-1" : "button-type-2"}
                    style={{backgroundColor: secondaryColor, color: accentColor, borderColor: accentColor}}>Button 2</div>
            </Stack>
        </div>
    )
}

export default MobileDevice;