import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

export default function FAQ() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Container
      id="targetDiv"
      sx={{
        paddingBottom: { xs: 10, sm: 10, md: 10, lg: 7 },
        paddingTop: { xs: 10, sm: 10, md: 10, lg: 7 },
      }}
    >
      <Box sx={sx.faqTitle}>
        <Typography
          sx={{ fontSize: { xs: 25, sm: 25, md: 30, lg: 35 } }}
          paddingBottom={"20px"}
        >
          Frequently Asked Questions
        </Typography>
        <Typography sx={sx.inputStyle}>
          Here are the few questions which is frequenly asked
        </Typography>

        <QuestionMarkIcon
          fontSize="large"
          sx={{ position: "relative", right: "-90%" }}
        />
      </Box>
      <Box sx={sx.questions}>
        <Accordion elevation={0} sx={sx.accordionDesign}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={sx.inputStyle}>
              {" "}
              How can I book tickets on your website?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={sx.inputStyle}>
              Booking tickets on our website is simple. You can start by
              selecting the event or activity you're interested in from our list
              of available options. Once you've found the event, click on it to
              view more details and available ticket options. Then, simply
              choose the ticket type and quantity you'd like to purchase, and
              proceed to the checkout page to complete your booking securely.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion elevation={0} sx={sx.accordionDesign}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography sx={sx.inputStyle}>
              Can I cancel or modify my booking after purchase?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={sx.inputStyle}>
              Yes, we understand that plans can change. Depending on the event
              organizer's policies, you may be able to cancel or modify your
              booking. We recommend checking the specific event's cancellation
              and modification policy for details. If allowed, you can usually
              manage your booking through your account dashboard or by
              contacting our customer support team for assistance.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion elevation={0} sx={sx.accordionDesign}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography sx={sx.inputStyle}>
              How do I receive my tickets after booking?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={sx.inputStyle}>
              After successfully completing your booking, you'll receive a
              confirmation email with all the details of your purchase,
              including your booking reference number. Additionally, your
              tickets will be available for download or printing directly from
              your account dashboard. If mobile tickets are available for the
              event, you can also access them via our mobile app for easy entry
              at the venue.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion elevation={0} sx={sx.accordionDesign}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography sx={sx.inputStyle}>
              What payment methods do you accept?
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography sx={sx.inputStyle}>
              We accept a variety of payment methods to make booking tickets
              convenient for our customers. These may include major credit cards
              (Visa, Mastercard, American Express), debit cards, and popular
              digital payment platforms such as PayPal or Apple Pay. Rest
              assured, all transactions are securely processed to protect your
              payment information.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion elevation={0} sx={sx.accordionDesign}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography sx={sx.inputStyle}>
              Are there any additional fees or charges on top of the ticket
              price?
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography sx={sx.inputStyle}>
              In addition to the ticket price, there may be applicable taxes,
              processing fees, or service charges depending on the event and
              ticket type. These fees, if any, will be clearly displayed during
              the booking process before you confirm your purchase. We strive to
              be transparent about any additional costs associated with your
              booking to ensure you have a seamless experience.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box>
          <img width={"100%"} src="/reddit.svg" alt="" />
        </Box>
    </Container>
  );
}

const sx = {
  faqTitle: {
    paddingX: "5%",
    background: "inherit",
  },
  questions: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "inherit",
    padding: "5%",
    position: "relative",
  },
  accordionDesign: {
    backgroundColor: "inherit",
    maxWidth: "500px",
    marginBottom: "3%",
    color: "white",
  },
  inputStyle: {
    letterSpacing: ".5px",
    wordSpacing: "1.1%",
    fontFamily: "var(--font-dmsans)",
  },
};
