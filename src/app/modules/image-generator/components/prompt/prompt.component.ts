import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.scss'],
})
export class PromptComponent {
  @Output() public readonly prompted = new EventEmitter<string>();

  public readonly promptForm = new FormGroup({
    prompt: new FormControl<string>('', [Validators.required])
  })

  onSubmit(): void {
    if (
      this.promptForm.valid &&
      this.promptForm.value.prompt &&
      this.promptForm.value.prompt?.length > 0
    ) {
      console.log(this.promptForm)
      this.prompted.emit(this.promptForm.value.prompt);
      this.promptForm.reset();
    }
  }
}
