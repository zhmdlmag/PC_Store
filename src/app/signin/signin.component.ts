import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient,
              private router: Router) {
    this.form = this.formBuilder.group({
      name: '',
      email: '',
      password: ''
    });
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
    name: '',
    email: '',
    password: ''});
  }

  submit(): void{    this.http.post('http://localhost:8000/ api/register', this.form.getRawValue(),
    {withCredentials: true}).subscribe(() => {
    this.router.navigate(['/']);
  } );

  }

}
