import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { AlbumService } from '../../services/album';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
})
export class AlbumDetail implements OnInit {
  album = signal<Album | undefined>(undefined); 
  loading = signal(true);
  newTitle = signal('');

  private route = inject(ActivatedRoute); 
  private albumService = inject(AlbumService);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album.set(data); 
        this.newTitle.set(data.title);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  saveChanges() {
    const currentAlbum = this.album();
    if (currentAlbum) {
      const updated = { ...currentAlbum, title: this.newTitle() };
      this.albumService.updateAlbum(updated).subscribe(res => {
        this.album.set(res);
        alert('Saved!');
      });
    }
  }
}