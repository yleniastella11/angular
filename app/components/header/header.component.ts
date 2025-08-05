import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // ✅ nécessaire pour routerLink et ngModel
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // ✅ corrigé
})
export class HeaderComponent {
  searchTerm: string = '';

  constructor(private searchService: SearchService, private router: Router) {}

  searchProduct() {
    if (this.searchTerm.trim()) {
      this.searchService.setSearchTerm(this.searchTerm);
      this.router.navigate(['/products']);
    }
  }
}
