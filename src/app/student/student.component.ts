import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EtudiantService } from '../services/etudiant.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  examples: Object[]=[];

  constructor(private router: Router,
    private etuService: EtudiantService) { }

  ngOnInit(): void {
    this.etuService.getEtudiants()
    .subscribe(etu=>{
      this.examples=etu;
    })
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    $(document).ready(function() {
      
      (<any>$('.footable')).footable(
      );

      var numberOfRows = 4;
      
      (<any>$('.footable')).data('page-size', numberOfRows);
      (<any>$('.footable')).trigger('footable_initialized'); 
     

      $("#myInput1").on("keyup", function() {
        var value = (<any>$(this).val()).toLowerCase();
        $("#myTable tbody tr").filter(<any>function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
  });
  }


  getOut(){
    this.router.navigate(['/dashboard']);
    

  }

  onSubmit(){
    $('input[type=checkbox]:checked').each(function()
    {
      console.log($('input[type=checkbox]:checked').val());

    })
  }

  onAdd(){
    this.router.navigate(['/addStudent']);
  }

}
