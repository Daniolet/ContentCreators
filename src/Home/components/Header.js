import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

import auditIcon from "../../assets/audit.png";
import kycIcon from "../../assets/kyc.png";
import guideIcon from "../../assets/guide.png";
import contractIcon from "../../assets/contract.png";
import logo from "../../assets/FullLogo.png";
import fiatIcon from "../../assets/fiat.png";
import pcsIcon from "../../assets/pcs.png";
import Connect from "./Connect";

import { config } from "../../config";
import { WindowSharp } from "@mui/icons-material";

const Wrapper = styled("div")(({ theme }) => ({
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    h5: {
      fontSize: 20,
      margin: 0,
    },
  },
}));

const CButton = styled(Button)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const ButtonContainer = styled(Grid)(({ theme }) => ({
  margin: 0,
  [theme.breakpoints.down("md")]: {
    padding: 25,
  },
}));

const LaunchTitle = styled("h3")(({ theme }) => ({
  // color: ${props => props.theme.textPrimary};
  width: "100%",
  textAlign: "center",
  fontWeight: "bolder",
}));

const Countdown = styled("h3")(({ theme }) => ({
  // color: ${props => props.theme.textPrimary};
  width: "100%",
  textAlign: "center",
  fontWeight: "bolder",
  [theme.breakpoints.down("md")]: {
    fontSize: 15,
  },
}));

export default function Header() {
  const [countdown, setCountdown] = useState({
    alive: true,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const getCountdown = (deadline) => {
    const now = Date.now() / 1000;
    const total = deadline - now;
    const seconds = Math.floor((total) % 60);
    const minutes = Math.floor((total / 60) % 60);
    const hours = Math.floor((total / (60 * 60)) % 24);
    const days = Math.floor(total / (60 * 60 * 24));

    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
        try {
            const data = getCountdown(1651600800)
            setCountdown({
                alive: data.total > 0,
                days: data.days,
                hours: data.hours,
                minutes: data.minutes,
                seconds: data.seconds
            })
        } catch (err) {
            console.log(err);
        }
    }, 1000);

    return () => clearInterval(interval);
  }, [])

  const gotoLink = (link) => {
    // window.location.href= link;
    window.open(link);
  }
  
  return (
    <Wrapper>
      <Grid container display="flex" justifyContent="space-between" style={{ marginTop: -36, marginBottom: 8 }}>
        <Grid item>
          <a href="https://t.me/headdev" target="__blank">
            <Grid container alignItems="center">
              <img src={auditIcon} alt="" width={36} height={36} />
              <Typography variant="body1">AUDIT</Typography>
            </Grid>
          </a>
        </Grid>
        <Grid item>
          <a href="https://t.me/headdev" target="__blank">
            <Grid container alignItems="center">
              <img src={kycIcon} alt="" width={36} height={36} />
              <Typography variant="body1">KYC</Typography>
            </Grid>
          </a>
        </Grid>
        <Grid item>
          <a href="https://t.me/headdev" target="__blank">
            <Grid container alignItems="center">
              <img src={guideIcon} alt="" width={36} height={36} />
              <Typography variant="body1">GUIDE PAPER</Typography>
            </Grid>
          </a>
        </Grid>
        <Grid item>
          <a href={config.scanLink} target="__blank">
            <Grid container alignItems="center">
              <img src={contractIcon} alt="" width={36} height={36} />
              <Typography variant="body1">CONTRACT</Typography>
            </Grid>
          </a>
        </Grid>
      </Grid>
      <Grid container display="flex" justifyContent="space-around" alignItems="center" margin="0 auto">
        <Grid width={"20%"} minWidth={"120px"} zIndex={"-1"}>
          {/* <Button
            variant="contained"
            color="comingsoon"
            fullWidth
          >
            ARTWORK/NFT<br></br>
            (COMMING SOON)
          </Button> */}
        </Grid>
        <img src={logo} alt="" width={"30%"} style={{ marginTop: 0, minWidth: "192px" }} />
        <Grid width={"20%"} minWidth={"120px"} zIndex={"-1"}>
          <CButton
            variant="contained"
            color="comingsoon"
            fullWidth
          >
            STABLE CERTIFICATE<br></br>
            (COMMING VERY SOON)
          </CButton>
        </Grid>
      </Grid>
      <Connect responsive={false} />
      <Typography variant="h6" marginTop={2} marginBottom={3}>
        BECOME A CONTENT CREATOR AND EARN UP TO 11% THROUGH CREATING CONTENTS AND WITH COMPOUNDING.
      </Typography>
      {countdown.alive && 
        <>
        <LaunchTitle>LAUNCH COUNTDOWN</LaunchTitle>
        <Countdown>
          {`${countdown.days} Days, ${countdown.hours} Hours, ${countdown.minutes} Mins & ${countdown.seconds} Secs`}
        </Countdown>
        </>
      }

      <ButtonContainer container>
        <Grid item flexGrow={1} marginRight={1} marginTop={1} width={"20%"} style={{ display: 'flex'}}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => gotoLink("https://app.bogged.finance/")}
          >
            <img src={fiatIcon} alt="" width={"20px"} style={{marginRight: "5px"}}></img>
            BUY BNB FIAT
          </Button>
        </Grid>
        <Grid item flexGrow={1} marginLeft={1} marginTop={1} width={"20%"} style={{ display: 'flex', justifyContent: 'flex-end'}}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => gotoLink("https://pancakeswap.finance/swap")}
          >
            SWAP TO BUSD
            <img src={pcsIcon} alt="" width={"20px"} style={{marginLeft: "5px"}}></img>
          </Button>
          
        </Grid>
      </ButtonContainer>
    </Wrapper>
  );
}
