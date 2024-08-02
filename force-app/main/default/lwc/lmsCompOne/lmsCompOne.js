import { LightningElement, wire } from 'lwc';
import { createMessageContext, publish, MessageContext } from 'lightning/messageService';
import MY_MESSAGE_CHANNEL from '@salesforce/messageChannel/DifCompComm__c';

export default class LmsCompOne extends LightningElement {
    counter = 0;

    @wire(MessageContext)
    messageContext;

    publishMessage() {
        this.counter += 1;
        const message = {
            message: 'Hello, from another world!',
            counter: this.counter
        };
        publish(this.messageContext, MY_MESSAGE_CHANNEL, message);
    }
}