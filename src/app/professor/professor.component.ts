import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnseignantService } from '../services/enseignant.service';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.scss']
})
export class ProfessorComponent implements OnInit {
  examples:Object[]=[];
  constructor( private router:Router,
    private ensServ : EnseignantService) { }

  ngOnInit(): void {

    this.ensServ.getEnseignants()
    .subscribe(ens=>{
      this.examples=ens;
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
    /* $('input[type=checkbox]:checked').each(function()
    {
      console.log($('input[type=checkbox]:checked').val());

    }) */
    this.router.navigate(['/addProfessor']);
  }

}
