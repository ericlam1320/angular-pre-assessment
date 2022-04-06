import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { QaService } from '../../services/qa.service';
import { FormItems } from '../../models/form';

@Component({
    selector: 'app-form-answers',
    templateUrl: './form-answers.component.html',
    styleUrls: ['./form-answers.component.scss']
})
export class FormAnswersComponent implements OnInit {

    qaData: FormItems[] | null;

    constructor(
        private readonly qaService: QaService,
        private readonly router: Router,
    ) { }

    ngOnInit(): void {
        this.qaData = this.qaService.getQAData();
    }

    backToFormBuilder(): void {
        this.router.navigate(['form/builder']);
    }
}
