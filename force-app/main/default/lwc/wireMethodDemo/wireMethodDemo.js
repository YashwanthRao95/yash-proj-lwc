import { LightningElement, wire } from 'lwc';
import getAccountChilds from '@salesforce/apex/ImperativeMethodLWC.conAndOppLists'

export default class WireMethodDemo extends LightningElement {

    conList = [];
    oppList = [];

    @wire(getAccountChilds)
    getConAndOppList({error, data}) {
        if(data) {
            this.conList = data.contactList;
            this.oppList = data.oppList;
        } else if(error) {
            console.log(error)
        }
    }
}