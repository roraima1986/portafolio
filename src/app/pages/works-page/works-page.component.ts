import { Component } from '@angular/core';
import { Work } from 'src/app/interfaces/work.interface';
import { WorkService } from 'src/app/services/work.service';

@Component({
  selector: 'app-works-page',
  templateUrl: './works-page.component.html',
  styles: [
  ]
})
export class WorksPageComponent {
  public work!: Work[];

  constructor(private workService: WorkService){}

  ngOnInit(): void {
    this.workService.getAbout()
      .subscribe(
        work => this.work = work
      )
  }
}
