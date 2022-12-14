export const buttonTextSelector = (cardType: string) => {
  let text = "";

  switch (cardType) {
    case "tier-zero":
      text = "Get Started";
      break;
    case "tier-one":
      text = "Become a Pro";
      break;
    case "tier-two":
      text = "Get Teams";
      break;
    case "button-modal":
      text = "Submit";
      break;
    case "disabled-button":
      text = "Submit";
      break;
  }

  return text;
};
