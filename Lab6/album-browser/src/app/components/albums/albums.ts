import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  albums: Album[] = [];
  loading = true;

  constructor(
    private albumService: AlbumService, 
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit() {
    this.fetchAlbums();
  }

  fetchAlbums() {
    console.log('Попытка загрузки альбомов...'); 
    this.loading = true;
    
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        console.log('Данные успешно получены:', data); 
        this.albums = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Ошибка при загрузке альбомов:', err); 
        this.loading = false;
      }
    });
  }

  deleteAlbum(id: number) {
    this.albums = this.albums.filter(a => a.id !== id);
    this.albumService.deleteAlbum(id).subscribe(() => {
        this.cdr.detectChanges(); 
    });
  }
}