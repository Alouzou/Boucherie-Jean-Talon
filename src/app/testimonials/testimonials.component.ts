import { Component, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent {
  iframeLoaded: boolean = true;

  handleIframeError(): void {
    this.iframeLoaded = false;
  }
}
