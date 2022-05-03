/* eslint-disable react-hooks/exhaustive-deps */
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/system";
import { useLocation } from "react-router-dom";
import Web3 from "web3";

import PriceInput from "../../components/PriceInput";
import { useContractContext } from "../../providers/ContractProvider";
import { useAuthContext } from "../../providers/AuthProvider";
import { useEffect, useState } from "react";
import { config } from "../../config";
import fullLogo from "../../assets/FullLogo.png";
import handlyIcon from "../../assets/handly.png";

const CardWrapper = styled(Card)(({ theme }) => ({
  backgroundColor: "transparent",
  marginLeft: "2.5%",
  border: "3px solid white",
  width: "100%",
  padding: "1% 1%",
  [theme.breakpoints.down("md")]: {
    margin: "1% auto",
    width: "90%",
  },
}));

const TextWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  paddingLeft: 1,
  [theme.breakpoints.down("md")]: {
    h5: {
      fontSize: 20,
      margin: 0,
    },
  },
}));

const otherForks = [
  {
    color: "black",
    text1: "36 HOURS REWARDS",
    text2: "ACCUMULATION CUT-OFF",
  },
  {
    color: "white",
    text1: "13 HOURS COMPOUND",
    text2: "TIMER",
  },
  {
    color: "black",
    text1: "8 TIMES MANDATORY",
    text2: "COMPOUND",
  },
  {
    color: "white",
    text1: "90% TAX FOR EARLY",
    text2: "WITHDRAWALS",
  },
  {
    color: "black",
    text1: "6% TAX FOR SMART",
    text2: "CONTRACT",
  },
];

export default function CompareForks() {
  return (
    <CardWrapper>
      {/* <CardContent> */}
        <TextWrapper>
          <Typography variant="body1" color="green" style={{textDecoration: "underline"}}>HYBRID FEATURES</Typography>
        </TextWrapper>
        {/* <Grid
          container
          // justifyContent="space-between"
          alignItems="center"
          mt={1}
        >
          <img src={fullLogo} alt="" width={"30%"}></img>
          <TextWrapper>
            <Typography variant="body6">36 HOURS REWARDS</Typography>
            <Typography variant="body6">ACCUMULATION CUT-OFF</Typography>
          </TextWrapper>
        </Grid>
        <Grid display="flex" justifyContent="center" alignItems="center">
          <Typography variant="body1" color="red">OTHERS</Typography>
          <img src={handyLogo} alt="" height="20px"></img>
        </Grid> */}
        {otherForks.map((f) => (
          <Grid
            container
            justifyContent="flex-start"
            alignItems="center"
            mt={1}
          >
            <img src={handlyIcon} alt="" width="48px" style={{marginRight: "24px"}}></img>
            {/* <Typography variant="body1" color="green">{"☞"}</Typography>
            <space></space> */}
            <TextWrapper>
              <Typography variant="body8" color={f.color}>{f.text1}</Typography>
              <Typography variant="body8" color={f.color}>{f.text2}</Typography>
            </TextWrapper>
            {/* <Typography variant="body5" marginLeft="5%">={f.totalFee}%</Typography> */}
          </Grid>
        ))}
        {/* <Typography fontSize={10} textAlign="center" mt={1}>ALL WE DID IS TO GIVE MORE TO INVESTORS AND TO SUSTAIN THE PLATFORM, WHICH IS AS IT SHOULD BE RIGHT?</Typography> */}
      {/* </CardContent> */}
    </CardWrapper>
  );
}
