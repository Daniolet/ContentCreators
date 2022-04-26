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
import catLogo from "../../assets/cat.png";
import spookedLogo from "../../assets/spooked.png";
import rubyLogo from "../../assets/ruby.png";
import handyLogo from "../../assets/handy.png";

const CardWrapper = styled(Card)(({ theme }) => ({
  backgroundColor: "transparent",
  marginLeft: "5%",
  border: "3px solid white",
  width: "50%",
  padding: "1% 3%",
  [theme.breakpoints.down("sm")]: {
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
    img: rubyLogo,
    depositFee: 8,
    referralFee: 12,
    totalFee: 20,
  },
  {
    img: catLogo,
    depositFee: 1,
    referralFee: 12,
    totalFee: 13,
  },
  {
    img: spookedLogo,
    depositFee: 2,
    referralFee: 12,
    totalFee: 14,
  },
];

export default function CompareForks() {
  return (
    <CardWrapper>
      {/* <CardContent> */}
        <TextWrapper>
          <Typography variant="body3">WE ARE OBVIOUSLY THE MOST SUSTANABLE IF YOU COMPARE US TO OTHER BAKEDBEANS FORKS</Typography>
        </TextWrapper>
        <Grid
          container
          // justifyContent="space-between"
          alignItems="center"
          mt={1}
        >
          <img src={fullLogo} alt="" width={"30%"}></img>
          <TextWrapper>
            <Typography variant="body6">DEPOSIT FEE 4%</Typography>
            <Typography variant="body6">REFERRAL FEE 7%</Typography>
          </TextWrapper>
          <Typography variant="body4" marginLeft="10%">=11%</Typography>
        </Grid>
        <Grid display="flex" justifyContent="center" alignItems="center">
          <Typography variant="body1" color="red">OTHERS</Typography>
          <img src={handyLogo} alt="" height="20px"></img>
        </Grid>
        {otherForks.map((f) => (
          <Grid
            container
            // justifyContent="space-between"
            alignItems="center"
            mt={1}
          >
            <img src={f.img} alt="" width="30%"></img>
            <TextWrapper>
              <Typography variant="body6">DEPOSIT FEE {f.depositFee}%</Typography>
              <Typography variant="body6" marginLeft={1}>REFERRAL FEE {f.referralFee}%</Typography>
            </TextWrapper>
            <Typography variant="body5" marginLeft="10%">={f.totalFee}%</Typography>
          </Grid>
        ))}
        <Typography fontSize={10} textAlign="center" mt={1}>ALL WE DID IS TO GIVE MORE TO INVESTORS AND TO SUSTAIN THE PLATFORM, WHICH IS AS IT SHOULD BE RIGHT?</Typography>
      {/* </CardContent> */}
    </CardWrapper>
  );
}
