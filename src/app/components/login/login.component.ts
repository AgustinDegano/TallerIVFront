import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  constructor(
    private authService: AuthService,
    private router: Router) {}

  onLogin(): void {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/inicio']);
        } else {
          alert('Login failed');
        }
      }, (error) => {
        alert('Login failed');
        console.log(error);
      }
    )  
  }
}
