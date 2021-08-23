import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Observable, of, pipe } from "rxjs";
import {map} from "rxjs/operators";
import { Item } from './models/items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sortProject';

  data$!: Observable<Item[]>;

  constructor(private service: DataService){
  }

  ngOnInit() {
    this.data$ = this.service.getData();
  }

  sort(){
    this.data$ = this.data$.pipe(map((data) => {
    data.sort((a, b) => {
        return a.value < b.value ? -1 : 1;
     });
    return data;
    }))
  }
}
