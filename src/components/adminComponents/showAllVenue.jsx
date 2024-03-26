import {
    Box,
    Card,
    CardContent,
    Grid,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    Typography,
    styled,
    List,
} from "@mui/material";
import React from "react";

import FoundationIcon from "@mui/icons-material/Foundation";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';

const MainContainer = styled(Box)``;
const Cards = styled(Card)`
    height: 280px;
    width: 100%;
`;
const ImageBox = styled(Box)`
    height: 60%;
    width: 100%;
    background-image: url("https://www.55eventsplace.com/wp-content/uploads/2018/01/banner2-1.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;
const CardContents = styled(CardContent)`
    height: fit-content;
    padding-bottom: 30px;
`;

const Lists = styled(List)`
    padding: 0;
    #listSeats {
        width: 100px;
    }
`;
const ListItems = styled(ListItem)`
    margin-bottom: 1px;
    padding: 0;
    .listIcon {
        min-width: 30px;
    }
`;

const ShowAllVenue = () => {
    return (
        <MainContainer>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} lg={3}>
                    <Cards>
                        <ImageBox></ImageBox>
                        <CardContents>
                            <Lists>
                                <ListItems>
                                    <ListItemIcon className="listIcon">
                                        <FoundationIcon />
                                    </ListItemIcon>
                                    <ListItemText secondary={"Orchard"} />
                                </ListItems>
                                <ListItems>
                                    <ListItemIcon className="listIcon">
                                        <LocationOnIcon />
                                    </ListItemIcon>
                                    <ListItemText secondary={"Calicut"} />
                                </ListItems>
                                <Box sx={{ display: "flex" }}>
                                    <ListItems id="listSeats">
                                        <ListItemIcon className="listIcon">
                                            <EventSeatIcon />
                                        </ListItemIcon>
                                        <ListItemText secondary={"20"} />
                                    </ListItems>
                                    <ListItems>
                                        <ListItemIcon className="listIcon" id="listChair">
                                            <DownloadDoneIcon />
                                        </ListItemIcon>
                                        <ListItemText secondary={"Ac, Parking lot"} />
                                    </ListItems>
                                </Box>
                            </Lists>
                        </CardContents>
                    </Cards>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Cards>
                        <ImageBox></ImageBox>
                        <CardContents>
                            <Lists>
                                <ListItems>
                                    <ListItemIcon className="listIcon">
                                        <FoundationIcon />
                                    </ListItemIcon>
                                    <ListItemText secondary={"Orchard"} />
                                </ListItems>
                                <ListItems>
                                    <ListItemIcon className="listIcon">
                                        <LocationOnIcon />
                                    </ListItemIcon>
                                    <ListItemText secondary={"Calicut"} />
                                </ListItems>
                                <Box sx={{ display: "flex" }}>
                                    <ListItems id="listSeats">
                                        <ListItemIcon className="listIcon">
                                            <EventSeatIcon />
                                        </ListItemIcon>
                                        <ListItemText secondary={"20"} />
                                    </ListItems>
                                    <ListItems>
                                        <ListItemIcon className="listIcon" id="listChair">
                                            <DownloadDoneIcon />
                                        </ListItemIcon>
                                        <ListItemText secondary={"Ac, Parking lot"} />
                                    </ListItems>
                                </Box>
                            </Lists>
                        </CardContents>
                    </Cards>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Cards>
                        <ImageBox></ImageBox>
                        <CardContents>
                            <Lists>
                                <ListItems>
                                    <ListItemIcon className="listIcon">
                                        <FoundationIcon />
                                    </ListItemIcon>
                                    <ListItemText secondary={"Orchard"} />
                                </ListItems>
                                <ListItems>
                                    <ListItemIcon className="listIcon">
                                        <LocationOnIcon />
                                    </ListItemIcon>
                                    <ListItemText secondary={"Calicut"} />
                                </ListItems>
                                <Box sx={{ display: "flex" }}>
                                    <ListItems id="listSeats">
                                        <ListItemIcon className="listIcon">
                                            <EventSeatIcon />
                                        </ListItemIcon>
                                        <ListItemText secondary={"20"} />
                                    </ListItems>
                                    <ListItems>
                                        <ListItemIcon className="listIcon" id="listChair">
                                            <DownloadDoneIcon />
                                        </ListItemIcon>
                                        <ListItemText secondary={"Ac, Parking lot"} />
                                    </ListItems>
                                </Box>
                            </Lists>
                        </CardContents>
                    </Cards>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Cards>
                        <ImageBox></ImageBox>
                        <CardContents>
                            <Lists>
                                <ListItems>
                                    <ListItemIcon className="listIcon">
                                        <FoundationIcon />
                                    </ListItemIcon>
                                    <ListItemText secondary={"Orchard"} />
                                </ListItems>
                                <ListItems>
                                    <ListItemIcon className="listIcon">
                                        <LocationOnIcon />
                                    </ListItemIcon>
                                    <ListItemText secondary={"Calicut"} />
                                </ListItems>
                                <Box sx={{ display: "flex" }}>
                                    <ListItems id="listSeats">
                                        <ListItemIcon className="listIcon">
                                            <EventSeatIcon />
                                        </ListItemIcon>
                                        <ListItemText secondary={"20"} />
                                    </ListItems>
                                    <ListItems>
                                        <ListItemIcon className="listIcon" id="listChair">
                                            <DownloadDoneIcon />
                                        </ListItemIcon>
                                        <ListItemText secondary={"Ac, Parking lot"} />
                                    </ListItems>
                                </Box>
                            </Lists>
                        </CardContents>
                    </Cards>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Cards>
                        <ImageBox></ImageBox>
                        <CardContents>
                            <Lists>
                                <ListItems>
                                    <ListItemIcon className="listIcon">
                                        <FoundationIcon />
                                    </ListItemIcon>
                                    <ListItemText secondary={"Orchard"} />
                                </ListItems>
                                <ListItems>
                                    <ListItemIcon className="listIcon">
                                        <LocationOnIcon />
                                    </ListItemIcon>
                                    <ListItemText secondary={"Calicut"} />
                                </ListItems>
                                <Box sx={{ display: "flex" }}>
                                    <ListItems id="listSeats">
                                        <ListItemIcon className="listIcon">
                                            <EventSeatIcon />
                                        </ListItemIcon>
                                        <ListItemText secondary={"20"} />
                                    </ListItems>
                                    <ListItems>
                                        <ListItemIcon className="listIcon" id="listChair">
                                            <DownloadDoneIcon />
                                        </ListItemIcon>
                                        <ListItemText secondary={"Ac, Parking lot"} />
                                    </ListItems>
                                </Box>
                            </Lists>
                        </CardContents>
                    </Cards>
                </Grid>
            </Grid>
        </MainContainer>
    );
};

export default ShowAllVenue;
