import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";

import auditIcon from "../../assets/audit.png";
import kycIcon from "../../assets/kyc.png";
import guideIcon from "../../assets/guide.png";
import contractIcon from "../../assets/contract.png";
import logo from "../../assets/FullLogo.png";
import Connect from "./Connect";

import { config } from "../../config";

const Wrapper = styled("div")(({ theme }) => ({
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    h5: {
      fontSize: 20,
      margin: 0,
    },
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
            const data = getCountdown(1651190400)
            setCountdown({
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

  return (
    <Wrapper>
      <Grid container display="flex" justifyContent="space-between" style={{ marginTop: -36, marginBottom: 8 }}>
        <Grid item>
          <a href="https://t.me/BakedBeansMiner" target="__blank">
            <Grid container alignItems="center">
              <img src={auditIcon} alt="" width={36} height={36} />
              <Typography variant="body1">AUDIT</Typography>
            </Grid>
          </a>
        </Grid>
        <Grid item>
          <a href="https://t.me/BakedBeansMiner" target="__blank">
            <Grid container alignItems="center">
              <img src={kycIcon} alt="" width={36} height={36} />
              <Typography variant="body1">KYC</Typography>
            </Grid>
          </a>
        </Grid>
        <Grid item>
          <a href="https://twitter.com/BakedBeansMiner" target="__blank">
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
      <img src={logo} alt="" width={"30%"} style={{ marginTop: 0 }} />
      <Connect responsive={false} />
      <Typography variant="h6" marginTop={2} marginBottom={3}>
        BECOME A CONTENT CREATOR AND EARN 11% BY CREATING CONTENT WITH YOUR COMPOUNDING
      </Typography>
      <LaunchTitle>LAUNCH COUNTDOWN</LaunchTitle>
      <Countdown>
        {`${countdown.days} Days, ${countdown.hours} Hours, ${countdown.minutes} Mins & ${countdown.seconds} Secs`}
      </Countdown>
    </Wrapper>
  );
}
