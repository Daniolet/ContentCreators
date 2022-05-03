import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";

const BnbInput = styled("input")({
  variant: "body6",
  padding: "1px 50% 1px 1px",
  textAlign: "right",
  borderRadius: 3,
  border: "1px solid #000",
  background: "transparent",
  width: "100%",
  outline: "none",
  "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
    WebkitAppearance: "none",
    margin: 0,
    MozAppearance: "textfield",
  },
});

export default function PriceInput({ value, max, onChange = () => {} }) {
  // const [valueBUSD, setValueBUSD] = useState(value);
  
  const setMax = () => {
    onChange(max);
    // setValueBUSD(max);
  };

  return (
    <Box width="70%" display="flex" alignItems="center" position="relative">
      <BnbInput
        type="number"
        min={0}
        max={max}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <Typography
        variant="body6"
        position="absolute"
        right="30%"
      >
        BUSD
      </Typography>
      <Typography
        variant="body7"
        position="absolute"
        right="5%"
        onClick={()=>{setMax()}}
      >
        MAX
      </Typography>
    </Box>
  );
}
