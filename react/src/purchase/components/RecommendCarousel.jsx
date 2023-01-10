import React from 'react'
import Slider from 'react-slick';
import { PurchaseContext } from '../contexts/PurchaseContext';
import '../styles/slick-carousel.css'

export default function BundleCarousel(props) {
    const [purchaseState] = React.useContext(PurchaseContext);
    const {onClick} = props;
    const handleClick = event => {
        onClick(event);
    }

    const sliderElements = [];
    data.forEach(item => {
        sliderElements.push((
            <div key={item.collectionId} className="text-center slider-item">
                <div className="d-flex h-100 justify-content-center align-items-center">
                        <input type="image" disabled={purchaseState.loading} id={item.collectionId} data-product={item.productIndex}
                        onClick={handleClick} src={item.imgSrc} style={{height: '100%', width: 'auto', maxWidth: '100%'}}>
                        </input>
                </div>
                <br />
                <h5>{item.title}</h5>
                <p style={{ fontSize: '12px' }}>{item.description}</p>
            </div>
        ))
    })

    return (
        <div>
            <h2 className="text-center">You May Also Like</h2>
            <Slider {...settings}>
                {sliderElements}
            </Slider>
        </div>
    )
}

const data = [
    {
        collectionId: 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2MjIxMTA3NjE5OQ==',
        productIndex: 0,
        title: 'Particle Illusion',
        description: 'Particle Animation Plugin',
        imgSrc : 'https://borisfx-com-res.cloudinary.com/image/upload/v1628796082/Webshop%20Images/Prod%20Logos/PILogo.png'
    },
    {
        collectionId: 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzMxNjg1MDE3Nw==',
        productIndex: 1,
        title: 'Mocha Essentials',
        description: '7 hours of Mocha Training',
        imgSrc : 'https://cdn.shopify.com/s/files/1/1222/4522/products/mocha-essentials-mosaic-01.jpg?v=1617716317'
    },
    {
        collectionId: 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzE0MDEwNzY0NTAzMQ==',
        productIndex: 0,
        title: 'Beauty Studio',
        description: 'Skin Smoothing & Digital Makeup',
        imgSrc : 'https://cdn.shopify.com/s/files/1/1222/4522/products/BEAUTY_STUDIO.png?v=1574648699'
    },
    {
        collectionId: 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzIzNTgxMzI0OQ==',
        productIndex: 0,
        title: 'Nitro FX',
        description: 'Presets for Avid Sapphire Owners',
        imgSrc : 'https://cdn.shopify.com/s/files/1/1222/4522/products/image_1.png?v=1611261601'
    },
    {
        collectionId: 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzE0MDEwNzY0NTAzMQ==',
        productIndex: 7,
        title: 'Primatte Studio',
        description: 'Premium Keying Plugin',
        imgSrc : 'https://cdn.shopify.com/s/files/1/1222/4522/products/GENERIC_PremiumFilter_transparent.png?v=1574648706'
    },
    {
        collectionId: 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzE2NTUyMzEyODQyMw==',
        productIndex: 0,
        title: 'Optics',
        description: 'VFX Plugin for Photoshop',
        imgSrc : 'https://borisfx-com-res.cloudinary.com/image/upload/v1628796082/Webshop%20Images/Prod%20Logos/OpticsLogo.png'
    }
]

const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
}
