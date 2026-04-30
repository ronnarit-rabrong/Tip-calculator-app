import { Selector } from "./selector";

export class Display {
  amountEl: HTMLParagraphElement;
  totalEl: HTMLParagraphElement;

  constructor() {
    this.amountEl = Selector.getElement("[data-amount]") as HTMLParagraphElement;
    this.totalEl = Selector.getElement("[data-total]") as HTMLParagraphElement;
  }

  showResult(amount: string, total: string): void {
    this.amountEl.textContent = `$${amount}`;
    this.totalEl.textContent = `$${total}`;
  }

  removeRusult(): void {
    this.amountEl.textContent = "$0.00";
    this.totalEl.textContent = "$0.00";
  }
}
