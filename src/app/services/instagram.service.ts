import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class InstagramService {

  constructor(private httpClient: HttpClient) { }

  getPhotos(): Observable<any> {
    return this.httpClient.get('https://api.instagram.com/oembed?url=http://instagr.am/p/fA9uwTtkSN/');
  }

}
