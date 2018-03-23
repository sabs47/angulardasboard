import { Component } from '@angular/core';
import { SearchPipe } from "../../filters/search.pipe";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  public searchedArticle: string = '';
  public articles = [
    {
      category: "THE COMMUNITY",
      bgColor: 'bg-blue-light',
      author: "Maddy Simmons",
      published: "- 7 hours ago",
      image: "assets/img/post1.jpg",
      title: "Here’s the Featured Urban photo of August!",
      content: "Here’s a photo from last month’s photoshoot. We had a lot of fun doing it and got really awesome shots forthe new summer catalog."
    },
    {
      category: "OLYMPUS NEWS",
      bgColor: 'bg-purple',
      author: "JACK SCORPIO",
      published: "- 12 hours ago",
      image: "assets/img/post2.jpg",
      title: "Olympus Network added new photo filters!",
      content: "Here’s a photo from last month’s photoshoot. We had a lot of fun doing it and got really awesome shots forthe new summer catalog."
    },
    {
      category: "INSPIRATION",
      bgColor: 'bg-blue',
      author: "Maddy Simmons",
      published: "- 2 days ago",
      image: "assets/img/post3.jpg",
      title: "Take a look at these truly awesome worspaces",
      content: "Here’s a photo from last month’s photoshoot. We had a lot of fun doing it and got really awesome shots for the new summer catalog."
    },
    {
      category: "OLYMPUS NEWS",
      bgColor: 'bg-purple',
      author: "JACK SCORPIO",
      published: "- 20 days ago",
      image: "assets/img/post4.jpg",
      title: "Here’s the Featured Urban photo of July!",
      content: "Here’s a photo from last month’s photoshoot. We had a lot of fun doing it and got really awesome shots for the new summer catalog."
    },
    {
      category: "THE COMMUNITY",
      bgColor: 'bg-blue-light',
      author: "Maddy Simmons",
      published: "- 1 MONTH ago",
      image: "assets/img/post5.jpg",
      title: "Olympus’s family picnic was a success!",
      content: "Here’s a photo from last month’s photoshoot. We had a lot of fun doing it and got really awesome shots for the new summer catalog."
    },
    {
      category: "THE COMMUNITY",
      bgColor: 'bg-blue-light',
      author: "JAMES SPIEGEL",
      published: "- 1 MONTH ago",
      image: "assets/img/post6.jpg",
      title: "Olympians: Journal of my backpacking days",
      content: "Here’s a photo from last month’s photoshoot. We had a lot of fun doing it and got really awesome shots for the new summer catalog."
    }
  ];

}
