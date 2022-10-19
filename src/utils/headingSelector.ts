export const headingSelector = (classType: string) => {
  const texts = {
    planType: "",
    planPrice: "",
    planRecurrence: "",
  };
  switch (classType) {
    case "tier-zero":
      texts.planType = "Starter";
      texts.planPrice = "Free";
      texts.planRecurrence = "per month";
      break;
    case "tier-one":
      texts.planType = "Pro";
      texts.planPrice = "$49";
      texts.planRecurrence = "per month";
      break;
    case "tier-two":
      texts.planType = "Teams";
      texts.planPrice = "$99";
      texts.planRecurrence = "per month";
      break;
  }

  return texts;
};
