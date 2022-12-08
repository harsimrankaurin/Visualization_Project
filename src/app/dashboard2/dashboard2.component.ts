import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
declare var tableau: any;

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component implements OnInit {

  viz: any
  constructor(private navigate: Location) { }

  ngOnInit(): void {
    this.loadvis1();
    this.loadvis2();
    this.loadvis3();
    this.loadvis4();
  }

  loadvis1() {
    var placeholderDiv = document.getElementById('vis1');
    // Replace this url with the url of your Tableau dashboard
    var url = 'https://public.tableau.com/views/Tweetsentiment-1/TweetSentiment-1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link';
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
    var url = 'https://public.tableau.com/views/Tweetemotion/Tweetemotions?:language=en-US&:display_count=n&:origin=viz_share_link';
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
    var url = 'https://public.tableau.com/views/Tweetsdistribution/Tweetdistribution?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link';
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
    var url = 'https://public.tableau.com/views/Tweetsentiment-2/TweetSentiment-2?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link';
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
