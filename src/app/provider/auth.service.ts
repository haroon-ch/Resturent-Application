import { Injectable } from '@angular/core';
import { HttpClient , HttpEventType, HttpEvent, HttpRequest} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


//const apiUrl = 'http://localhost/caffeverona/public/';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private httpEventListener: Subject<Object> = new Subject<Object>();
  observeHttp: Observable<Object> = this.httpEventListener.asObservable();
  constructor(public http: HttpClient) { }
//   con(data: any , type: any ) {
//     // tslint:disable-next-line: no-shadowed-variable
//     return new Promise((resolve, reject) => {
//       // tslint:disable-next-line: whitespace
//       this.http.post(apiUrl+type, JSON.stringify(data),{
//         reportProgress: true,
//       }).
//       subscribe(res=>{
//        console.log(JSON.stringify(res));
//         resolve(JSON.stringify(res));

//       }, (err) => {
//         reject(err);
//         console.log(err);
//       });
//     });
//   }

  con(data, type) {
    const req = new HttpRequest('POST', apiUrl + type, data, {
      // headers: You can put your headers type hear such as content/type, token...
      reportProgress: true
    });

    return new Promise((resolve, reject) => {
      this.http.request(req).subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            const percentDone = Math.round(100 * event.loaded / event.total);
            this.getHttpEvent().next(percentDone);
            // console.log(`Posting in progress! ${percentDone}% \n
            // Bytes being upload: ${event.loaded} \n
            // Total no. of bytes to upload: ${event.total}`);
            break;
          case HttpEventType.Response:
            resolve(JSON.stringify(event.body));
        }
      }, err => {
        console.log(err);
        reject(err);
      });
    });
  }
  getHttpEvent(): Subject<Object> {
    return this.httpEventListener;
 }

  // geting posts
  getdata(type: any) {
    return new Promise((resolve, reject) => {
      this.http.get(apiUrl + type).
      subscribe(res => {
        resolve(JSON.stringify(res));
      },  (err) => {
        reject(err);
        console.log(err);
      });
    });
  }
}
