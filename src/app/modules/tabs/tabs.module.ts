// Ionic
import { IonicModule } from 'ionic-angular';

// Angular
import { NgModule } from '@angular/core';

// Todo
import { TabsPage } from './tabs';

@NgModule({
  declarations: [TabsPage],
  imports: [IonicModule.forRoot(TabsPage)]
})
export class TabsModule {}
