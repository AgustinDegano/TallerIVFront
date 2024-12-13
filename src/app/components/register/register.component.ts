import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  mail: string = '';
  constructor(private authService: AuthService, private router: Router) {}

  onRegister(): void {
    this.authService.register(this.username, this.password, this.mail).subscribe(
      (response) => {
        // TODO: response.status === 201 ? alert('User registered') : alert('Registration failed');
        console.log(response)
        alert('User registered');
        this.router.navigate(['/login']);
      },
      (error) => {
        alert('Registration failed');
        console.log(error);
      }
    );
  }
}
