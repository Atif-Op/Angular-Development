import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() {

  }
  ngOnInit(): void {
    this.linechart();
  }

  //row-1

  progress_card = [{
    name: "Listed property",
    Count: "26,707",
    width: 25,
    ariavaluenow: 25,
    percentage: "0.3%",
    content: "this week",
    color: "progress-bar-striped",
  },
  {
    name: "Serving cities",
    Count: "384",
    width: 50,
    ariavaluenow: 25,
    content: "7 new cities this week",
    color: " progress-bar-striped bg-warning",

  },
  {
    name: "Online Visitor",
    Count: "84,729",
    width: 75,
    ariavaluenow: 25,
    content: "AVG .327 visit daily",
    color: "progress-bar-striped bg-success",

  },
  {
    name: "Online Queries",
    Count: "87,239",
    width: 100,
    ariavaluenow: 25,
    percentage: "38%",
    content: "past month",
    color: " progress-bar-striped bg-danger",

  }]


  //row2

  //col-1
  current_plan = [{
    name: "Your Current Plan",
    price: 19,
    color: "#512da8",
    css: "card_2",
  }]

  //col-2
  linechart() {
    var myChart = new Chart("myChart", {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun'],
        datasets: [{
          label: 'Queries',
          data: [14, 16, 8, 12, 9, 8],
          backgroundColor:   'rgba(255,64,129,0.4)',
          pointRadius: 0, 
          borderColor: "#6610f2",
          borderWidth: 1,
          tension: 0,
          fill:true,
        },
        {
          label: 'Deals',
          data: [18, 14, 7, 6, 7, 3],
          backgroundColor: "rgba(102,16,242,0.1)",
          pointRadius: 0, 
          borderColor: "#6610f2",
          borderWidth: 1,
          tension:0,
          fill:true,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

  }

  // col-3
  content_card = [{
    title: "Modern Home",
    text1: "Structure sales Pvt. Ltd is boston’s reputed ",
    text2: "government construction company since ",
    text3: "2011.",
    text4: "Biloxy, Boston",
    more: "Read More",
    image: "assets/card-images/home-logo.jpg"

  }]


  // row-3

  creators = [
    {
      name: "Noah Owens",
      img: "assets/images/noah-owens.jpg",
      rating: 4.9,
      deals: "27 Deals"
    },
    {
      name: "Ellen Manning",
      img: "assets/images/ellen-manning.jpg",
      rating: 4.5,
      deals: "21 Deals"
    },
    {
      name: "Angel Jones",
      img: "assets/images/jones.jpg",
      rating: 4.7,
      deals: "13 Deals"
    },
    {
      name: "Dollie Norton",
      img: "assets/images/mila-alba.jpg",
      rating: 4.4,
      deals: "21 Deals"
    },
    {
      name: "Joshua Brian",
      img: "assets/images/steve-smith.jpg",
      rating: 4.3,
      deals: "07 Deals"
    },
  ]

  //row-4

  all: any = [
    {
      category: {
        name: 'all'
      },
      product: {
        title: "Property & sidebar agent",
        location: "Sublevel, Hialeah, Florida",
        price: "$113,859",
        costPerSqft: 6705,
        img:"assets/product/property-6.jpeg",
        btn_css:"sale"
      }
    },

    {
      product: {
        title: "Property & agent at bottom",
        location: "Miami, Florida",
        price: "$125,326",
        costPerSqft: 5230,
        button_css: ".sale",
        img:"assets/product/property-5.jpeg",
        btn_css:"sale"
      }
    },

    {
      product: {
        title: "Modern apartment on 5th floor with views of th ...",
        location: "Saint Petersburg, Florida",
        price: "$113,859",
        costPerSqft: 5130,
        button_css: "rental_button",
        img:"assets/product/property-7.jpeg",
        btn_css:"rental"
      }
    }
  ]


  popular = [
    {
      category: {
        name: 'popular'
      },
      product: {
        title: "Property & sidebar agent",
        location: "Sublevel, Hialeah, Florida",
        price: "$113,859",
        costPerSqft: 6705,
        img:"assets/product/property-6.jpeg",
        btn_css:"sale"
      }
    },

    {
      product: {
        title: "Modern apartment on 5th floor with views of th..",
        location: "Saint Petersburg, Florida",
        price: "$113,859",
        costPerSqft: 5230,
        img:"assets/product/property-7.jpeg",
        btn_css:"rental"
      }
    },
    {
      product: {
        title: "Property & agent at bottom",
        location: "Miami, Florida",
        price: "$125,326",
        costPerSqft: 5130,
        img:"assets/product/property-4.jpeg",
        btn_css:"rental"
      }
    }
  ]

  newjersey = [
    {
      category: {
        name: 'new jersey'
      },
      product: {
        title: "Property & agent at bottom",
        location: "Miami, Florida",
        price: "$125,326",
        costPerSqft: 5230,
        img:"assets/product/property-5.jpeg",
        btn_css:"sale"
      }
    },

    {
      product: {
        title: "Sell beautiful Studio in one of the best areas",
        location: "South Western Ave",
        price: "$130,655",
        costPerSqft: 5230,
        img:"assets/product/property-3.jpeg",
        btn_css:"sale"
      }
    },
    {
      product: {
        title: "Property & sidebar agent",
        location: "Sublevel, Hialeah, Florida",
        price: "$113,859",
        costPerSqft: 6705,
        img:"assets/product/property-8.jpeg",
        btn_css:"sale"
        
      }
    }
  ]


  filterProduct: any;

  function(name: any) {
    if (name === 'all') {
      this.filterProduct = this.all;
    }
    else if(name==='popular'){
      this.filterProduct = this.popular;
    }
    else{
      this.filterProduct=this.newjersey;
    }
  }

 
  //vertical-card
  activites_1 = [{
    img: "assets/card-images/nikki.jpg",
    text: "Mila Alba left a 5 star review on Albama’s House"
  },
  {
    img: "assets/card-images/amay.jpg",
    text: "Callback request from Bob Builder for the property Dimitri Hou"
  },
  {
    img: "assets/card-images/garry-sobars.jpg",
    text: "Congratulations to Tom Moody for joining 10+ club"
  },
  {
    img: "assets/card-images/amay.jpg",
    text: "Norman Dolphi is looking for a house in New Jersy, USA"
  }]

  activites_2 = [
    {
      img: "assets/card-images/amay.jpg",
      text: "Agent Kily Johns has added 7 new photos to the property Albama’s House"
    },
    {
      img: "assets/card-images/garry-sobars.jpg",
      text: "Welcome to a new agent Tom Moody in the Company "
    },
    {
      img: "assets/card-images/nikki.jpg",
      text: "Oliver Shorter is looking for an office space in Colorado, USA "
    }
  ]

}