import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @ViewChild('closeAddExpenseModal')
  closeAddExpenseModal!: ElementRef;
  isLoggedIn = false
  user = {
    username: ""
  }
  constructor(
    private toastr: ToastrService,
    private router:Router,
    private authService: AuthenticationService) { }
  
  ngOnInit(): void {
    if( localStorage.getItem('token') != null){
      this.isLoggedIn = true;
      if( localStorage.getItem('user') != null){
        const from_storage = localStorage.getItem('user')
        console.log(from_storage)
        this.user = JSON.parse(from_storage??'')
      }
    }
  }

  

  logout(): void {
    // Clear all stored user info from device.
    localStorage.clear()
    sessionStorage.clear()
    this.isLoggedIn = false
    this.toastr.success('You are successfully logged out','Great')
    this.closeAddExpenseModal.nativeElement.click()
    this.router.navigate([''])
  }

 

}
