import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { TaxiranksService } from 'src/app/_services/taxiranks.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  ranks = [{
    taxi:{
      id:0,
      model: "...loading",
      manufacture:"...loading",
      registration: "xxxx-ddd"
    }
  }]

  sharedData:any;
  price = 0;
  myUrl = 'http://localhost:4200'

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private taxiService: TaxiranksService,
  ) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        const result = this.router.getCurrentNavigation()?.extras.state?.taxis;
        const priceResult = this.router.getCurrentNavigation()?.extras.state?.price;
        this.ranks = result;
        console.log(result)
        this.price = priceResult;
      }
      else {
        const carId = this.route.snapshot.params.id;
        this.router.navigate(['']);
        // this.carService.carDetails(carId).subscribe(data => {
        //   this.sharedData = data;
        //   this.total = this.sharedData.price + 15
        // });
      }
      });
    
  }

  ngOnInit(): void {
  }

  goto(itemId:number){
    console.log(this.price)
    const navigationExtras: NavigationExtras = {
      state: {
        price: this.price,
        taxi: itemId
      }
    };
    this.router.navigate(['pay-ride',1], navigationExtras);
  }

  submitForm() {
    const form = document.createElement('form');
    form.style.display = 'none';
    form.method = 'POST';
    form.action = "https://www.payfast.co.za/eng/process";
    
    form.style.display = 'none';
    let paymentId = Math.floor((Math.random() * 10000000) + 1).toString()
    

    let merchant_id = document.createElement('input');
    merchant_id.name = 'merchant_id';
    merchant_id.value= '10566576';
    form.appendChild(merchant_id);

    let merchant_key = document.createElement('input');
    merchant_key.name = 'merchant_key';
    merchant_key.value= 'nznw1degc8slg';
    form.appendChild(merchant_key);

    let payment = document.createElement('input');
    payment.name = 'm_payment_id';
    payment.value= paymentId;
    form.appendChild(payment);

    let amount = document.createElement('input');
    amount.name = 'amount';
    amount.value= '20';
    form.appendChild(amount);

    let itemName = document.createElement('input');
    itemName.name = 'item_name';
    itemName.value= 'taxi-fare'
    form.appendChild(itemName);

    let returnUrl = document.createElement('input');
    returnUrl.name = 'return_url';
    returnUrl.value= this.myUrl + '/suceess';
    form.appendChild(returnUrl);

    let cancelUrl = document.createElement('input');
    cancelUrl.name = 'cancel_url';
    cancelUrl.value= this.myUrl + '/cancel';
    form.appendChild(cancelUrl);

    let notifyUrl = document.createElement('input');
    notifyUrl.name = 'notify_url';
    notifyUrl.value= 'http://app.kabook.africa/notify';
    form.appendChild(returnUrl);
  
    document.body.appendChild(form);
      form.submit();
  }

  taxis(){
    
  }

}
