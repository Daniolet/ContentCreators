import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import copy from "copy-to-clipboard";

import { styled } from "@mui/system";

const CardWrapper = styled(Card)({
  backgroundColor: "transparent",
  marginLeft: "2.5%",
  padding: "1%",
  border: "3px solid white",
  height: "10%",
});

const Input = styled("input")(({ theme }) => ({
  fontSize: 10,
  fontWeight: 300,
  borderRadius: 0,
  border: "0px solid #555",
  background: "transparent",
  width: "90%",
  outline: "none",
  color: theme.palette.text.primary,
}));

const HorizontalBlockWrapper = styled("div")(({ theme }) => ({
  maxWidth: 900,
  // maxHeight: 400,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
  },
}));

const CustomButton = styled("button")(({ theme }) => ({
  fontSize: 10,
  width: "10%",
  borderRadius: 5,
  background: "white",
  border: "1px solid #000",
}));

const copyToClipboard = str => {
  copy(str);
};

export default function ReferralLink({ address }) {
  const link = `${window.origin}?ref=${address}`;

  return (
    <CardWrapper>
      {/* <CardContent> */}
        <HorizontalBlockWrapper>
          <CustomButton onClick={()=>{copyToClipboard(link)}}>copy</CustomButton>
          <Input value={address ? link : ""} readOnly />
          {/* <Typography
            textAlign="center"
            variant="body2"
            marginTop={2}
            paddingX={3}
          >
            Earn 12% of the BUSD from anyone who uses your
            referral link
          </Typography> */}
        </HorizontalBlockWrapper>
      {/* </CardContent> */}
    </CardWrapper>
  );
}
