import React from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrentChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm ${className} `}>
      <div className="w-1/2">
        <label className="text-black font-bold mb-2 inline-block">
          {label}
        </label>
        <input
          type="number"
          className="outline-none border-b border-gray-300 w-full"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
    </div>
  );
}
export default InputBox;
