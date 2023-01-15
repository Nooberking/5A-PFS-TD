import { CenterService } from './../../../../shared/services/center.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-centers-add',
  templateUrl: './centers-add.component.html',
  styleUrls: ['./centers-add.component.css']
})
export class CentersAddComponent {

  constructor(private centerService: CenterService){}
  onClick(){
    this.centerService.resetSelectedCenter();
    this.centerService.changeMode({
      name: 'center-details'
    });

  }

}
