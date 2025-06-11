import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  loginObj: any = {
    userName: 'admin@gmailcom',
    password: '12345'
  };

  http = inject(HttpClient);
  router = inject(Router);

  onLogin() {
    this.http.post("https://projectapi.gerasim.in/api/EmployeeManagement/login", this.loginObj)
      .subscribe((res: any) => {
        if (res.result) {
          localStorage.setItem('employeeApp', JSON.stringify(res.data));
          this.router.navigateByUrl('dashboard');
        } else {
          alert(res.message);
        }
      });
  }
}
