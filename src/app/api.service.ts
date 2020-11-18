import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    // https://covidreisparbe.herokuapp.com/route/image/ to be replaced to connect to the BE
    // /route/image/ for local server
    // https://a1535d6b2db5.ngrok.io
  url = "https://2c44f01053ce.ngrok.io/route/image/"
  
  httpHeaders = new HttpHeaders({'Content-Type':"application/json"})

  constructor(private http:HttpClient) { }

  postImage(image): Observable<any> {
    return this.http.post(this.url, image, {
      reportProgress: true,
      observe: "events"
    })

  }
  getImagedata():Observable<any>{
    return this.http.get(this.url,
      {headers:this.httpHeaders} );
  }
}
