import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.css']
})
export class BasePageComponent implements OnInit {

  constructor(private userDataService: UserDataService) { }

  apiData:any;

  // To make initial API call
  ngOnInit(): void {
 
  // //Working solution:
  // //Subscribe call back fun will be executed only when a response is received from API
  //  this.userDataService.getUserData().subscribe((res)=>{
  //    this.apiData = res;
  //    console.log('APIData',this.apiData)
  //  });

 // Info:
      // * As data member is public, I called it directly
      //  *The below approach is used, when two pages uses the same APi call, the APi call data can
      //  be used in second function also
      // * WHen APi call is made, all the page which uses this data member, will be updated   
    this.userDataService.userDetails$.subscribe(data=>this.apiData = data)



//  By promise method => not working
  // this.userDataService && this.userDataService.getUserData() && this.userDataService.getUserData().then((res:any) => {
  //   this.apiData = res;
  //   console.log('APIData',this.apiData)
  // }
  // );

  }

    // To make initial API call onClick
  getUserDetails(){
   this.userDataService.getUserData();
  }

}
