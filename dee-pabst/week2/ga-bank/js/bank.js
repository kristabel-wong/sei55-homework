console.log(`%cCrom laughs at the front end`, 'Font-Family: fantasy; font-size: 14px;');
const bank = {
    checking: 2,
    savings: 100,
    deposit: function(account, amount){
        this[account] = this[account] + amount;
        console.log(`deposited ${amount} into account ${account}`);
        return this[account];
    },
    withdraw: function(account, amount){
        let isSuccess = false;
        // check if account has enough funds to withdraw
        if(this[account] >= amount){
            this[account] = this[account] - amount;
            console.log(`withdrew ${amount} from account ${account}`);
            isSuccess = true;
        } else{
            // check the other acount has enough to withdraw shortfall
            let shortfall = Math.abs(this[account] - amount);
            let otherAccount;
            if(account === 'checking'){
                otherAccount = 'savings';
            }else{
                otherAccount = 'checking';
            }
            // if there is enough in both accounts to cover the withdrawal
            // withdraw all of the first accounts funds
            // withdraw the shortfall from the second
            if(this[otherAccount] >= shortfall){
                // adjust respective balances
                this[account] = this[account] - (amount - shortfall);
                this[otherAccount] = this[otherAccount] - shortfall;
                console.log(`withdrew ${amount - shortfall} from account ${account}`);
                console.log(`withdrew ${shortfall} from account ${otherAccount}`);
                isSuccess = true;
            }
        }
        return isSuccess;
    }
}