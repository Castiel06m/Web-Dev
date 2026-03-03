import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AlbumService } from '../../services/album';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [RouterModule], 
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css',
})
export class AlbumPhotos implements OnInit {
  photos = signal<Photo[]>([]);
  loading = signal(true);

  private route = inject(ActivatedRoute); 
  private albumService = inject(AlbumService);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumPhotos(id).subscribe({
      next: (data) => {
        this.photos.set(data); 
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
}