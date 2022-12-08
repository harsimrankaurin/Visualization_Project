import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
declare var tableau: any;

@Component({
  selector: 'app-dashboard3',
  templateUrl: './dashboard3.component.html',
  styleUrls: ['./dashboard3.component.css']
})
export class Dashboard3Component implements OnInit {

  viz: any
  constructor(private navigate: Location) { }

  ngOnInit(): void {
    this.loadvis1();
    this.loadvis2();
    this.loadvis3();
    this.loadvis4();
    this.loadvis5();
  }

  loadvis1() {
    var placeholderDiv = document.getElementById('vis1');
    // Replace this url with the url of your Tableau dashboard
    var url = 'https://public.tableau.com/views/Book1_16702662085030/Sheet2?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link';
    var options = {
      hideTabs: true,
      onFirstInteractive: function() {
        // The viz is now ready and can be safely used.
        console.log("Run this code when the viz has finished loading.");
      }
    };
    // Creating a viz object and embed it in the container div.
    this.viz = new tableau.Viz(placeholderDiv, url, options);
  }

  loadvis2() {
    var placeholderDiv = document.getElementById('vis2');
    // Replace this url with the url of your Tableau dashboard
    var url = 'https://public.tableau.com/views/Book5_16702757250450/Sheet3?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link';
    var options = {
      hideTabs: true,
      onFirstInteractive: function() {
        // The viz is now ready and can be safely used.
        console.log("Run this code when the viz has finished loading.");
      }
    };
    // Creating a viz object and embed it in the container div.
    this.viz = new tableau.Viz(placeholderDiv, url, options);
  }

  loadvis3() {
    var placeholderDiv = document.getElementById('vis3');
    // Replace this url with the url of your Tableau dashboard
    var url = 'https://public.tableau.com/views/Book8_16702768309360/Sheet5?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link';
    var options = {
      hideTabs: true,
      onFirstInteractive: function() {
        // The viz is now ready and can be safely used.
        console.log("Run this code when the viz has finished loading.");
      }
    };
    // Creating a viz object and embed it in the container div.
    this.viz = new tableau.Viz(placeholderDiv, url, options);
  }

  loadvis4() {
    var placeholderDiv = document.getElementById('vis4');
    // Replace this url with the url of your Tableau dashboard
    var url = 'https://public.tableau.com/views/Book9_16702769329510/Sheet4?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link';
    var options = {
      hideTabs: true,
      onFirstInteractive: function() {
        // The viz is now ready and can be safely used.
        console.log("Run this code when the viz has finished loading.");
      }
    };
    // Creating a viz object and embed it in the container div.
    this.viz = new tableau.Viz(placeholderDiv, url, options);
  }

  loadvis5() {
    var placeholderDiv = document.getElementById('vis5');
    // Replace this url with the url of your Tableau dashboard
    var url = 'https://public.tableau.com/views/Radial_16686543858730/Sheet5?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link';
    var options = {
      hideTabs: true,
      onFirstInteractive: function() {
        // The viz is now ready and can be safely used.
        console.log("Run this code when the viz has finished loading.");
      }
    };
    // Creating a viz object and embed it in the container div.
    this.viz = new tableau.Viz(placeholderDiv, url, options);
  }

  backClicked() {
    this.navigate.back();
  }

}
