import { Component, Output, EventEmitter } from '@angular/core';
import { faAdd } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  @Output() sbtEmitter = new EventEmitter()

  faAdd = faAdd;

  title: string = ''
  message: string = ''
  favorite: boolean = false
  color: string = ''

  onSbt(){

    if(!this.title){
      alert('Title is required')
      return
    }

    if(!this.message){
      alert('Message is required')
      return
    }

    const newList = {
      title: this.title,
      message: this.message,
      favorite: this.favorite,
      color: this.color
    }

    this.sbtEmitter.emit(newList)

    this.title = ''
    this.message = ''
    this.favorite = false

  }
}
