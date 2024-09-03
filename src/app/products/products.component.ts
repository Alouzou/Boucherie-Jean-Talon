import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  ngAfterViewInit() {
    const options = {
      root: null, // Vueport par défaut
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(
            entry.target as HTMLElement,
            'animate__fadeInLeft'
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
