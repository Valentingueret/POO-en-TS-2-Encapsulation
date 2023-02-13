import  assert  from  'assert';


class  BankCustomer {


    private  nameCustomer:  string;

    private  pinSecret:  string;

    constructor(nameCustomer: string, pinSecret: string) {
        this.nameCustomer = nameCustomer;
        this.pinSecret = pinSecret;
    }

    public getName(): void {
        this.nameCustomer
    }

    public verifyPinInput(pinSecret: string): boolean {
        return pinSecret === this.pinSecret ? true : false;
    }

}


// Tests


const customer = new BankCustomer('John Doe', '3579');

assert.equal(typeof customer.getName, 'function');

assert.equal(typeof customer.verifyPinInput, 'function');

assert.equal(customer.getName(), 'John Doe');

assert.ok(customer.verifyPinInput('3579'));