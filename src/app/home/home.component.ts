import { Component, OnInit } from '@angular/core';
declare var tableau: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  viz: any
  constructor() { }

  ngOnInit() {
    this.loadRadial();
  }

  loadRadial() {
    var placeholderDiv = document.getElementById('vizContainer');
    // Replace this url with the url of your Tableau dashboard
    var url = 'https://public.tableau.com/views/viz_16692605957980/Sheet5?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link';
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
}
