export class Selector {
  static getElement(keyword: string) {
    const element = document.querySelector(keyword);
    if (!element) throw new Error(`${keyword} element is not found`);
    return element;
  }

  static getElementAll(keyword: string) {
    const elements = Array.from(document.querySelectorAll(keyword) || []);
    if (elements.length === 0) throw new Error(`${keyword} element is not found`);
    return elements;
  }
}
