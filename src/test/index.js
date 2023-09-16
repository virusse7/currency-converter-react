

{
  const welcome = () => {
    console.log("Hello Dev!");
  };

  const calculateResult = (amount, currency) => {
    const rateEUR = 4.46;
    const rateUSD = 4.01;
    const rateARS = 0.015;

    switch (currency) {
      case "EUR":
        return amount / rateEUR;

      case "USD":
        return amount / rateUSD;

      case "ARS":
        return amount / rateARS;

    };
  };

  const onFormSubmit = (event, selectCurrency) => {
    event.preventDefault();

    const resultElement = document.querySelector(".js-result");
    const amountElement = document.querySelector(".js-amount");
    const amount = amountElement.value;
    const currency = selectCurrency.value;
    const result = calculateResult(amount, currency);

    resultElement.innerHTML = ` ${result.toFixed(2)} ${currency}`;

    selectCurrency.addEventListener("change", () => {
      resultElement.innerText = "";
    });
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");
    const selectCurrency = document.querySelector(".js-selectCurrency");

    formElement.addEventListener("submit", (event) => {
      onFormSubmit(event, selectCurrency)
    });

    welcome();
  };

  init();
}
