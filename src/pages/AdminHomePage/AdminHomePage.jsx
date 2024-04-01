import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useState, useEffect } from "react";
import axios from "../../utils/AxiosInstance";
import ShowAllEvents from "../../components/organizerComponents/showAllEvents";
import VenueLists from "../../components/organizerComponents/venueLists";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Box, styled } from "@mui/material";

import CreateVenue from "../../components/adminComponents/createVenue";
import ShowAllVenue from "../../components/adminComponents/showAllVenue";

const SideBars = styled(Sidebar)`
    .ps-sidebar-container {
        background: transparent;
    }
`;

const AdminHomePage = () => {
    const { collapseSidebar } = useProSidebar();
    const [children, setChildren] = useState(<ShowAllVenue />);

    return (
        <>
            <div style={{ height: "100vh", display: "flex" }}>
                <SideBars style={{ height: "100vh" }}>
                    <Menu>
                        <MenuItem
                            icon={<MenuOutlinedIcon />}
                            onClick={() => {
                                collapseSidebar();
                            }}
                            style={{ textAlign: "center" }}
                        >
                            {" "}
                            <h2>Admin</h2>
                        </MenuItem>

                        <MenuItem icon={<AddCircleOutlineIcon />} onClick={() => setChildren(<CreateVenue />)}>
                            Create New Venue
                        </MenuItem>
                        <MenuItem onClick={() => setChildren(<ShowAllVenue />)} icon={<PeopleOutlinedIcon />}>
                            Venues
                        </MenuItem>
                    </Menu>
                </SideBars>
                <Box sx={sx.renderComponent}>{children}</Box>
            </div>
        </>
    );
};

const sx = {
    renderComponent: {
        height: "100vh",
        width: "100%",
        overflow: "auto",
        padding: "30px",
    },
};

export default AdminHomePage;
