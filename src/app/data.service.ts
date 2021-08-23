import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from './models/items';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private array: Item[] = [
    new Item(6),
    new Item(3),
    new Item(1),
    new Item(5),
    new Item(4),
    new Item(2)
  ];

  getData(): Observable<Item[]> {
    return of(this.array);
  }
}
