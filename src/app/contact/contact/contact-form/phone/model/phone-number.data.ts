/**
 * Structure d'un numéro de téléphone.
 */
export class PhoneNumber {

  /**
   * Constructeur d'un numéro de téléphone.
   * @param countryPrefix préfixe du pays
   * @param phoneNumber numéro de téléphone
   */
  constructor(
    public countryPrefix: string,
    public phoneNumber: string
  ) { }
}
