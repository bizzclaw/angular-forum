import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { ThreadsComponent } from './threads/threads.component';
import { PostsComponent } from './posts/posts.component';
import { PostFormComponent } from './post-form/post-form.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'threads',
    component: ThreadsComponent
  },
  {
    path: 'posts/:id',
    component: PostsComponent
  },
  {
    path: 'post-form/:threadid/:postid',
    component: PostFormComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
