import {
	Directive, HostListener, Inject, ViewContainerRef, Input, ContentChild, Renderer2, AfterContentInit
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Throttle } from '../../../decorators/throttle.decorator';

@Directive({
	selector: '[sticky]'
})
export class StickyDirective {
	@Input('sticky-class-name')
	className: string = 'sticky-applied';

	constructor(public vcRef: ViewContainerRef) {}
}

@Directive({
	selector: '[sticky-root]'
})
export class StickyRootDirective implements AfterContentInit {

	@Input('sticky-class-name')
	className: string = 'sticky-root-applied';

	constructor(
		@Inject(DOCUMENT)
		private document: Document,
		private renderer: Renderer2,
		public vcRef: ViewContainerRef) {
	}

	@ContentChild(StickyDirective)
	sticker: StickyDirective;

	@HostListener('window:scroll', [])
	@Throttle()
	handleScroll() {
		let scrollTop = this.document.body.scrollTop;
		let nativeElement = this.vcRef.element.nativeElement as HTMLElement;
		let stickerElement = this.sticker.vcRef.element.nativeElement as HTMLElement;

		if (!stickerElement || !nativeElement) {
			return;
		}

		let isFixed = scrollTop > nativeElement.clientTop;

		if (isFixed) {
			this.renderer.addClass(stickerElement, this.sticker.className);
			this.renderer.addClass(nativeElement, this.className);
			this.renderer.setStyle(nativeElement, 'paddingTop', `${stickerElement.clientHeight}px`);
		} else {
			this.renderer.removeClass(stickerElement, this.sticker.className);
			this.renderer.removeClass(nativeElement, this.className);
			this.renderer.removeStyle(nativeElement, 'paddingTop');
		}
	}

	ngAfterContentInit(): void {
		this.handleScroll();
	}
}
