import { Component } from '@angular/core';
import { PostService } from '../service/post.service';
import { Post } from '../model/Post';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {

  listPost: Post[] = [];
  post: Post = new Post;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.findPosts()
  }

  findPosts() {
    this.postService.getPosts().subscribe((data: any) => {
      this.listPost = data;
    })
  }

  postNewComment(){
    this.postService.postComment(this.post).subscribe((data: any) => {
      this.post = data;
      location.assign('/feed')
    })
  }

}
