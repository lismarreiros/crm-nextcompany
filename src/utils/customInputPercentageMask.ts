export default class CustomInputPercentageMask {
  public static porcentagem(value: string): string {
    let cleanedValue = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    cleanedValue = cleanedValue.replace(/(\d+)(\d{2})$/, '$1,$2'); // Adiciona a vírgula para separar os centavos
    cleanedValue = cleanedValue.replace(/\d(?=(\d{3})+(?!\d))/g, '$&.'); // Adiciona os pontos para separar os milhares
    return cleanedValue; // Retorna o valor formatado
  }
}
