import { Component, OnInit } from '@angular/core';
import { ContractorsService, Contractor } from '../contractors.service';

@Component({
  selector: 'app-contractor-list',
  templateUrl: './contractor-list.component.html',
})
export class ContractorListComponent implements OnInit {
  contractors: Contractor[] = [];

  constructor(private contractorsService: ContractorsService) {}

  ngOnInit() {
    this.fetchContractors();
  }

  fetchContractors() {
    this.contractorsService.getContractors().subscribe({
      next: (data) => (this.contractors = data),
      error: (err) => console.error(err),
    });
  }
}
