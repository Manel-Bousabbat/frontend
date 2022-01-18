import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  user: User;

  constructor(private router: Router,
    private authenticationService:AuthentificationService) { }

  ngOnInit(): void {
    this.user=JSON.parse(localStorage.getItem('admin'));

  }

  logout() {
      localStorage.removeItem('admin');
      this.router.navigate(['/signin']);
    

  }

}
