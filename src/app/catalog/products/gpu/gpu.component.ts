import { Component, OnInit } from '@angular/core';
import {Post} from '../../../models';
import { POSTS} from '../../../fakepostsdb';

@Component({
  selector: 'app-gpu',
  templateUrl: './gpu.component.html',
  styleUrls: ['./gpu.component.css']
})
export class GpuComponent implements OnInit {
  posts: Post[];
  constructor() {
    this.posts = [];
  }

  onSave(title: string, price: number): any{
    console.log('btn is clicked');
    console.log(title, price);
    return {title, price};
  }

  ngOnInit(): void {
    this.posts = POSTS;
  }

}
