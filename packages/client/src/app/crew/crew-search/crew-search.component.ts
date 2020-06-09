import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CrewService } from 'src/app/core/services/crew.service';

@Component({
  selector: 'app-crew-search',
  templateUrl: './crew-search.component.html',
  styleUrls: ['./crew-search.component.scss'],
})
export class CrewSearchComponent implements OnInit {
  searchForm = this.fb.group({
    search: [''],
  });

  constructor(private fb: FormBuilder, private crewService: CrewService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.crewService.search(this.searchForm.value);
  }
}
