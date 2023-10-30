import { Component } from '@angular/core';
import { Work } from 'src/app/interfaces/work.interface';
import { WorkService } from 'src/app/services/work.service';

@Component({
  selector: 'app-design-page',
  templateUrl: './design-page.component.html',
})
export class DesignPageComponent {
  public work!: Work[];

  constructor(private workService: WorkService){}

  ngOnInit(): void {
    this.workService.getAboutMini().then((data) => {
      this.work = data;
    })
  }
}
