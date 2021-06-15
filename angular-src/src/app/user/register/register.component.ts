import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService : UserService , private router : Router) { }

  ngOnInit(): void {
  }

  registerHandler(formData:any) : void { 
    this.userService.register(formData).subscribe(x => { 
      if(x.isSuccessful) { 
        console.log('You have made your account');
        this.router.navigate(['/login'])
      }
    })
    
  }

}
