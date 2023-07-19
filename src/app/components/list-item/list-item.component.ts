import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faTrashCan, faEdit } from '@fortawesome/free-regular-svg-icons';
import { Router } from '@angular/router';

import { ListType } from 'src/app/ListType';


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  @Input() listItem: any
  @Output() delEmitter = new EventEmitter()

  faTrashCan = faTrashCan
  faEdit = faEdit

  constructor(private router: Router) {}

  delBtn(id: number) {
    this.delEmitter.emit(id)
  }

  editBtn(data: ListType) {
    const list = JSON.stringify(data)
    this.router.navigate(['/edit', list])
  }
}
