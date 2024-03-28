import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    loading: boolean = true;
    users: any[] = []

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.fetchUsers();
    }

    fetchUsers() {
        this.http.get<Object[]>('https://jsonplaceholder.typicode.com/users')
        .subscribe(users => {
            this.users = users;
            this.loading = false;
        });
    }
}
