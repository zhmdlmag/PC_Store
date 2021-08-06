import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  email = 'mail@example.com';
  name = 'Adil';

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient,
              private router: Router) {
    this.form = formBuilder.group({
      name: '',
      email: '',
      password: ''
    });
  }

  onKeyUp(): void{
    console.log(this.email);
  }

  onKeyUpName(): void{
    console.log(this.name);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      email: '',
      password: ''
    });
  }

  submit(): void{
    this.http.post('http://localhost:8000/ api/register', this.form.getRawValue()).subscribe(() => {
      this.router.navigate(['/signin']);
    } );
  }
}
