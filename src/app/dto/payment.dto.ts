export class Payment {
  
  constructor(
    public creditCardNumber: string,
    public cardHolder: string,
    public expirationDate: Date,
    public amount: number,
    public securityCode?: string
  ) {}
  
}