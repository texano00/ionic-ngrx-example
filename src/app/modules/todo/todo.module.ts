// Ionic
import { IonicModule } from 'ionic-angular';

// Angular
import { NgModule } from '@angular/core';

// Todo
import { ToDoPage } from './todo';

@NgModule({
  declarations: [ToDoPage],
  imports: [IonicModule.forRoot(ToDoPage)]
})
export class ToDoModule {}
