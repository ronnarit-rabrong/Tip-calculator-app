import { Selector } from "./helper/selector";
import { InputField } from "./helper/inputField";
import { TipField } from "./helper/tipField";
import { Calculator } from "./helper/calculator";
import { Display } from "./helper/display";

const display = new Display();
const tipCalculator = new Calculator();
const btnReset = Selector.getElement("[data-btn-reset]");
const billFiedls = new InputField({
  inputEl: Selector.getElement("[data-field-bill-input]") as HTMLInputElement,
  errorEl: Selector.getElement("[data-field-bill-error]") as HTMLSpanElement,
});

const countFields = new InputField({
  inputEl: Selector.getElement("[data-field-count-input ]") as HTMLInputElement,
  errorEl: Selector.getElement("[data-field-count-error]") as HTMLSpanElement,
});

const tipField = new TipField({
  btnAll: Selector.getElementAll("[data-field-tip-alls]") as HTMLButtonElement[],
  btnNormal: Selector.getElementAll("[data-field-tip]") as HTMLButtonElement[],
  btnCustom: Selector.getElement("[data-field-tip-custom]") as HTMLButtonElement | HTMLInputElement,
});

document.addEventListener("DOMContentLoaded", () => {
  /** -------------------------------------------------
    bill
   ---------------------------------------------------*/
  billFiedls.inputEl.addEventListener("keyup", () => {
    const billVal = parseInt(billFiedls.inputEl.value);
    const billValisNaN = Number.isNaN(billVal);
    if (!billValisNaN) {
      tipCalculator.setBill(billVal);
      tipCalculator.calc();
    }
  });

  billFiedls.inputEl.addEventListener("focusout", () => {
    const val = parseInt(billFiedls.inputEl.value);
    if (val === 0) {
      return billFiedls.showError();
    }
  });

  /** -------------------------------------------------
    count
   ---------------------------------------------------*/
  countFields.inputEl.addEventListener("keyup", () => {
    const countVal = parseInt(countFields.inputEl.value);
    const countValisNaN = Number.isNaN(countVal);
    if (!countValisNaN) {
      tipCalculator.setCount(countVal);
      tipCalculator.calc();
    }
  });

  countFields.inputEl.addEventListener("focusout", () => {
    const val = parseInt(countFields.inputEl.value);
    if (val === 0) {
      return countFields.showError();
    }
  });

  /** -------------------------------------------------
    tip
   ---------------------------------------------------*/

  tipField.btnNormal.forEach((btn) => {
    btn.addEventListener("focus", (e: Event) => {
      tipField.removeCustomTip();
      tipField.showActive(e);
      tipField.select(e);
      tipCalculator.setTip(tipField.percent);
      tipCalculator.calc();
    });
  });

  tipField.btnCustom.addEventListener("focusin", (e) => {
    const min = 0;
    const max = 0;
    tipField.showActive(e);
    tipField.createCustomTip(min, max);
    tipField.btnCustom.addEventListener("keyup", () => {
      tipField.select(e);
      tipCalculator.setTip(tipField.percent);
      tipCalculator.calc();
    });
  });

  /** -------------------------------------------------
    reset
   ---------------------------------------------------*/
  btnReset.addEventListener("click", () => {
    billFiedls.removeError();
    countFields.removeError();
    tipField.removeActive();
    tipField.removeCustomTip();
    tipCalculator.removeCache();
    display.removeRusult();
  });
});
