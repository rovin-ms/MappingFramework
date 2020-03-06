//import * as atlas from 'azure-maps-control';
//const atlas = require('azure-maps-control');

var expect = chai.expect;
var should  = chai.should;

describe("Azure Maps Unit Tests", function() {
    it("Map is not null", function() {
     
      var map = new atlas.Map('myMap', {
        center: [12.492346, 41.890206],
        zoom: 16,
        language: 'en-US',
        authOptions: {
            authType: 'subscriptionKey',
            subscriptionKey: 'ILo2lg8sBEvMbSIagMNW764i2E7smOvNr2DRMGtSsRQ'
        }
      });

      //assert.ifError(map);
      expect(map).not.to.be.null;
    }); 

    it("Convex Hull has 16 points", function() {
     
     //Generate some random coordinates over the USA.
      var shapes = [];
      for (var i = 0; i < 15; i++) {
          shapes.push(new atlas.data.Point([
              Math.random() * 40 - 120,
              Math.random() * 20 + 30
          ]));
      }

      var hull = atlas.math.getConvexHull(shapes);
      shapes.push(hull);
      
      //assert.notEqual(shape.length, 16);

      expect(shapes.length).equal(16);

    });   
    
    it("Convex Hull has 8 points", function() {
     
      //Generate some random coordinates over the USA.
       var shapes = [];
       for (var i = 0; i < 7; i++) {
           shapes.push(new atlas.data.Point([
               Math.random() * 40 - 120,
               Math.random() * 20 + 30
           ]));
       }
 
       var hull = atlas.math.getConvexHull(shapes);
       shapes.push(hull);
       //assert.notEqual(shape.length, 8);
       expect(shapes.length).equal(8);
     });   
     
});
