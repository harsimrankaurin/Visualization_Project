import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
declare var tableau: any;

@Component({
  selector: 'app-dashboard4',
  templateUrl: './dashboard4.component.html',
  styleUrls: ['./dashboard4.component.css']
})
export class Dashboard4Component implements OnInit {

  
  viz: any
  constructor(private navigate: Location) { }

  ngOnInit(): void {
    this.loadVis1();
    this.loadVis2();
    this.loadVis3();
  }


  loadVis1() {
    var placeholderDiv = document.getElementById('vis1');
    // Replace this url with the url of your Tableau dashboard
    var url = 'https://public.tableau.com/views/Sheet1_16702803910770/Sheet22?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link';
    var options = {
      hideTabs: true,
      width: "100%",
      height: "850px",
      onFirstInteractive: function() {
        // The viz is now ready and can be safely used.
        console.log("Run this code when the viz has finished loading.");
      }
    };
    // Creating a viz object and embed it in the container div.
    this.viz = new tableau.Viz(placeholderDiv, url, options);
  }

  loadVis2() {
    var placeholderDiv = document.getElementById('vis2');
    // Replace this url with the url of your Tableau dashboard
    var url = 'https://public.tableau.com/views/Sheet3_16702809095550/Sheet4?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link    ';
    var options = {
      hideTabs: true,
      width: "100%",
      height: "600px",
      onFirstInteractive: function() {
        // The viz is now ready and can be safely used.
        console.log("Run this code when the viz has finished loading.");
      }
    };
    // Creating a viz object and embed it in the container div.
    this.viz = new tableau.Viz(placeholderDiv, url, options);
  }

  loadVis3() {
    var placeholderDiv = document.getElementById('vis3');
    // Replace this url with the url of your Tableau dashboard
    var url = 'https://public.tableau.com/views/Sheet2_16702804592400/Sheet3?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link';
    var options = {
      hideTabs: true,
      width: "100%",
      height: "800px",
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
