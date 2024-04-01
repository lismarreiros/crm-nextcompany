export default class ValidationCpforCnpj {
  public static validateInputCPF(value: string): boolean {
    const cleanValue = value.replace(/[^\d]+/g, '');
    const cpfDigits = cleanValue.split('').map((el) => +el);
    const rest = (count: number): number => {
      return (((cpfDigits.slice(0, count - 12).reduce((soma, el, index) => soma + el * (count - index), 0) * 10) % 11) % 10);
    };
    return rest(10) === cpfDigits[9] && rest(11) === cpfDigits[10];
  }

  // validar cpf ou cnpj
  public static validateCpfOrCnpj(cpfOrCnpj: string): boolean {
    const cleanValue = cpfOrCnpj.replace(/[^\d]+/g, '');
    if (cleanValue.length <= 11) {
      return ValidationCpforCnpj.validateInputCPF(cleanValue);
    } else {
      return  ValidationCpforCnpj.validateInputCnpj(cleanValue);
    }
  }

  // validar os dígitos do cnpj
  // todo: resolver validação do CNPj
  // private static validateDigitsCNPJ(digits: number[], length: number, weights: number[]): boolean {
  //   const calcDigit = (start: number, end: number): number => {
  //     let sum = 0;
  //     for (let i = start; i <= end; i++) {
  //       sum += digits[i] * weights[i - start];
  //     }
  //     const remainder = sum % 11;
  //     return remainder < 2 ? 0 : 11 - remainder;
  //   };

  //   const firstDigit = calcDigit(0, length - 2) + 1;
  //   const secondDigit = calcDigit(1, length - 1) + 1;

  //   return digits[length - 2] === firstDigit && digits[length - 1] === secondDigit;
  // }

  public static validateInputCnpj(cnpj: string): boolean {
    const cnpjDigits = cnpj.split('').map((el) => Number(el));
    // return ValidationCpforCnpj.validateDigitsCNPJ(cnpjDigits, 14, [5, 6, 7, 8, 9, 2, 3, 4, 5, 6, 7, 8, 9]);
    return cnpjDigits.length > 0;
  }
}
