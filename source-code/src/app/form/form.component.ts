import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent {

    constructor(
        private readonly router: Router
    ) { }

    public moveToBuilder(): void {
        this.router.navigate(['/form/builder']);
    }
}
