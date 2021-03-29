import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  
   public userDetails$:Observable<any> = new Observable();

  constructor(private httpClient:HttpClient) { 
    //Initially when service is called, the below func is called and APi call is made
    this.getUserData();
  }

  // Info: when this function is called, the data stored in userDetails will be sent 
  getUserDetails(){
    return this.userDetails$;
  }

//   Wokring Solution:
//   public getUserData(){
//     return this.httpClient.get('https://jsonplaceholder.typicode.com/posts')
//  }

 public getUserData(){
  // I am storing the data in a member function
  this.userDetails$ = this.httpClient.get('https://jsonplaceholder.typicode.com/posts')
}

  //By Subscribe method - async method
  // public getUserData(){
  //    this.httpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe((results)=>{
  //     console.log('results',results);
  //    return results;
 
  //    })
  // }

  //By Promise method - sync method
  //  getUserData():any{
  //   this.httpClient.get('https://jsonplaceholder.typicode.com/posts').toPromise().then((res)=> res)}


}
