import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { faEdit, faBackward } from '@fortawesome/free-solid-svg-icons';
import { ListType } from 'src/app/ListType';

import { ListsService } from 'src/app/services/lists.service';


@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent {
  title: string = ''
  message: string = ''
  favorite: boolean = false
  color: string = ''

  faEdit = faEdit
  faBackward = faBackward

  list: any

  constructor(
    private route: ActivatedRoute,
    private listService: ListsService,
    private router: Router
  ) {
    this.route.paramMap.subscribe(param => {
      const serializedData = <string>param.get('list')

      this.list = JSON.parse(serializedData)

      // Attaching values to input
      this.title = this.list.title
      this.message = this.list.message
      this.favorite = this.list.favorite
      this.color = this.list.color
    })
  }

  editForm() {

    if (!this.title) {
      alert('A title is required')
      return
    }

    if (!this.message) {
      alert('A message is required')
      return
    }


    const editedList: ListType = {
      title: this.title,
      message: this.message,
      favorite: this.favorite,
      color: this.color
    }

    //sending a PUT request
    // Passing the ID of the list to be edited and the new request body
    this.listService.editList(this.list.id, editedList).subscribe((list) => {
      this.router.navigate([''])
    })
  }

}
