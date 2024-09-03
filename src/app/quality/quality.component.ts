import { Component, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-quality',
  templateUrl: './quality.component.html',
  styleUrl: './quality.component.css',
})
export class QualityComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const options = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(
            entry.target as HTMLElement,
            'animate__zoomIn'
          );
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const targets = this.el.nativeElement.querySelectorAll(
      '.animate__animated'
    ) as NodeListOf<HTMLElement>;
    targets.forEach((target) => observer.observe(target));
  }
}
