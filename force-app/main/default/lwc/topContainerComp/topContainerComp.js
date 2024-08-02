import { LightningElement, api } from 'lwc';

export default class TopContainerComp extends LightningElement {
    @api abbrName = 'YG';
    @api personName = 'Yashwanth Rao Gujja';
    @api personIntro = 'Hello this is Yashwanth! Welcome to my custom built component library!!';
    selectedComp;

    get options() {
        return [
            { label: 'Communication - Parent & Child', value: 'Component 1' },
            { label: 'Communication - Unrelated Components (LMS)', value: 'Component 2' },
            { label: 'Wired and Imperative Methods', value: 'Component 3' },
        ];
    }

    get parentToChildComp() {
        return this.selectedComp == 'Component 1';
    }

    get lmpComp() {
        return this.selectedComp == 'Component 2'
    }

    handleCompChange(event) {
        this.selectedComp = event.detail.value;
        console.log('Selected Component --- ', this.selectedComp);
    }
}