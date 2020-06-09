import {
  Component,
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { InfiniteScrollService } from '../../core/services/infinite-scroll.service';
import { InfiniteScrollStatus } from 'src/app/core/models/infinite-scroll.model';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss'],
})
export class InfiniteScrollComponent implements AfterViewInit, OnDestroy {
  @ViewChild('scrollBottom') scrollBottom: ElementRef<HTMLElement>;
  observer: IntersectionObserver;
  constructor(private infiniteScrollService: InfiniteScrollService) {}

  ngOnDestroy(): void {
    this.observer.unobserve(this.scrollBottom.nativeElement);
  }

  ngAfterViewInit(): void {
    const options: IntersectionObserverInit = {
      root: null, // the viewport
      rootMargin: '0px',
      threshold: 1.0, // the top of the observed element
    };
    this.observer = new IntersectionObserver(event => {
      // Emit reachedBottom if the viewport is
      // showing the bottom of the navbarLocationReference
      if (
        event[0].isIntersecting &&
        this.infiniteScrollService.status === InfiniteScrollStatus.OBSERVING
      ) {
        this.infiniteScrollService.reachedBottom();
      }
    }, options);
    this.observer.observe(this.scrollBottom.nativeElement);
  }
}
