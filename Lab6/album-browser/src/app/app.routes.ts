import { Routes } from '@angular/router';
import { AlbumPhotos } from './components/album-photos/album-photos';
import { AlbumDetail } from './components/album-detail/album-detail';
import { Albums } from './components/albums/albums'; 
import { About } from './components/about/about';
import { Home } from './components/home/home';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'albums', component: Albums }, 
  { path: 'albums/:id', component: AlbumDetail },
  { path: 'albums/:id/photos', component: AlbumPhotos },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' } 
];