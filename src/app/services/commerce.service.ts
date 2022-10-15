import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {TokenHelper} from '../helpers/token.helper';

@Injectable({
  providedIn: 'root'
})
export class CommerceService {

  public url = environment.api;

  constructor(
    private http: HttpClient,
    private tokenHelper: TokenHelper
  ) {
  }

  getAllCommerce(): any {
    return new Promise<any>(resolve => {
      this.tokenHelper.getToken().then(token => {
        if (token && typeof token === 'string') {
          const headers = new HttpHeaders({
            // eslint-disable-next-line @typescript-eslint/naming-convention
            Authorization: token
          });
          this.http.get(this.url + 'commerce/get-all', {headers}).subscribe(response => {
            if (response) {
              resolve(response);
            } else {
              resolve(false);
            }
          }, error => {
            console.log(headers);
            console.log(error);
          });
        }
      });
    });
  }

  addCommerce(commerce): any {
    const headers = new HttpHeaders({
      'Authorization': sessionStorage.getItem('token')
    });

    return this.http.post<any>(this.url + 'commerce/add', commerce, {headers});
  }

  getCommerceForNit(nit: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.get<any>(this.url + 'commerce/' + nit, {headers});
  }

  updateCommerceService(commerce) {
    const headers = new HttpHeaders({
      'Authorization': sessionStorage.getItem('token')
    });

    return this.http.post<any>(this.url + 'commerce/update-commerce/' + commerce._id, commerce, {headers});
  }
}
