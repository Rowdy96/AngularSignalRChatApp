import { Component, OnInit } from '@angular/core';
import { HubConnection,HubConnectionBuilder } from '@aspnet/signalr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ClientApp';
  
  private  _hubConnection: HubConnection;
  name = '';
  message = '';
  messages: string[] = [];
  constructor() {
    debugger
  }

  ngOnInit() {
    this.name = window.prompt('Your name:', 'Emily');

  
    this._hubConnection = new HubConnectionBuilder().withUrl("https://localhost:44305/chatHub").build();
    debugger;
    this._hubConnection
      .start()
      .then(() => {
        alert("Connection started!")
        console.log()
      }
      )
      .catch(err => console.log('Error while establishing connection :('));
   
      this._hubConnection.on('SendMessage', (name: string, receivedMessage: string) => {
        const text = `${name}: ${receivedMessage}`;
        this.messages.push(text);
      });
  }

  public sendMessage(): void {
    this._hubConnection
      .invoke('SendMessage', this.name, this.message)
      .then(() => this.message = '')
      .catch(err => console.error(err));
  }

}
