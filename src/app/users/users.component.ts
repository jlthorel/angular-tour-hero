import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserapiService } from '../userapi.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  dataToDisplay: User[] = [];
  currentPage : number = 1;
  pageSize: number = 10;

  constructor(private userApi: UserapiService) { }

  ngOnInit(): void {
    this.userApi.getAll().subscribe((data) => {
      this.users = data;
      console.log('JSON Response = ', JSON.stringify(data));
    })
  }

  sortOn(field: string) {
    console.log(`Filter on field ${field}`);
  }

  onPageChange(event: any): void {
    console.log(`event received ${event}`);
    this.currentPage = event;
    this.updateDataToDisplay()
  }

  updateDataToDisplay() {
    console.log(`current page ${this.currentPage}`)
    this.dataToDisplay = this.users
      .filter((row, index) => { // filtering 
        return true;
      })
      .sort((a: User, b: User) => {
        return 1;

      })
      .filter((row, index) => { // pagination 
        let start = (this.currentPage - 1) * this.pageSize;

        let end = this.currentPage * this.pageSize;
        console.log(`start ${start} end ${end}`);
        if (index >= start && index < end) return true
        else return false;
      })
      console.log('Data to Display = ', this.dataToDisplay);


  }
}
