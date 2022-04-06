import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

import { AddNewQuestionDialogComponent } from '../add-new-question-dialog/add-new-question-dialog.component';
import { FormItems } from '../../../models/form';

@Component({
    selector: 'app-add-question-dialog',
    templateUrl: './add-question-dialog.component.html',
    styleUrls: ['./add-question-dialog.component.scss']
})
export class AddQuestionDialogComponent implements OnInit {

    readonly addOnBlur = true;
    readonly separatorKeysCodes = [ENTER, COMMA] as const;

    addQAFormGroup: FormGroup;
    QAList: FormItems[] = [];

    constructor(
        private readonly dialogRef: MatDialogRef<AddQuestionDialogComponent>,
        private readonly formBuilder: FormBuilder,
        private readonly matDialog: MatDialog,
    ) { }

    get addQAFormArray(): FormArray {
        return this.addQAFormGroup.get('addQAFormArray') as FormArray;
    }

    ngOnInit(): void {
        this.initForm();
    }

    onSubmit(): void {
        this.dialogRef.close(this.addQAFormArray.value);
    }

    onClose(): void {
        this.dialogRef.close();
    }

    addAnswerItem(event: MatChipInputEvent, item: FormItems): void {
        const newItem: string = (event.value || '').trim();
        if (newItem) {
            item.answer.push(newItem);
        }
        event.chipInput!.clear();
    }

    removeAnswerItem(removedItem: string, item: FormItems): void {
        const index: number = item.answer.indexOf(removedItem);
        if (index >= 0) {
            item.answer.splice(index, 1);
        }
    }

    showAddNewQuestionModal(): void {
        this.matDialog.open(AddNewQuestionDialogComponent, { width: '600px' }).afterClosed().subscribe((response: FormItems) => {
            if (response) {
                this.QAList.push(response);
                this.addQAFormArray.push(this.formBuilder.group({
                    type: [response.type],
                    question: [response.question],
                    answer: [response.answer, Validators.required],
                }));
            }
        });
    }

    private initForm(): void {
        this.addQAFormGroup = this.formBuilder.group({
            addQAFormArray: this.formBuilder.array([]),
        });

        this.QAList = [
            {
                type: 'PARAGRAPH',
                question: 'Please tell us about yourself',
                answer: '',
            },
            {
                type: 'CHECKBOX',
                question: 'Please select the languages you know',
                answer: ['Angular', 'React', 'C#'],
            },
        ];

        this.QAList.map((item: FormItems) => {
            this.addQAFormArray.push(this.formBuilder.group({
                type: [item.type],
                question: [item.question],
                answer: [item.answer, Validators.required],
            }));
        });
    }
}
