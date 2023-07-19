import { Component, Input } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent {
  @Input() id: any
  @Input() title: string = ''
  @Input() message: string = ''
  @Input() favorite: boolean = false;
  @Input() color: string = ''

  faEdit = faEdit

}
