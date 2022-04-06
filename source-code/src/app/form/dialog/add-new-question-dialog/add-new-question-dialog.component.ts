import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
    selector: 'app-add-new-question-dialog',
    templateUrl: './add-new-question-dialog.component.html',
    styleUrls: ['./add-new-question-dialog.component.scss']
})
export class AddNewQuestionDialogComponent implements OnInit {

    readonly addOnBlur = true;
    readonly separatorKeysCodes = [ENTER, COMMA] as const;

    questionAnswerType = [{ id: 'PARAGRAPH', text: 'Paragraph' }, { id: 'CHECKBOX', text: 'Checkbox' }];
    addNewQAFormGroup: FormGroup;

    constructor(
        private readonly dialogRef: MatDialogRef<AddNewQuestionDialogComponent>,
        private readonly formBuilder: FormBuilder,
    ) { }

    ngOnInit(): void {
        this.initForm();
    }

    onSubmit(): void {
        this.dialogRef.close(this.addNewQAFormGroup.value);
    }

    onClose(): void {
        this.dialogRef.close();
    }

    addAnswerItem(event: MatChipInputEvent): void {
        const newItem: string = (event.value || '').trim();
        if (newItem) {
            this.addNewQAFormGroup.controls['answer'].setValue([...this.addNewQAFormGroup.value.answer, newItem]);
        }
        event.chipInput!.clear();
    }

    removeAnswerItem(removedItem: string): void {
        const index: number = this.addNewQAFormGroup.value.answer.indexOf(removedItem);
        if (index >= 0) {
            this.addNewQAFormGroup.value.answer.splice(index, 1);
        }
        this.addNewQAFormGroup.controls['answer'].setValue(this.addNewQAFormGroup.value.answer);
    }

    private initForm(): void {
        this.addNewQAFormGroup = this.formBuilder.group({
            type: ['', Validators.required],
            question: ['', Validators.required],
            answer: ['', Validators.required],
        });
    }
}
