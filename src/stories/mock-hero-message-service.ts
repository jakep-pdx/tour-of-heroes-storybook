import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockHeroMessageService {

  messages: string[] = ['Test message 1'];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

}

