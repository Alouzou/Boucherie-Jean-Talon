import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-must',
  templateUrl: './must.component.html',
  styleUrl: './must.component.css',
})
export class MustComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  onNextClick() {
    const slide = this.el.nativeElement.querySelector('.slide');
    const items = this.el.nativeElement.querySelectorAll('.item');
    if (slide && items.length > 0) {
      this.renderer.appendChild(slide, items[0]);
    }
  }

  onPrevClick() {
    const slide = this.el.nativeElement.querySelector('.slide');
    const items = this.el.nativeElement.querySelectorAll('.item');
    if (slide && items.length > 0) {
      this.renderer.insertBefore(slide, items[items.length - 1], items[0]);
    }
  }
  ngAfterViewInit() {
    const options = {
      root: null,
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(
            entry.target as HTMLElement,
            'animate__fadeIn'
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
