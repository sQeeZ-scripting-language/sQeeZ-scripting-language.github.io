import { Component, OnInit } from '@angular/core';
import { GridItem } from '../../interfaces/grid-item.interface';
import { MatCardModule } from '@angular/material/card';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent implements OnInit {
  gridItems: GridItem[] = [];

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.gridItems = this.data.gridItems;
  }

  redirectTo(url: string): void {
    window.open(url, '_blank');
  }
}