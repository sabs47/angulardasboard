import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.css']
})
export class BlogArticleComponent implements OnInit {
  public title: string;
  
  public summernote:String;
  public content: string = 'Add some thoughts here...';
  public categories: string[] = ['category 1', 'category 2', 'category 3'];
  constructor() { }

  ngOnInit() {
    $('#summernote').summernote();
  }
  
    // on submit method
   
onSignin(){
  let text = $('#summernote').summernote('code');
  
 
}
}
