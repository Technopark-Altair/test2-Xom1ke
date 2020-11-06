import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hmm';
  inv: string;
  first: number;
  op: string;
  second: number;
  result: number;
  errorMsg: string;
  doThing() {
    if (((this.first == 1) || (this.first == 0)) && ((this.second == 1) || (this.second == 0))) {
      if (this.first != null && this.op != null && this.second != null) {
        if (this.op == '&&') {
          if (this.first == 1 && this.second == 1) {
            this.result = 1
            this.errorMsg = 'Ошибок нет'
          } else {
            this.result = 0
            this.errorMsg = 'Ошибок нет'
          }
        } else if (this.op == '||') {
          if ((this.first + this.second == 1) || (this.first + this.second == 2)) {
            this.result = 1
            this.errorMsg = 'Ошибок нет'
          } else {
            this.result = 0
            this.errorMsg = 'Ошибок нет'
          }}}
    } else {
      this.result = null
      this.errorMsg = 'Число больше 1 или меньше 0'
    } if (this.inv == '!') {
        if (this.result == 1) {
          this.result = 0
        } else {
          this.result = 1
        }}}}