import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormAnswersComponent } from './form-answers/form-answers.component';

const formRoutes: Routes = [
    { path: '', redirectTo: 'builder', pathMatch: 'full' },
    { path: 'builder', component: FormBuilderComponent },
    { path: 'answers', component: FormAnswersComponent }
];

@NgModule({
    imports: [RouterModule.forChild(formRoutes)],
    exports: [RouterModule]
})
export class FormRoutesModule { }
