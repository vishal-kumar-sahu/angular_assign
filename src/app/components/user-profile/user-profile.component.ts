import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/User';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {
  id: Number = 1;
  userDetails !: User;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    const idParam: any = this.route.snapshot.paramMap.get('id');
    // console.log("" + idParam);
    this.id = parseInt(idParam, 10); 
    this.fetchUserDetails();
  }

  fetchUserDetails() {
    this.http.get<User>('https://jsonplaceholder.typicode.com/users/' + this.id)
      .subscribe(
        userDetails => {
          this.userDetails = userDetails;
        },
        error => {
          console.error('Error fetching user details:', error);
        }
      );
  }
}
