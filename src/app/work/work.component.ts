import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
})
export class WorkComponent {
  projects = [
    {
      title: 'Work 01',
      type: 'Graphic Design',
      imageUrl: './../../assets/images/img-1-C4nS0eD8.jpg',
    },
    {
      title: 'Work 02',
      type: 'Animation',
      imageUrl: './../../assets/images/img-2-D-4H1m4L.jpg',
    },
    {
      title: 'Work 03',
      type: 'Apps',
      imageUrl: './../../assets/images/img-3-pR2ZEVY9.jpg',
    },
    {
      title: 'Work 04',
      type: 'Software',
      imageUrl: './../../assets/images/img-4-tHccITd-.jpg',
    },
    {
      title: 'Work 05',
      type: 'Graphic Design',
      imageUrl: './../../assets/images/img-5-lAucr__a.jpg',
    },
    {
      title: 'Work 06',
      type: 'Animation',
      imageUrl: './../../assets/images/img-6-DFW03AZ3.jpg',
    },
  ];

  // Number of initially visible projects
  visibleItems = 4;

  showMore() {
    this.visibleItems += 2; // Show 2 more projects
  }
}
