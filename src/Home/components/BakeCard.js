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
import btnLogo from "../../assets/logo.png";
import walletLogo from "../../assets/wallet.png";
import stakedLogo from "../../assets/staked.png";

const CardWrapper = styled(Card)({
  backgroundColor: "transparent",
  border: "3px solid white",
  // maxHeight: "400px",
  padding: "1% 3%",
});

const ButtonContainer = styled(Grid)(({ theme }) => ({
  margin: "0 auto",
  // [theme.breakpoints.down("md")]: {
  //   flexDirection: "column",
  //   "> div": {
  //     marginLeft: 0,
  //     marginRight: 0,
  //   },
  // },
}));

let timeout = null;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function BakeCard() {
  const { busdcontract, contract, wrongNetwork, getBusdBalance, fromWei, toWei, getBusdApproved, web3 } =
    useContractContext();
  const { address, chainId } = useAuthContext();
  const [contractBUSD, setContractBUSD] = useState(0);
  const [walletBalance, setWalletBalance] = useState({
    busd: 0,
    beans: 0,
    rewards: 0,
    approved: 0,
    check: 0,
    compound: 0,
  });

  const [checkpoint, setCheckPoint] = useState(0);

  const [bakeBUSD, setBakeBUSD] = useState(0);
  const [calculatedBeans, setCalculatedBeans] = useState(0);
  const [loading, setLoading] = useState(false);
  const query = useQuery();

  const fetchContractBUSDBalance = () => {
    if (!web3 || wrongNetwork) {
      setContractBUSD(0);
      return;
    }
    getBusdBalance(config.contractAddress).then((amount) => {
      setContractBUSD(fromWei(amount));
    });
  };

  const fetchWalletBalance = async () => {
    if (!web3 || wrongNetwork || !address) {
      setWalletBalance({
        busd: 0,
        beans: 0,
        rewards: 0,
        approved: 0,
        check: 0,
        compound: 0,
      });
      return;
    }

    try {
      const [busdAmount, beansAmount, rewardsAmount, approvedAmount, checkPoint, compoundCount] = await Promise.all([
        getBusdBalance(address),
        contract.methods
          .getMyMiners(address)
          .call()
          .catch((err) => {
            console.error("myminers", err);
            return 0;
          }),
        contract.methods
          .beanRewards(address)
          .call()
          .catch((err) => {
            console.error("beanrewards", err);
            return 0;
          }),
        getBusdApproved(address),
        contract.methods
          .getCheckPoint(address)
          .call()
          .catch((err) => {
            console.error("check", err);
            return 0;
          }),
        contract.methods
          .getCompoundCount(address)
          .call()
          .catch((err) => {
            console.error("compound", err);
            return 0;
          }),
      ]);
      setWalletBalance({
        busd: fromWei(`${busdAmount}`),
        beans: beansAmount,
        rewards: fromWei(`${rewardsAmount}`),
        approved: approvedAmount,
        check: checkPoint,
        compound: compoundCount,
      });
      setCheckPoint(checkPoint);
    } catch (err) {
      console.error(err);
      setWalletBalance({
        busd: 0,
        beans: 0,
        rewards: 0,
        approved: 0,
        check: 0,
        compound: 0,
      });
    }
  };

  useEffect(() => {
    fetchContractBUSDBalance();
  }, [web3, chainId]);

  useEffect(() => {
    fetchWalletBalance();
  }, [address, web3, chainId]);

  const onUpdateBakeBUSD = (value) => {
    setBakeBUSD(value);
  };

  const getRef = () => {
    const ref = Web3.utils.isAddress(query.get("ref"))
      ? query.get("ref")
      : "0x9dda759C79d073509D020d74F084C5D2bd080000";
    return ref;
  };

  const bake = async () => {
    setLoading(true);

    const ref = getRef();
    const amount = toWei(`${bakeBUSD}`);

    try {
      await contract.methods.buyEggs(ref,amount).send({
        from: address,
        value: 0,
      });
    } catch (err) {
      console.error(err);
    }
    fetchWalletBalance();
    fetchContractBUSDBalance();
    setLoading(false);
  };

  const approve = async () => {
    setLoading(true);

    const lcontract = '0xccB82226dEC5E0196AF87F732469F4BB6052E130';

    try {
      await busdcontract.methods.approve(lcontract,'1000000000000000000000000000000').send({
        from: address,
      });
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const reBake = async () => {
    setLoading(true);

    // const ref = getRef();

    try {
      await contract.methods.hatchEggs().send({
        from: address,
      });
    } catch (err) {
      console.error(err);
    }
    fetchWalletBalance();
    setLoading(false);
  };

  const eatBeans = async () => {
    setLoading(true);

    try {
      await contract.methods.sellEggs().send({
        from: address,
      });
    } catch (err) {
      console.error(err);
    }
    fetchWalletBalance();
    fetchContractBUSDBalance();
    setLoading(false);
  };

  const [countdown, setCountdown] = useState({
    rwTotal: 0,
    rwHours: 0,
    rwMinutes: 0,
    rwSeconds: 0,

    cpTotal: 0,
    cpHours: 0,
    cpMinutes: 0,
    cpSeconds: 0,
  })

  const getCountdown = (deadline) => {
    const now = Date.now() / 1000;
    let total = deadline - now - 150;
    if (total < 0) {
      total = 0;
    }
    const seconds = Math.floor((total) % 60);
    const minutes = Math.floor((total / 60) % 60);
    const hours = Math.floor((total / (60 * 60)));
    console.log("CHECK", total)
    return {
        total,
        hours,
        minutes,
        seconds
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
        try {
          const time1 = /*36*60*60*/3600 + Number(walletBalance.check);
          const time2 = /*13*60*60*/2400 + Number(walletBalance.check);
            const data = getCountdown(time1)
            const _data = getCountdown(time2)
            setCountdown({
                rwTotal: data.total,
                rwHours: data.hours,
                rwMinutes: data.minutes,
                rwSeconds: data.seconds,

                cpTotal: _data.total,
                cpHours: _data.hours,
                cpMinutes: _data.minutes,
                cpSeconds: _data.seconds,
            })
        } catch (err) {
            console.log(err);
        }
    }, 1000);

    return () => clearInterval(interval);
  }, [walletBalance])

  return (
    <CardWrapper>
      {loading && <LinearProgress color="secondary" />}
      {/* <CardContent> */}
        <Grid
          container
          // justifyContent="space-between"
          alignItems="center"
        >
          <img src={walletLogo} alt="" height={30}></img>
          <Typography variant="body7">YOUR WALLET BALANCE:</Typography>
          {/* <Typography variant="body7" marginLeft="5%">{walletBalance.busd} BUSD</Typography> */}
        </Grid>
        <Grid
          container
          justifyContent="end"
          // alignItems="right"
        >
          <Typography variant="body7" marginRight="18%">{walletBalance.busd} BUSD</Typography>
        </Grid>
        <Grid
          container
          // justifyContent="space-between"
          alignItems="center"
          marginTop={1}
        >
          <img src={stakedLogo} alt="" height={30}></img>
          <Typography variant="body7">&nbsp;STAKED CONTENTS:</Typography>
          <Typography variant="body7" marginLeft="25%">{walletBalance.beans}</Typography>
        </Grid>
        <Box paddingTop={1} paddingBottom={1}>
          <Box display="flex" justifyContent="center">
            <PriceInput
              max={+walletBalance.busd}
              value={bakeBUSD}
              onChange={(value) => onUpdateBakeBUSD(value)}
            />
          </Box>
          
          <Box marginTop={1} marginBottom={1} display="flex" justifyContent="space-evenly">
            <Button
              variant="contained"
              color="secondary"
              disabled={wrongNetwork || !address || loading || +walletBalance.approved != 0}
              onClick={approve}
            >
              Approve
            </Button>
            <Button
              variant="contained"
              color="secondary"
              disabled={wrongNetwork || !address || +bakeBUSD === 0 || loading}
              onClick={bake}
            >
              <img src={btnLogo} alt="" height="30px"></img>
              BE A CREATOR
            </Button>
          </Box>

          <Grid
            container
            justifyContent="space-evenly"
            alignItems="center"
            mt={1}
          >
            <Typography variant="body7">
                SALARY WILL BE READY IN:
            </Typography>
          </Grid>

          <Grid
            container
            justifyContent="space-evenly"
            alignItems="center"
            mt={1}
          >
            <Typography variant="body7">
              {/* {"24h:31m:35s"} */}
              {`${countdown.rwHours}h:${countdown.rwMinutes}m:${countdown.rwSeconds}s`}
            </Typography>
          </Grid>

          <Grid
            container
            justifyContent="space-evenly"
            alignItems="center"
            mt={1}
          >
            <Typography variant="body7">
              YOUR REWARDS:
            </Typography>
            <Typography variant="body7">
              {walletBalance.rewards} BUSD
            </Typography>
          </Grid>
          <ButtonContainer container>
            <Grid item flexGrow={1} marginRight={1} marginTop={1} width={"40%"}>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                disabled={wrongNetwork || !address || loading}
                onClick={reBake}
              >
                STAKE CONTENT<br></br>
                (COMPOUND)
              </Button>
            </Grid>
            <Grid item flexGrow={1} marginLeft={1} marginTop={1} width={"40%"}>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                disabled={wrongNetwork || !address || loading}
                onClick={eatBeans}
              >
                SELL CONTENT<br></br>
                (CLAIM)
              </Button>
            </Grid>

            <Grid
              container
              justifyContent="space-evenly"
              alignItems="center"
              mt={1}
            >
              <Typography variant="body7">
                COMPOUND COUNT:
              </Typography>
              <Typography variant="body7">
                {`${walletBalance.compound}` + " TIME OF 8"}
              </Typography>
            </Grid>

            <Grid
              container
              justifyContent="space-evenly"
              alignItems="center"
              mt={1}
            >
              <Typography variant="body7">
                TIME UNTIL NEXT COMPOUND:
              </Typography>
              <Typography variant="body7">
                {/* {"11h:31m:35s"} */}
                {`${countdown.cpHours}h:${countdown.cpMinutes}m:${countdown.cpSeconds}s`}
              </Typography>
            </Grid>

          </ButtonContainer>
        </Box>
      {/* </CardContent> */}
    </CardWrapper>
  );
}
