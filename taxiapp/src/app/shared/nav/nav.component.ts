import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isLoggedIn = false
  constructor(
    private toastr: ToastrService,
    private router:Router,
    private authService: AuthenticationService) { }
  
  ngOnInit(): void {
    if( localStorage.getItem('token') != null){
      this.isLoggedIn = true;
    }
  }

  

  logout(): void {
    // Clear all stored user info from device.
    localStorage.clear()
    sessionStorage.clear()
    this.isLoggedIn = false
    this.toastr.success('You are successfully logged out','Great')
    this.router.navigate([''])
  }

 

}
