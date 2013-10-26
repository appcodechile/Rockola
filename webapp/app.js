//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src'
});
//</debug>

/**
 * This example demonstrates the Carousel component in Sencha Touch 2.
 *
 * The carousel can run both horizontally and vertically, and in this example in combine both
 * of them together.
 *
 * The final result will be 4 horizontal carousels inside 1 vertical carousel.
 * Each of the horizontal carousels will have a category of images within it.
 */
Ext.application({
    startupImage: {
        '320x460': 'resources/startup/Default.jpg', // Non-retina iPhone, iPod touch, and all Android devices
        '640x920': 'resources/startup/640x920.png', // Retina iPhone and iPod touch
        '640x1096': 'resources/startup/640x1096.png', // iPhone 5 and iPod touch (fifth generation)
        '768x1004': 'resources/startup/768x1004.png', //  Non-retina iPad (first and second generation) in portrait orientation
        '748x1024': 'resources/startup/748x1024.png', //  Non-retina iPad (first and second generation) in landscape orientation
        '1536x2008': 'resources/startup/1536x2008.png', // : Retina iPad (third generation) in portrait orientation
        '1496x2048': 'resources/startup/1496x2048.png' // : Retina iPad (third generation) in landscape orientation
    },

    isIconPrecomposed: false,
    icon: {
        57: 'resources/icons/icon.png',
        72: 'resources/icons/icon@72.png',
        114: 'resources/icons/icon@2x.png',
        144: 'resources/icons/icon@144.png'
    },

    //here we require any components we are using in our application
    requires: [
        'Ext.carousel.Carousel',
        'Ext.Img',
        'Ext.device.Device'
    ],

    /**
     * The launch method is called when the browser is ready and the application is ready to
     * launch.
     */
    launch: function() {
    	
        var categories = ['intro'],
            itemsCountPerCategory = 6,
            horizontalCarousels = [],
            items, i, j, ln, category;

        
        for (i = 0,ln = categories.length; i < ln; i++) {
            items = [];
            category = categories[i];

            for (j = 1; j <= itemsCountPerCategory; j++) {
                items.push({
                    xtype: 'image',
                    cls: 'my-carousel-item-img',
                    src: 'resources/' + category + '/rockola' + j + '.jpg'
                });
            }

            horizontalCarousels.push({
                xtype: 'carousel',
                //the direction is horizontal
                direction: 'horizontal',

                //we turn on direction lock so you cannot scroll diagonally
                directionLock: true,
                flex: Ext.os.is.Phone ? 5 : 6,
                        config: {
                            fullscreen: true
                        },

                //and give it the items array
                items: items
            });
        }

        //and finally we create the vertical carousel which contains each of the horizontal
        //category carousels above
        Ext.Viewport.add({
            xtype: 'carousel',
            fullscreen: true,
            bufferSize: 2,

            //this time direction vertical
            direction: 'vertical',

            //and the horizontalCarousels array
            items: horizontalCarousels
        });
    }
});

