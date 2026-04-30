import { Display } from "./display";

export class Calculator {
  bill: number | null;
  count: number | null;
  tip: number | null;

  constructor() {
    this.bill = null;
    this.count = null;
    this.tip = null;
  }

  setBill(bill: number): void {
    this.bill = bill;
  }

  setCount(count: number): void {
    this.count = count;
  }

  setTip(tip: number): void {
    this.tip = tip;
  }

  removeCache(): void {
    this.bill = null;
    this.count = null;
    this.tip = null;
  }

  calc() {
    if (this.bill !== null && this.count !== null && this.tip !== null) {
      const tipPercentage = this.tip / 100;
      const totalTip = this.bill * tipPercentage;
      const amount = totalTip / this.count;
      const total = (this.bill + totalTip) / this.count;
      const display = new Display();
      display.showResult(amount.toFixed(2), total.toFixed(2));
    }
  }
}
