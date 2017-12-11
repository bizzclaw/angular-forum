import { Component, OnInit, Input } from '@angular/core';
import { Thread } from '../thread.model';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {

  threads = Thread.allThreads;
  constructor() { }
  ngOnInit() {}
}
