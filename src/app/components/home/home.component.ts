import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    loading: boolean = true;
    users: User[] = []

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.fetchUsers();
    }

    fetchUsers() {
        this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
        .subscribe(users => {
            this.users = users;
            this.loading = false;
        });
    }
}
