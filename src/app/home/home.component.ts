/**
 * Title: home.component.ts
 * Author: Professor Krasso
 * Date: 9 September 2020
 * Modified: Joann Saeou
 * Description: Home component
 */

import { Component, OnInit } from '@angular/core';
import { IProduct } from '../products.interface';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Array<IProduct>; // variable to hold an array of fruit objects
  selectedProducts: Array<IProduct>; // variable to hold the selected fruit objects
  productForm: FormGroup; // variable to build the Angular form

  constructor(private fb: FormBuilder) {

    /**
     * Creates a new array of fruit objects
     */
    this.products = [
      {
     id: 'A',
     title: 'Password Reset',
     description: 'To reset your Forgotten/lost password',
     price: 39.99
      },
      {
        id: 'B',
        title: 'Spyware Removal',
        description: 'To remove the Spyware completely',
        price: 99.99
         },
         {
          id: 'C',
          title: 'RAM Upgrade',
          description: 'To have your memory-space upgraded ',
          price: 129.99
           },
           {
            id: 'D',
            title: 'tune-up',
            description: 'To have your computer/laptop  be tuning up to the latest version',
            price: 89.99
             },
             {
              id: 'E',
              title: 'Keyboard Cleaning',
              description: 'To have your keyboard be completely clean and Dust-Free away',
              price: 45.00
               },
               {
                id: 'F',
                title: 'Disk Clean-Up',
                description: 'To have your disk be cleaned-up completely',
                price: 149.99
                 },
                 {
                  id: 'G',
                  title: 'Software Installation',
                  description: 'To install a specific  software program for you',
                  price: 49.99
                   }



    ];
  }

  /**
   * Returns the FormArray; this is needed to access the fruitOptions field
   */
  get productFormArray(): FormArray {
    return this.productForm.controls.fruitOptions as FormArray;
  }

  /**
   * Dynamically adds form controls to the FormArray. Setting the control to false, sets the checkboxes to unselected.
   */
  private addProductCheckboxes(): void {
    this.products.forEach(() => this.productFormArray.push(new FormControl(false)));
  }

  ngOnInit(): void {
    /**
     * Creates a new Angular Reactive Form
     */
    this.productForm = this.fb.group({
      fruitOptions: new FormArray([])
    });

    /**
     * Adds the checkboxes to the Fruit Form.
     */
    this.addProductCheckboxes();
  }

  // tslint:disable-next-line:typedef
  onSubmit() {

    /**
     * Loops over the Form and builds a new array of only the selected Fruit objects. We are looking for the "checked status" and using
     * the filter() function to remove the non-selected fruit objects.
     */
    this.selectedProducts = this.productForm.value.fruitOptions
      .map((checked, index) => checked ? this.products[index] : null)
      .filter(v => v !== null);

      /**
       * Writes the selected objects to the browsers console window.
       */
    console.log(this.selectedProducts);
  }
}
