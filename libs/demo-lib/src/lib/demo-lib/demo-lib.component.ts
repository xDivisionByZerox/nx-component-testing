import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nx-component-testing-demo-lib',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo-lib.component.html',
  styleUrls: ['./demo-lib.component.scss'],
})
export class DemoLibComponent {}
