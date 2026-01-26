import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "@shared/components/header/header";
import { CoreModule } from './core/core.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, CoreModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('expense-manager-fe');
}
