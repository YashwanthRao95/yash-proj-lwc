import { LightningElement, wire } from 'lwc';
import { createMessageContext, subscribe, unsubscribe, MessageContext } from 'lightning/messageService';
import MY_MESSAGE_CHANNEL from '@salesforce/messageChannel/DifCompComm__c';

export default class LmsCompTwo extends LightningElement {
    counter;
    message;
    subscription = null;

    @wire(MessageContext)
    messageContext;

    connectedCallback() {
        this.subscribeToMessageChannel();
    }

    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                MY_MESSAGE_CHANNEL,
                (message) => this.handleMessage(message)
            );
        }
    }

    handleMessage(message) {
        this.counter = message.counter;
        this.message = message.message;
    }

    disconnectedCallback() {
        this.unsubscribeFromMessageChannel();
    }

    unsubscribeFromMessageChannel() {
        if (this.subscription) {
            unsubscribe(this.subscription);
            this.subscription = null;
        }
    }
}