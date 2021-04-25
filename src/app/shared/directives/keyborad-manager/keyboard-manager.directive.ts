import {ContentChildren, Directive, HostListener, QueryList} from '@angular/core';
import {KeyboardManagerItemDirective} from './keyboard-manager-item.directive';


@Directive({
  selector: '[appkm]'
})
export class KeyboardManagerDirective {

  @ContentChildren(KeyboardManagerItemDirective)
  public items: QueryList<KeyboardManagerItemDirective> = null;

  @HostListener('keyup', ['event'])
  public managerKeys(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
        console.log('up');
        break;
      case 'ArrowDown':
        console.log('down');
      case 'ArrowLeft':
        console.log('left');
        break;
      case 'ArrowRight':
        console.log('rigth');
        break;
    }
  }
}
