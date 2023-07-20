import { Component } from '@angular/core';
import { ListType } from 'src/app/ListType';
import { fade } from 'src/app/animations/animation';
import { ListsService } from 'src/app/services/lists.service';



@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
  animations: [fade]
})
export class ListsComponent {
  lists: ListType[] = [];

  constructor(private listsService: ListsService) {
    this.listsService.getLists().subscribe((lists) => this.lists = lists)
  }

  add(list: ListType) {
    this.listsService.addList(list).subscribe((list) => this.lists.push(list))
  }

  delList(id: number) {
    this.listsService.delList(id).subscribe(() => {
      this.lists = this.lists.filter((l) => l.id !== id)
    })
  }


}
