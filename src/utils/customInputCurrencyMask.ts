export default class CustomInputCurrencyMask {
  public static valor(value: string): string {
    let cleanedValue = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    cleanedValue = cleanedValue.replace(/(\d+)(\d{2})$/, '$1,$2'); // Adiciona a vírgula para separar os centavos
    cleanedValue = cleanedValue.replace(/\d(?=(\d{3})+(?!\d))/g, '$&.'); // Adiciona os pontos para separar os milhares
    cleanedValue = 'R$ ' + cleanedValue; // Adiciona o símbolo de moeda (R$)
    return cleanedValue; // Retorna o valor formatado
  }
}
