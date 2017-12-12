import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Thread } from '../thread.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  sub: any;
  threadId: number;
  postId: number;

  author: string;
  title: string;
  message: string;


  constructor(private route: ActivatedRoute, private router: Router) {
    this.sub = this.route.params.subscribe(params => {
      let threadId = params[`threadid`]
      let postId = params[`postid`]
      this.threadId = (threadId != 'newthread' ? threadId : null);
      this.postId = (postId != 'newpost' ? postId : null);

      if (this.threadId && this.postId) {
        let thread = Thread.find(this.threadId)
        let post = thread.findPost(this.postId)
        this.message = (post && post.data) ? post.data.message : "";
      }

    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  submitPost() {
    var curThread = Thread.find(this.threadId)
    if (!curThread) {
      curThread = new Thread({
        title: this.title
      })
      curThread.save()
    }
    var curPost = curThread.findPost(this.postId);
    if (!curPost) {
      curPost = curThread.makePost({
        author: this.author,
        message: this.message
      })
    }
    else {
      curPost.data.message = this.message;
    }
    this.router.navigate(['/posts/' + curThread.id]);
  }
}
