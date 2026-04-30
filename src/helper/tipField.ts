type TipFieldType = {
  btnAll: HTMLInputElement[];
  btnNormal: HTMLInputElement[];
  btnCustom: HTMLInputElement;
};

export class TipField {
  btnAll: HTMLInputElement[];
  btnNormal: HTMLInputElement[];
  btnCustom: HTMLInputElement;
  percent: number;

  constructor({ btnAll, btnNormal, btnCustom }: TipFieldType) {
    this.btnAll = btnAll;
    this.btnNormal = btnNormal;
    this.btnCustom = btnCustom;
    this.percent = 0;
  }

  select(e: Event): void {
    const btnTaret = e.target as HTMLInputElement;
    const percentVal = parseFloat(btnTaret.value.replace("%", ""));
    const percentValIsNaN = Number.isNaN(percentVal);
    if (!percentValIsNaN) {
      this.percent = percentVal;
    }
  }

  showActive(e: Event): void {
    const btnTaret = e.target as HTMLInputElement;
    this.btnAll.forEach((btn) => btn.classList.remove("active"));
    btnTaret.classList.add("active");
  }

  removeActive(): void {
    this.btnAll.forEach((btn) => btn.classList.remove("active"));
  }

  createCustomTip(min: number, max: number): void {
    this.btnCustom.setAttribute("value", "");
    this.btnCustom.setAttribute("type", "number");
    this.btnCustom.setAttribute("placeholder", "0");
    this.btnCustom.setAttribute("min", min.toString());
    this.btnCustom.setAttribute("max", max.toString());
  }

  removeCustomTip(): void {
    this.btnCustom.setAttribute("type", "button");
    this.btnCustom.removeAttribute("min");
    this.btnCustom.removeAttribute("max");
    this.btnCustom.setAttribute("value", "Custom");
  }
}
