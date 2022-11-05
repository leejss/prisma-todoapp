import { styled } from "@root/stitches.config";

const Button = styled("button", {
  backgroundColor: "#FBAB7E",
  backgroundImage: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
  color: "White",
  padding: "4px 8px",
  borderRadius: "8px",
  fontWeight: "700",
  "&:hover": {
    boxShadow: "0 0 5px rgba(0,0,0,0.5)",
  },
});

export default Button;
