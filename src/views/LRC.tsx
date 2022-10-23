import { Component, createEffect, createSignal, Show } from "solid-js";

const LRC: Component = () => {
  const defaultVals = {
    depositedAmount: 100,
    borrowedAmount: 10,
    apyAmount: 1.1,
  };

  const [depositedAmount, setDepositedAmount] = createSignal(
    defaultVals.depositedAmount
  );
  const [borrowedAmount, setBorrowedAmount] = createSignal(
    defaultVals.borrowedAmount
  );
  const [apyAmount, setApyAmount] = createSignal(defaultVals.apyAmount);
  const [daysToRepay, setDaysToRepay] = createSignal(0);
  const [error, setError] = createSignal("");

  createEffect(() => {
    setError("");
    try {
      if (isNaN(depositedAmount())) {
        return setError("Deposited Amount isn't a number");
      }

      if (isNaN(borrowedAmount())) {
        return setError("Borrowed Amount isn't a number");
      }

      if (isNaN(apyAmount())) {
        return setError("APY Amount isn't a number");
      }

      const profitPerYear = (apyAmount() * depositedAmount()) / 100;
      const profitPerDay = profitPerYear / 366;
      setDaysToRepay(borrowedAmount() / profitPerDay);
    } catch (err: any) {
      setError(err);
    }
  });

  return (
    <div>
      <h1 class=" text-xl font-semibold">Loan Repayment Calculator</h1>

      <div class="flex flex-col gap-2 py-2">
        <div class="shadow-highlight flex flex-col gap-2  rounded p-1 border-white border-opacity-10">
          <label for="deposited_amount_input">Deposited Amount</label>
          <input
            class=" bg-gray-900 bg-opacity-50 rounded-sm p-1 shadow-highlight"
            id="deposited_amount_input"
            value={defaultVals.depositedAmount}
            onInput={(e: any) => setDepositedAmount(e.currentTarget.value)}
          />
        </div>

        <div class="shadow-highlight flex flex-col gap-2  rounded p-1 ">
          <label for="borrowed_amount_input">Borrowed Amount</label>
          <input
            class=" bg-gray-900 bg-opacity-50 rounded-sm p-1 shadow-highlight"
            id="borrowed_amount_input"
            value={defaultVals.borrowedAmount}
            onInput={(e: any) => setBorrowedAmount(e.currentTarget.value)}
          />
        </div>

        <div class="shadow-highlight flex flex-col gap-2  rounded p-1 ">
          <label for="apy_amount_input">APY Amount</label>
          <input
            class=" bg-gray-900 bg-opacity-50 rounded-sm p-1 shadow-highlight"
            id="apy_amount_input"
            value={defaultVals.apyAmount}
            onInput={(e: any) => setApyAmount(e.currentTarget.value)}
          />
        </div>

        <div class="shadow-highlight flex flex-col gap-2 bg-gray-900 bg-opacity-10 py-1  rounded p-1 ">
          <Show when={error().length > 0}>
            <div class="shadow-highlight flex flex-col gap-2 text-red-500 bg-red-900 bg-opacity-10 py-2 rounded p-1 ">
              ❌ {error()}
            </div>
          </Show>
          <Show when={error().length <= 0}>
            <table class="border-separate border-spacing-2 rounded-lg border-gray-900">
              <tbody>
                <tr class="border-b shadow-highlight">
                  <td class="">Self-Repayment in Days:</td>
                  <td class="">{daysToRepay()} Days</td>
                </tr>
                <tr class="border-b shadow-highlight">
                  <td class="">Self-Repayment in Months:</td>
                  <td class="">{daysToRepay() / 30} Months</td>
                </tr>
                <tr class="border-b shadow-highlight">
                  <td class="">Self-Repayment in Years:</td>
                  <td class="">{daysToRepay() / 366} Years</td>
                </tr>
              </tbody>
            </table>
          </Show>
        </div>
      </div>
    </div>
  );
};

export default LRC;
