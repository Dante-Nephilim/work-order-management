import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Contractor, ContractorsService } from '../contractors.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contractor-form',
  templateUrl: './contractor-form.component.html',
})
export class ContractorFormComponent {
  form = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private contractorsService: ContractorsService,
    private router: Router
  ) {}

  submit() {
    if (this.form.valid) {
      this.contractorsService
        .createContractor(this.form.value as Contractor)
        .subscribe({
          next: () => this.router.navigate(['/contractors']),
          error: (err) => console.error(err),
        });
    }
  }
}
