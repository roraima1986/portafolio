import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public spheres: {x: number, y: number}[] = [];

  ngOnInit(): void {
    this.generateSpheres();
    this.animateSpheres();
  }

  generateSpheres() {
    for (let i=0; i<200; i++) {
      this.spheres.push({
        x: this.getRandomPosition(window.innerWidth),
        y: this.getRandomPosition(window.innerHeight)
      })
    }
  }

  getRandomPosition(max:number):number {
    return Math.floor(Math.random() * max);
  }

  animateSpheres() {
    setInterval(() => {
      this.spheres.forEach(sphere => {
        sphere.x += this.getRandomSpeed();
        sphere.y += this.getRandomSpeed();

        if(sphere.x > window.innerWidth) {
          sphere.x = -30;
        }

        if(sphere.y > window.innerHeight) {
          sphere.y = -30
        }
      })
    }, 100)
  }

  getRandomSpeed():number {
    return Math.random() * 2;
  }

  onResize(event:any) {
    this.spheres.forEach(sphere => {
      if(sphere.x > event.target.innerWidth) {
        sphere.x = event.target.innerWidth -30;
      }

      if(sphere.y > event.target.innerHeight) {
        sphere.y = event.target.innerHeight - 30;
      }
    })
  }

}
