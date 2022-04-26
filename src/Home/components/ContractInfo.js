import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/system";

import Web3 from "web3";

import { useContractContext } from "../../providers/ContractProvider";
import { useAuthContext } from "../../providers/AuthProvider";
import { useEffect, useState } from "react";
import { config } from "../../config";

import aprLogo from "../../assets/apr.png";
import contractLogo from "../../assets/contract.png";

const CardWrapper = styled(Card)(({ theme }) => ({
  backgroundColor: "transparent",
  marginRight: "5%",
  marginTop: "2%",
  border: "3px solid white",
  width: "40%",
  [theme.breakpoints.down("sm")]: {
    margin: "1% auto",
    width: "90%",
  },
}));

const contractInfo = [
  {
    label: "CONTRACT BALANCE:",
    value: "0.001BNB",
  },
  {
    label: "CONTENT CREATORS:",
    value: "8001",
  },
];

export default function ContractInfo() {
  const { busdcontract, contract, wrongNetwork, getBusdBalance, fromWei, toWei, getBusdApproved, web3 } =
    useContractContext();
  const { address, chainId } = useAuthContext();
  const [contractBUSD, setContractBUSD] = useState(0);

  const fetchContractBUSDBalance = () => {
    if (!web3 || wrongNetwork) {
      setContractBUSD(0);
      return;
    }
    getBusdBalance(config.contractAddress).then((amount) => {
      setContractBUSD(fromWei(amount));
    });
  };

  useEffect(() => {
    fetchContractBUSDBalance();
  }, [web3, chainId]);

  return (
    <CardWrapper>
      <CardContent>
        <Box marginLeft={-2} marginRight={-2}>
          <Grid
            container
            // justifyContent="space-between"
            alignItems="center"
          >
            <img src={contractLogo} alt="" height={30}></img>
            <Typography variant="body7">CONTRACT BALANCE:</Typography>
            <Typography variant="body7" marginLeft="20%">{contractBUSD} BUSD</Typography>
          </Grid>
          <Grid
            container
            // justifyContent="space-between"
            alignItems="center"
          >
            <img src={aprLogo} alt="" height={30}></img>
            <Typography variant="body1">APR</Typography>
            <Typography variant="body1" marginLeft="50%">4015%</Typography>
          </Grid>
        </Box>
      </CardContent>
    </CardWrapper>
  );
}
