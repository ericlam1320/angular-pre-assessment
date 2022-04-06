import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
    selector: 'app-add-question-dialog',
    templateUrl: './add-question-dialog.component.html',
    styleUrls: ['./add-question-dialog.component.scss']
})
export class AddQuestionDialogComponent implements OnInit {

    answersQuestionForm: any;
    readonly addOnBlur = true;
    readonly separatorKeysCodes = [ENTER, COMMA] as const;

    constructor(
        private dialogRef: MatDialogRef<AddQuestionDialogComponent>,
        private formBuilder: FormBuilder,
    ) { }

    ngOnInit(): void {
        this.initForm();
    }

    onSubmit(): void {
        console.log(this.answersQuestionForm.controls['answersQuestionArray']['controls']);
    }

    addCheckboxItem(event: MatChipInputEvent, checkboxList: string[], checkboxItem: FormGroup) {
        const newItem: string = (event.value || '').trim();
        if (newItem) {
            checkboxItem.controls['answers'].setValue([...checkboxList, newItem]);
        }
        event.chipInput!.clear();
    }

    removeCheckboxItem(removedItem: string, checkboxList: string[], checkboxItem: FormGroup): void {
        const index: number = checkboxList.indexOf(removedItem);
        if (index >= 0) {
            checkboxList.splice(index, 1);
        }
        checkboxItem.controls['answers'].setValue(checkboxList);
    }

    private initForm(): void {
        this.answersQuestionForm = this.formBuilder.group({
            answersQuestionArray: this.formBuilder.array([
                this.formBuilder.group({
                    type: ['PARAGRAPH'],
                    question: ['Please tell us about yourself'],
                    answers: ['', Validators.required]
                }),
                this.formBuilder.group({
                    type: ['CHECKBOX'],
                    question: ['Please select the languages you know'],
                    answers: [['Angular', 'React', 'C#'], Validators.required]
                })
            ]),
        });
    }
}
