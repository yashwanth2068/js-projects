import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
 import {formatCurrency} from'./utils/money.js';

renderOrderSummary();
renderPaymentSummary();