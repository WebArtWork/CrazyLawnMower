import {Component, OnInit}   from 'angular2/core';

@Component({
  template: `<div>Garden Game</div>`
})
export class ImageGame implements OnInit {

  isSelected() {
    console.log('isSelected');
  }

  onSelect() {
    console.log('onSelect');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }
}