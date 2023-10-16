import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/interfaces/about.interface';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
})
export class AboutPageComponent implements OnInit {
  public about!: About[];

  constructor(private aboutService: AboutService){}

  ngOnInit(): void {
    this.aboutService.getAbout()
      .subscribe(
        about => this.about = about
      )
  }
}
