import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { AddQuestionDialogComponent } from '../dialog/add-question-dialog/add-question-dialog.component';
import { FormItems } from '../../models/form';
import { QaService } from '../../services/qa.service';

@Component({
    selector: 'app-form-builder',
    templateUrl: './form-builder.component.html',
    styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent {

    constructor(
        private readonly matDialog: MatDialog,
        private readonly router: Router,
        private readonly qaService: QaService,
    ) { }

    public showAddQuestionModal(): void {
        this.matDialog.open(AddQuestionDialogComponent, { width: '600px' }).afterClosed().subscribe((response: FormItems[]) => {
            if (response) {
                this.qaService.setQAData(response);
                this.router.navigate(['form/answers']);
            }
        });
    }
}
