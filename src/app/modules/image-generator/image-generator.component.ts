import { Component } from '@angular/core';

@Component({
  selector: 'app-image-generator',
  templateUrl: './image-generator.component.html',
  styleUrls: ['./image-generator.component.scss']
})
export class ImageGeneratorComponent {
  prompted(val: string) {
    console.log('El valor es: ', val);
  }
}
