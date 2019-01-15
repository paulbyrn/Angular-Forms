import { modelGroupProvider } from "@angular/forms/src/directives/ng_model_group";


export class Employee {

    constructor(
        public firstName: string,
        public middleName: string,
        public lastName: string,
        public isFullTime: boolean,
        public paymentType: string,
        public primaryLanguage: string
    ) {

    }

    lastNameToUpper(value: string) {
        if (value.length > 0) {
            this.lastName = value.charAt(0).toUpperCase() + value.slice(1);
        } else {
            this.lastName = value;
        }
    }
}