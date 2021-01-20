import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
productForm:FormGroup
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.productForm=this.formBuilder.group({
      productName:['',Validators.compose([Validators.required,Validators.minLength(3)])],
      productCategory:['',Validators.compose([Validators.required,Validators.min(1)])],
      productManufacturer:['',Validators.required],
      availableItems:['',Validators.required],
      productPrice:['',Validators.required],
      imageUrl:['',Validators.required],
      productDescription:['',Validators.required],



    })
  }
  addProduct(){

  }

}
