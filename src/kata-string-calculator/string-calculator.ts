class Calculator {
  Add = (stringNumbers?: string): number => {
    if (!stringNumbers) {
      return 0;
    }

    let delimiter = ",";
    if (stringNumbers.search("//") >= 0) {
      delimiter = stringNumbers.charAt(stringNumbers.search("//") + 2);
      stringNumbers = stringNumbers.replace("//", "");
    }

    const parts = stringNumbers.replace("\n", delimiter).split(delimiter);
    const total = parts.reduce((initialValue, part) => {
      let number = !part ? 0 : parseInt(part);
      if (Math.sign(number) < 0) {
        throw new Error("negatives not allowed");
      }
      return (initialValue = initialValue + number);
    }, 0);

    return total;
  };
}

export default Calculator;
