import { Display } from "./display";

const display = new Display();
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
    const bill = this.bill;
    const count = this.count;
    const tip = this.tip;
    if (bill !== null && count !== null && tip !== null) {
      const tipPercentage = tip / 100;
      const totalTip = bill * tipPercentage;
      const amount = totalTip / count;
      const total = (bill + totalTip) / count;
      display.showResult(amount.toFixed(2), total.toFixed(2));
    }
  }
}
