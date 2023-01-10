import React from 'react'
import Slider from 'react-slick';
import '../styles/slick-carousel.css'
import { PurchaseContext } from '../contexts/PurchaseContext';


export default function BundleCarousel(props) {
    const [purchaseState] = React.useContext(PurchaseContext);
    const {onClick} = props;
    const handleClick = event => {
        onClick(event);
    }

    const sliderElements = [];
    data.forEach(item => {
        sliderElements.push((
            <div key={item.collectionId} className="slider-item text-center">
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
            <h2 className="text-center">Bundle and Save!</h2>
            <Slider {...settings}>
                {sliderElements}
            </Slider>
        </div>
    )
}

const data = [
    {
        collectionId: 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzE2NjI0MjM1MzI1NQ==',
        productIndex: 0,
        title: 'Boris FX Suite',
        description: 'All Our Products, Largest Savings!',
        imgSrc : 'https://borisfx-com-res.cloudinary.com/image/upload/v1628796082/Webshop%20Images/Prod%20Logos/BFXSuite.png'
    },
    {
        collectionId: 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI5OTM3NjMyMQ==',
        productIndex: 0,
        title: 'Sapphire, Continnum, Mocha Pro',
        description: 'Popular 3 Product Bundle!',
        imgSrc : 'https://borisfx-com-res.cloudinary.com/image/upload/v1628796056/Webshop%20Images/Bundle%20Logos/SaCoMo-3prod.png'
    },
    {
        collectionId: 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI5OTM3NjMyMQ==',
        productIndex: 3,
        title: 'Continuum + Sapphire',
        description: 'The Video Editors\' Choice!',
        imgSrc : 'https://borisfx-com-res.cloudinary.com/image/upload/v1628796056/Webshop%20Images/Bundle%20Logos/Bundle_CoSa-2prod.png'
    },
    {
        collectionId: 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI5OTM3NjMyMQ==',
        productIndex: 4,
        title: 'Silhouette + Mocha Pro',
        description: 'Tracking, Roto & Paint!',
        imgSrc : 'https://borisfx-com-res.cloudinary.com/image/upload/v1628796056/Webshop%20Images/Bundle%20Logos/Bundle_SiMo-2prod.png'
    },
    {
        collectionId: 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI5OTM3NjMyMQ==',
        productIndex: 1,
        title: 'Continuum + Mocha Pro',
        description: 'Combine to Save!',
        imgSrc : 'https://borisfx-com-res.cloudinary.com/image/upload/v1628796056/Webshop%20Images/Bundle%20Logos/Bundle_CoMo-2prod.png'
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
