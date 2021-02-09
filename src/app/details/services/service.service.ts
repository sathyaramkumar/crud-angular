import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  

  constructor(private http: HttpClient) { }

  getAllData() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get(url);
  }
}
