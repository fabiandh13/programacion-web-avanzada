import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormControl],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-s04-lab');
}
