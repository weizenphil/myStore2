export class BillingInfo {
    fullname: string;
    address: string;
    creditCardNumber: string;
    total: number;
  
    constructor() {
      this.fullname = '';
      this.address = '';
      this.creditCardNumber = '';
      this.total = 0;
    }
  }
  