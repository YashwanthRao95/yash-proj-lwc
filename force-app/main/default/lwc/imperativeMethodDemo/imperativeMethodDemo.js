import { LightningElement, api } from 'lwc';
import imperativeCall from '@salesforce/apex/ImperativeMethodLWC.imperativeCall';

export default class ImperativeMethodDemo extends LightningElement {

    accountsList;

    fetchAccount() {
        imperativeCall()
        .then(result => {
            this.accountsList = result;
            console.log(this.accountsList.length);
            console.log(JSON.parse(JSON.stringify(this.accountsList)));
        })
        .catch(error => {
            console.log(error);
        })
    }
}