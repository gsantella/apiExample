import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private url = 'https://jsonplaceholder.typicode.com/photos/'

  constructor(private httpClient: HttpClient) {}

  getPhotos() {
    return this.httpClient.get(this.url)
  }

  getPhoto(id:String) {
    console.log(`${this.url + id}`)
    return this.httpClient.get(`${this.url + id}`)
  }

}
