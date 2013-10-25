
Ext.define('Rockola.view.Intro', {
    extend: 'Ext.Container',

    requires: [
        'Ext.carousel.Carousel',
        'Ext.Img'
    ],

    config: {
        cls: 'cards',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        defaults: {
            flex: 1
        },
        items: [{
            xtype: 'carousel',
            direction: 'horizontal',
            directionLock: true,
            items: [{
               // cls: 'card',
                items:[{
						    xtype: 'image',
						    cls: 'my-carousel-item-img',
						    src: 'resources/intro/rockola1.jpg'
						}]
            		},
		            {
		                cls: 'card',
		                items:[{
						    xtype: 'image',
						    cls: 'my-carousel-item-img',
						    src: 'resources/intro/rockola2.jpg'
						}]
		            },
		            {
		                cls: 'card',
		                items:[{
						    xtype: 'image',
						    cls: 'my-carousel-item-img',
						    src: 'resources/intro/rockola3.jpg'
						}]
		            },
		            {
		                cls: 'card',
		                items:[{
						    xtype: 'image',
						    cls: 'my-carousel-item-img',
						    src: 'resources/intro/rockola4.jpg'
						}]
		            },
		            {
		                cls: 'card',
		                items:[{
						    xtype: 'image',
						    cls: 'my-carousel-item-img',
						    src: 'resources/intro/rockola5.jpg'
						}]
		            },
		            {
		                cls: 'card',
		                items:[{
						    xtype: 'image',
						    cls: 'my-carousel-item-img',
						    src: 'resources/intro/rockola6.jpg'
						}]
		            }]
        }]
    }
});
