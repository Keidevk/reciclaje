import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavComponent],
  template:`
      <div class="-z-50">
      <div class="bg-green-custom h-40 w-full absolute top-0 left-0 rounded-t-xl">.</div>
      <div class="bg-green-custom h-40 w-full absolute top-40 left-0 rounded-b-full">.</div>
      <div class="bg-green-custom h-64 w-full absolute top-40 -left-1 rounded-b-full">.</div>
    </div>
  <Nav-Component/>
  <router-outlet></router-outlet>` ,
})
export class AppComponent {
}
