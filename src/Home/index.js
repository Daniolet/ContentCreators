import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";

import Connect from "./components/Connect";
import Header from "./components/Header";
import BakeCard from "./components/BakeCard";
import CompareForks from "./components/CompareForks";
import ContractInfo from "./components/ContractInfo";
import NutritionFacts from "./components/NutritionFacts";
import ReferralLink from "./components/ReferralLink";
import { useAuthContext } from "../providers/AuthProvider";
import Footer from "./components/Footer";

const Wrapper = styled("div")(({ theme }) => ({
  maxWidth: 900,
  margin: "0 auto",
  // border: "3px solid blue",
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
  },
}));

const HorizontalBlockWrapper = styled("div")(({ theme }) => ({
  maxWidth: 900,
  // margin: "0 auto",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  // border: "3px solid red",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const VerticalBlockWrapper = styled("div")(({ theme }) => ({
  width: "37%",
  marginRight: "1%",
  display: "flex",
  flexDirection: "column",
  // border: "3px solid green",
  [theme.breakpoints.down("md")]: {
    margin: "1% auto",
    width: "90%",
  },
}));

const TextWrapper = styled("div")(({ theme }) => ({
  textAlign: "center",
  margin: "2% 3%",
  // border: "3px solid green",
  [theme.breakpoints.down("md")]: {
    h5: {
      fontSize: 20,
      margin: 0,
    },
  },
}));


export default function Home() {
  const { address } = useAuthContext();

  return (
    <Wrapper>
      <Connect />
      <Header />
      <HorizontalBlockWrapper>
        <ContractInfo />
        <NutritionFacts />
      </HorizontalBlockWrapper>
      <TextWrapper>
        <Typography variant="body7" color="green">
          IS PAYING 11% ROI DAILY SUSTAINABLE? YES, BY GIVING 5% ON EVERY FIRST AND NEW DEPOSIT AND NOT PAYING REFERRALS ON COMPOUNDING, THIS WILL GIVE EVERYONE EQUAL OPPORTUNITY, NO MATTER WHEN YOU ENTER. WE ALSO ADD 6% TAX ON WITHDRAWS TO SUPPORT THE CONTRACT.
        </Typography>
        {/* <Typography variant="body7">
          We strongly advise everyone investing into our platform to compound for a minimum of 5 days and claim the 6th day, which was perfectly calculated to be sustainable by an expert for our own platform.
        </Typography> */}
      </TextWrapper>
      <HorizontalBlockWrapper>
        <VerticalBlockWrapper>
          <BakeCard />
          {/* <Typography variant="body6">
            REFERRAL LINK
          </Typography>
          <ReferralLink address={address} />
          <Typography fontSize={10} textAlign="center">
            Earn 12% of the BUSD used to pacticipate from anyone who uses your referral link. There is 5% tax on referral's 12% earnings.
          </Typography> */}
        </VerticalBlockWrapper>
        <Typography className="typo-note" variant="body6" width={"24%"} color="green" textAlign="center">
          NOTE: WE DON'T PAY REFERRAL ON COMPOUNDING, WE ONLY PAY REFERRAL ON EVERY NEW DEPOSIT. THESE IS IN ORDER TO KEEP OUR CONTRACT BALANCE STRONG AND STABLE
        </Typography>

        <VerticalBlockWrapper>
          <CompareForks />
          <Typography variant="body6" style={{marginLeft: "2.5%", marginTop: "10px"}}>
            REFERRAL LINK
          </Typography>
          <ReferralLink address={address} />
          <Typography fontSize={10} textAlign="center" style={{marginLeft: "2.5%"}}>
            Earn 5% of the BUSD used to pacticipate from anyone who uses your referral link.
          </Typography>
        </VerticalBlockWrapper>

      </HorizontalBlockWrapper>
      <Footer />
    </Wrapper>
  );
}
