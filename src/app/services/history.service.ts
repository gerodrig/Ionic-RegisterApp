import { Injectable } from '@angular/core';
import { History } from '../interfaces/history.interface';


@Injectable({
    providedIn: 'root'
})
export class HistoryService {

    private _history: History[] =[]

    get getHistory(): History[]{
        return [...this._history];
    }

    constructor() { }

    addPurchase( name:string, qty:number, total:string ){
        this._history.push({name: name, quantity: qty, date: new Date(Date.now()), total: total})
        //console.log(this._history);

    }
}