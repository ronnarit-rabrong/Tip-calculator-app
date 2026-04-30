type InputFieldType = {
  inputEl: HTMLInputElement;
  errorEl: HTMLSpanElement;
};

export class InputField {
  inputEl: HTMLInputElement;
  errorEl: HTMLSpanElement;

  constructor({ inputEl, errorEl }: InputFieldType) {
    this.inputEl = inputEl;
    this.errorEl = errorEl;
  }

  showError(): void {
    this.errorEl.classList.remove("hide");
    this.inputEl.classList.add("error");
  }

  removeError(): void {
    this.errorEl.classList.add("hide");
    this.inputEl.classList.remove("error");
  }
}
