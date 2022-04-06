import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormAnswersComponent } from './form-answers/form-answers.component';
import { FormRoutesModule } from './form.routes';
import { AddQuestionDialogComponent } from './dialog/add-question-dialog/add-question-dialog.component';
import { AddNewQuestionDialogComponent } from './dialog/add-new-question-dialog/add-new-question-dialog.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    declarations: [
        FormBuilderComponent,
        FormAnswersComponent,
        AddQuestionDialogComponent,
        AddNewQuestionDialogComponent
    ],
    imports: [
        CommonModule,
        FormRoutesModule,
        MatButtonModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatChipsModule,
        MatIconModule,
        MatSelectModule,
    ]
})
export class FormModule { }
