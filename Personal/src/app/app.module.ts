import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponentComponent } from './card-component/card-component.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { SecondContentComponent } from './second-content/second-content.component';
import { NavigationComponentComponent } from './navigation-component/navigation-component.component';
import { GraphCardComponent } from './graph-card/graph-card.component';
import {MessagesComponent} from './messages-component/messages-component'

@NgModule({
  declarations: [
    AppComponent,
    CardComponentComponent,
    SidebarComponent,
    ContentComponent,
    SecondContentComponent,
    NavigationComponentComponent,
    GraphCardComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
