import { Component } from '@angular/core';
import { provideRouter } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header>
      <h1>My Recipes</h1>
      <nav>
        <a routerLink="">Home</a> |
        <a routerLink="favorites">Favorites</a> |
        <a routerLink="admin">Admin</a>
      </nav>
    </header>
    <main class="container">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [``]
})
export class App {}
