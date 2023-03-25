import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageGeneratorComponent } from './modules/image-generator/image-generator.component';
import { PromptComponent } from './modules/image-generator/components/prompt/prompt.component';
import { GalleryComponent } from './modules/image-generator/components/gallery/gallery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ImageGeneratorComponent,
    PromptComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
