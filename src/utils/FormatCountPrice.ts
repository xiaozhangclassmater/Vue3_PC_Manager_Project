function FormatCountPrice(PriceStr: string) {
  let PriceStrLength: number = PriceStr.length;
  const FormatArray = PriceStr.split("");
  while (PriceStrLength - 3 > 0) {
    FormatArray.splice(PriceStrLength - 3, 0, ",");
    PriceStrLength -= 3;
  }
  return FormatArray.join("");
}

export default FormatCountPrice;
