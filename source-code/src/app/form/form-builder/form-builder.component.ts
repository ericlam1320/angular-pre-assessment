import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddQuestionDialogComponent } from '../dialog/add-question-dialog/add-question-dialog.component';

@Component({
    selector: 'app-form-builder',
    templateUrl: './form-builder.component.html',
    styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

    constructor(
        private readonly matDialog: MatDialog
    ) { }

    ngOnInit(): void {

    }

    public showAddQuestionModal(): void {
        this.matDialog.open(AddQuestionDialogComponent, { width: '600px' });
    }
}
