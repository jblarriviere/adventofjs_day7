export const computeTip = (bill: string, tipRate: number) => {
    const billDollars = Number(bill);
    if(isNaN(billDollars) || billDollars < 0) {
      return 0;
    }
    return billDollars * tipRate / 100;
  }
  
export const computeTotal = (billStr: string, tipRate: number, people: string) => {
    const bill = Number(billStr);
    const nbPeople = Number(people);
  
    if(isNaN(bill) || isNaN(nbPeople) || !Number.isInteger(nbPeople)) {
      return 0;
    }
  
    return bill * (1 +  tipRate / 100)/nbPeople;
  }