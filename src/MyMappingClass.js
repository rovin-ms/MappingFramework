import * as atlas from 'azure-maps-control';
//const atlas = require('azure-maps-control');

export class MyMappingClass {
    constructor() {
        this.map;
    }
    setupMap() {
            //Initialize a map instance.
            this.map = new atlas.Map('myMap', {
                center: [-97.4, 39.6],
                   zoom: 3,
                style: "grayscale_dark",
                //Add your Azure Maps subscription key to the map SDK. Get an Azure Maps key at https://azure.com/maps
                authOptions: {
                    authType: 'subscriptionKey',
                    subscriptionKey: 'zpfZ4G5LWuACGuIVGZTfMBWwr42HBb3poVE9tdYy-ow'
                }
            });

            console.log(this.map);
    }

    createConvexHull(count) {
        //Generate some random coordinates over the USA.
        var shapes = [];
        for (var i = 0; i < count; i++) {
            shapes.push(new atlas.data.Point([
                Math.random() * 40 - 120,
                Math.random() * 20 + 30
            ]));
        }
        var hull = atlas.math.getConvexHull(shapes);
        shapes.push(hull);
        return shapes;

    }
}

