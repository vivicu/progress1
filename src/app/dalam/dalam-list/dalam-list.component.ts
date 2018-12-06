import { Component, OnInit } from '@angular/core';
import { Dalam } from './dalam.model';

@Component({
  selector: 'app-dalam-list',
  templateUrl: './dalam-list.component.html',
  styleUrls: ['./dalam-list.component.css']
})
export class DalamListComponent implements OnInit {

  dalams: Dalam[] = [
    // tslint:disable-next-line:max-line-length
    new Dalam('Rasuk', '2018', 'Horor', 'Langgir Janakan adalah seorang yang di benci oleh ibunya sendiri. Langgir ini memiliki 3 orang teman baik. Suatu ketika mereka berlibur ke villa. Di villa ini kesetiaann temannya di uji.',
    // tslint:disable-next-line:max-line-length
    'https://3.bp.blogspot.com/-L7r51AVYRWE/WxYrawSxj2I/AAAAAAAAGoU/docXfzTXzcAcUQoVc0e2GsaeJcOvYpdLgCLcBGAs/s1600/Rasuk-%25282018%2529.jpg'),
    // tslint:disable-next-line:max-line-length
    new Dalam('The Perfect Husband', '2018', 'Romantis', 'Ayla adalah seorang siswi yang baru memasuku SMA dan suka musik rock.Ayla juga meiliki pacar yang suka bermain musik rock. Namun, saat itu datang seorang pilot mengaku bahwa dirinya adalah suaminya kelak yang bernama Arsen. Bagaimana kehidupan Ayla selanjutnya?.',
    // tslint:disable-next-line:max-line-length
    'https://pbs.twimg.com/media/DXIMGqwVoAAHrZK.jpg:large')
  ];
  constructor() { }

  ngOnInit() {
  }

}
