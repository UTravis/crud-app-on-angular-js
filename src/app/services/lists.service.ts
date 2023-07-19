import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ListType } from '../ListType';
import { Observable } from 'rxjs';

const headers = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  private apiUrl = "http://localhost:5000/lists"

  constructor(private http: HttpClient) { }

  getLists() : Observable<ListType[]> {
    return this.http.get<ListType[]>(this.apiUrl)
  }

  addList(list: ListType) : Observable<ListType> {
    return this.http.post<ListType>(this.apiUrl, list, headers)
  }

  delList(listId: number) : Observable<ListType> {
    const url = this.apiUrl + '/' + listId
    return this.http.delete<ListType>(url)
  }


  editList(id: number, list: ListType): Observable<ListType> {
    const url = this.apiUrl + '/' + id
    return this.http.put<ListType>(url, list, headers)
  }

}
