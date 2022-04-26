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
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
  },
}));

const HorizontalBlockWrapper = styled("div")(({ theme }) => ({
  maxWidth: 900,
  margin: "0 auto",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  // border: "3px solid red",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const VerticalBlockWrapper = styled("div")(({ theme }) => ({
  width: "50%",
  marginRight: "5%",
  display: "flex",
  flexDirection: "column",
  // border: "3px solid green",
  [theme.breakpoints.down("sm")]: {
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
        <Typography variant="body6">
          IS PAYING 11% ROI DAILY SUSTAINABLE? YES, BY TAKING 5% TAX OFF REFERRAL'S 12% IN ORDER TO GIVE BACK TO OUR PARTICIPATORS/INVESTORS DIRECTLY AND FOR SUSTAINABILITY OF OUR PLATFORM.
        </Typography>
        <br></br>
        <Typography variant="body7">
          We strongly advise everyone participating in our platform to compound for 5 days and claim the 6th day, which was perfectly calculated to be sustainable by an expert for our own platform.
        </Typography>
      </TextWrapper>
      <HorizontalBlockWrapper>
        <VerticalBlockWrapper>
          <BakeCard />
          <Typography variant="body6">
            REFERRAL LINK
          </Typography>
          <ReferralLink address={address} />
          <Typography fontSize={10} textAlign="center">
            Earn 12% of the BUSD used to pacticipate from anyone who uses your referral link. There is 5% tax on referral's 12% earnings.
          </Typography>
        </VerticalBlockWrapper>
        <CompareForks />
      </HorizontalBlockWrapper>
      <Footer />
    </Wrapper>
  );
}
