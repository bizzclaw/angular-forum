import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Thread } from '../thread.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {
  id: number;
  thread: Thread;

  private sub: any;

  constructor(private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params[`id`];
    });
  }

  ngOnInit() {
    this.thread = Thread.find(this.id);
    console.log(this.thread);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
