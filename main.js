import { o, html, h, computed } from "https://unpkg.com/sinuous?module";

const App = () => {
  const depositedAmount = o(0);
  const borrowAmount = o(0);
  const apyAmount = o(0);

  const amountOfDays = o(0);
  const error = o("");
  const firstUse = o(false);

  const ouputComponent = computed(() => {
    if (firstUse()) {
      return html`
        <pre>
          <code>
            ${error().length > 0
          ? error()
          : ` A loan of 300 USD of takes 10 DAYS to be paid.`}
          </code>
        </pre>
      `;
    } else {
      return html``;
    }
  });

  function calculate() {
    console.log(firstUse());

    firstUse(true);
  }

  return html`<div class="container">
    <hr />
    <div class="row">
      <div class="column">
        <h4>Alchemix Loan Repayment Time Calculator</h4>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <pre><code>
          ⚠️ The calculator is in alpha.
        </code></pre>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="column">
        <fieldset>
          <label for="deposited_amount">Deposited Amount</label>
          <input
            oninput=${(ev) => {
              console.log(ev.target.value);
              depositedAmount(ev.target.value);
            }}
            type="text"
            placeholder="1.1"
            id="deposited_amount"
          />
          <label for="borrowed_amount">Borrowed Amount</label>
          <input type="text" placeholder="1.1" id="borrowed_amount" />
          <label for="vault_apy">Vault APY</label>
          <input type="text" placeholder="1.1" id="vault_apy" />
          <button onclick=${calculate} class="button-primary">Calculate</button>

          ${depositedAmount}
        </fieldset>
      </div>
    </div>
  </div> `;
};

document.body.append(App());
