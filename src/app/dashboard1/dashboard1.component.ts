import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
declare var tableau: any;

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component implements OnInit {

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
    var url = 'https://public.tableau.com/views/AveragePolarityinEachStatefinal/Sheet1?:language=en-GB&publish=yes&:display_count=n&:origin=viz_share_link';
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

  loadVis2() {
    var placeholderDiv = document.getElementById('vis2');
    // Replace this url with the url of your Tableau dashboard
    var url = 'https://public.tableau.com/views/AveragePolarityinEachState/Sheet2?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link';
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

  loadVis3() {
    var placeholderDiv = document.getElementById('vis3');
    // Replace this url with the url of your Tableau dashboard
    var url = 'https://public.tableau.com/views/AveragePolarityinEachState/Sheet3?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link';
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
