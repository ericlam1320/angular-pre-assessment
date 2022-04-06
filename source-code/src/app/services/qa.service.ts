import { Injectable } from '@angular/core';
import { FormItems } from '../models/form';

@Injectable({
    providedIn: 'root'
})
export class QaService {

    constructor() { }

    public setQAData(data: FormItems[]): void {
        localStorage.setItem('QAData', JSON.stringify(data));
    }

    public getQAData(): FormItems[] | null {
        const returnValue =  localStorage.getItem('QAData');
        localStorage.removeItem('QAData');
        return returnValue ? JSON.parse(returnValue) : null;
    }
}
