import axios from "axios";

const API = "https://api.currencyapi.com/v3/latest?apikey=cur_live_IjB7qjBqKggwBVYBNVY37A77UBFWz8eWX0pjDU0s";

export const getRatesData = () =>
    axios.get(API)
        .then(response => response.data);