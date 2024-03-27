import { useState, React } from "react";
import { Box, Button, Typography } from "@mui/material";
import { CalendarPlus, CalendarCheck } from "phosphor-react";
import CreateEvents from "../../components/organizerComponents/createEvents";
import ShowAllEvents from "../../components/organizerComponents/showAllEvents";
import VenueLists from "../../components/organizerComponents/venueLists";

function OrganizerHomePage() {
    const [selectedComponent, setSelectedComponent] = useState("ShowAllEvents");
    const [selectedBox, setSelectedBox] = useState("ShowAllEvents");

    const handleClick = (item) => {
        setSelectedComponent(item);
    };

    const isBoxSelected = (box) => {
        return selectedComponent === box;
    };

    const renderComponent = () => {
        switch (selectedComponent) {
            case "venueLists":
                return <VenueLists />;
            case "ShowAllEvents":
                return <ShowAllEvents />;
            default:
                return <ShowAllEvents />;
        }
    };

    return (
        <>
            <Box sx={sx.mainContainer}>
                <Box sx={sx.sidebar}>
                    <Typography sx={sx.logoStyle}>E V E N T G O</Typography>
                    <Box sx={sx.services}>
                        <Box sx={{ display: "flex" }}>
                            <Box
                                sx={{
                                    ...sx.serviceItems,
                                    boxShadow: isBoxSelected("venueLists")
                                        ? "4px 4px 16px 4px rgba(1, 1, 1, 0.25)"
                                        : "none",
                                }}
                                onClick={() => {
                                    setSelectedBox("venueLists");
                                    handleClick("venueLists");
                                }}
                            >
                                <CalendarPlus size={20} />
                                <Typography
                                    sx={{
                                        fontSize: { xs: 10, sm: 14, md: 14, lg: 16 },
                                        ...sx.inputTitle,
                                    }}
                                >
                                    Create New Event
                                </Typography>
                            </Box>

                            {selectedBox === "venueLists" && (
                                <Box sx={sx.selectedBox}>
                                    <Box sx={sx.innerSelectedBox}></Box>
                                </Box>
                            )}
                        </Box>

                        <Box sx={{ display: "flex" }}>
                            <Box
                                sx={{
                                    ...sx.serviceItems,
                                    boxShadow: isBoxSelected("showAllEvents")
                                        ? "4px 4px 16px 4px rgba(1, 1, 1, 0.25)"
                                        : "none",
                                }}
                                onClick={() => {
                                    setSelectedBox("showAllEvents");
                                    handleClick("showAllEvents");
                                }}
                            >
                                <CalendarCheck size={20} />
                                <Typography
                                    sx={{
                                        fontSize: { xs: 10, sm: 14, md: 14, lg: 16 },
                                        ...sx.inputTitle,
                                    }}
                                >
                                    Events
                                </Typography>
                            </Box>

                            {selectedBox === "showAllEvents" && (
                                <Box sx={sx.selectedBox}>
                                    <Box sx={sx.innerSelectedBox}></Box>
                                </Box>
                            )}
                        </Box>
                    </Box>

                    <Button sx={sx.backButton}>Back to Home</Button>
                </Box>
                <Box sx={sx.renderComponent}>{renderComponent()}</Box>
            </Box>
        </>
    );
}

const sx = {
    mainContainer: {
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        overflow: "hidden",
    },
    sidebar: {
        width: "20%",
        height: "auto",
        background: "linear-gradient(7deg, #181921 0%, #242535 47%, #292A3D 100%)",
        boxShadow: "14px 4px 55px 12px rgba(0, 0, 0, 0.25)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingY: "3%",
        position: "relative",
    },

    logoStyle: {
        fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "24px" },
        marginBottom: "30%",
    },
    services: {
        width: "90%",
    },
    serviceItems: {
        display: "flex",
        width: "100%",
        gap: "6vh",
        marginBottom: "5%",
        padding: "5%",
        position: "relative",

        "&:hover": {
            boxShadow: "4px 4px 16px 4px rgba(1, 1, 1, 0.25)",
            cursor: "pointer",
            background: " #47476b",
        },
    },
    backButton: {
        background: "#1F202D",
        boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.25)",
        borderRadius: 20,
        fontSize: { xs: 10, sm: 14, md: 14, lg: 14 },
        textTransform: "none",
        color: "#fff",
        paddingX: "5%",
        width: "150px",
        position: "absolute",
        bottom: "50px",
        left: "40px",
    },

    cardBox: {
        width: "100%",
        height: "90%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    selectedBox: {
        width: "1px",
        height: "45px",
        display: "flex",
        alignItems: "center",
    },
    innerSelectedBox: { width: "inherit", height: "50%", background: "#fff" },
    inputTitle: {
        textTransform: "none",
    },
    renderComponent: {
        height: "100vh",
        width: "100%",
        overflow: "auto",
        padding:'30px'
    },
};

export default OrganizerHomePage;
