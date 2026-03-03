import { Component, OnInit, inject, signal } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router'; 
import { AlbumService } from '../../services/album'; 
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class Albums implements OnInit {
  albums = signal<Album[]>([]); 
  loading = signal(true); 

  private albumService = inject(AlbumService);

  ngOnInit() {
    this.fetchAlbums();
  }

  fetchAlbums() {
    this.loading.set(true); 
    
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums.set(data); 
        this.loading.set(false); 
      },
      error: (err) => {
        console.error(err);
        this.loading.set(false);
      }
    });
  }

  deleteAlbum(id: number) {
    this.albums.update(currentAlbums => currentAlbums.filter(a => a.id !== id));
    this.albumService.deleteAlbum(id).subscribe();
  }
}