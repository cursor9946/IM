import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.scss']
})
export class DataDisplayComponent implements OnInit {
  data: any[] = [];
  loading = false;
  error: string | null = null;

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.loading = true;
    this.inventoryService.getHello().subscribe({
      next: (response) => {
        this.data = response;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Error fetching data';
        this.loading = false;
        console.error('Error:', error);
      }
    });
  }
}