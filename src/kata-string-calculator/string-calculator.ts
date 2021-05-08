class Calculator {
  Add = (stringNumbers?: string): number => {
    if (!stringNumbers) {
      return 0;
    }

    const parts = stringNumbers.replace("\n", ",").split(",");
    const total = parts.reduce((initialValue, part) => {
      return (initialValue = initialValue + parseInt(part));
    }, 0);

    return total;
  };
}

export default Calculator;
