export const imageSelector = (cardType: string) => {
  let image = {
    class: "",
    alt: "",
  };

  switch (cardType) {
    case "tier-zero":
      image.class = "tier0.svg";
      image.alt = "Person meditating";
      break;
    case "tier-one":
      image.class = "tier1.svg";
      image.alt = "Smiling person";
      break;
    case "tier-two":
      image.class = "tier2.svg";
      image.alt = "Group of people having fun";
      break;
  }

  return image;
};
