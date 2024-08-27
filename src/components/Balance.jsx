import CountUp from "react-countup";
import React, { useMemo } from "react";

function countDecimalPlaces(number) {
  if (Number.isInteger(number)) {
    return 0;
  } else {
    // eslint-disable-next-line prefer-destructuring
    const decimalPart = number.toString().split(".")[1];
    return decimalPart ? decimalPart.length : 0;
  }
}

const Balance = ({
                   value,
                   color = "#FFD600",
                   decimals,
                   unit,
                   prefix,
                   fontSize = "14px",
                   ...props
                 }) => {
  const prefixProp = useMemo(() => (prefix ? { prefix } : {}), [prefix]);
  const suffixProp = useMemo(() => (unit ? { suffix: unit } : {}), [unit]);

  const precision = useMemo(() => {
    if(!decimals && decimals !== 0){
      let roundedNumber = countDecimalPlaces(+value);
      return roundedNumber < 10 ? roundedNumber : 10
    }
    return decimals

  }, [decimals, value])

  return (
    <CountUp
      start={0}
      preserveValue
      delay={0}
      end={value}
      {...prefixProp}
      {...suffixProp}
      decimals={precision}
      duration={1}
      separator=","
    >
      {({ countUpRef }) => (
        <div className="text-primary" style={{ fontSize, color }} {...props}>
          <span ref={countUpRef} />
        </div>
      )}
    </CountUp>
  );
};

export default Balance;
