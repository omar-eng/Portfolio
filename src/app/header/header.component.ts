import { Component } from '@angular/core';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgbProgressbarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  developer_name='Omar Tarek'

}
