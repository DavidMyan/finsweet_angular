import { Component, OnInit } from '@angular/core';
import { CategoryCard } from 'src/app/modues/glob_muduls';
import { HttpService } from 'src/app/service/http.service';
import { environment } from 'src/environment/environment';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogForCategoryComponent } from './dialog-for-category/dialog-for-category.component';

@Component({
  standalone: true,
  imports:[MatIconModule,MatTableModule],
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent implements OnInit{
  isDelete:boolean = false
  isAdd:boolean = false
  categoryTableItem:CategoryCard[] = []
  displayedColumns: string[] = ['id', 'Image' ,'Name', 'description','Action'];
  dialogRef: any;

constructor(private http:HttpService,public dialog: MatDialog){}

openDeleteDialog(deletId: number): void {
  this.isDelete = true;
  this.isAdd = false;
  const dialogRef = this.dialog.open(DialogForCategoryComponent, {
    width: '250px',
    data: { 
      isDelete: this.isDelete,
      isAdd: this.isAdd,
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    this.isDelete = false;
    if (result) {
      this.deleteCategory(deletId);
    }
  });
}

openEditDialog(category: CategoryCard,categoryId:number): void {
  this.isDelete = false;
  this.isAdd = false;
  const dialogRef = this.dialog.open(DialogForCategoryComponent, {
    width: '250px',
    data: {
      isDelete: this.isDelete,
      isAdd: this.isAdd,
      action: 'edit',
      categoryData: { ...category } 
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result && result.data) {
      const updatedCategoryData = result.data
      if (result.action === 'edit') {
        dialogRef.componentInstance.form.patchValue({
          titl: updatedCategoryData.title,
          imag: updatedCategoryData.image,
          short_descriptio: updatedCategoryData.short_description
        });
        this.http.editItem<CategoryCard>(`${environment.category.edit}/${categoryId}`, updatedCategoryData).subscribe(() => {
          this.getCategorty();
        });
      } else if (result.action === 'add') {
        this.http.addItem<CategoryCard>(`${environment.category.post}`, updatedCategoryData).subscribe(() => {
          this.getCategorty();
        });
      }
    }
    
  });
}

openAddDialog(): void {
  this.isDelete = false;
  this.isAdd = true;
  const dialogRef = this.dialog.open(DialogForCategoryComponent, {
    width: '250px',
    data: { 
      isDelete: this.isDelete,
      isAdd: this.isAdd,
      action: 'add'
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result && result.data) {
      const newCategoryData = result.data;
      
      if (result.action === 'add') {
        this.http.addItem<CategoryCard>(`${environment.category.post}`, newCategoryData).subscribe(() => {
          this.getCategorty();
        });
      }
    }
    
  });
}
  ngOnInit(): void {
    this.getCategorty()
  }
  getCategorty(){
    this.http.getItem<CategoryCard[]>(`${environment.category.get}`).subscribe(data =>{
      this.categoryTableItem = data
    })
  }
  deleteCategory(deletId:number){
    this.http.deletItem(`${environment.category.delete}/${deletId}`).subscribe(()=>{
      this. getCategorty();
    })
  }
}


