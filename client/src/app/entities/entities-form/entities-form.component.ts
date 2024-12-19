import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EntitiesService, Entity } from '../entities.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entities-form',
  templateUrl: './entities-form.component.html',
})
export class EntitiesFormComponent {
  form = this.fb.group({
    name: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private entitiesService: EntitiesService,
    private router: Router
  ) {}

  submit() {
    if (this.form.valid) {
      this.entitiesService.createEntities(this.form.value as Entity).subscribe({
        next: () => this.router.navigate(['/entities']),
        error: (err) => console.error(err),
      });
    }
  }
}
