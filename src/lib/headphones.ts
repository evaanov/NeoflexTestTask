import Image from "../component/images/Image.png"
import Image1 from "../component/images/Image1.png"
import Image2 from "../component/images/Image2.png"
import Image3 from "../component/images/Image3.png"
import Image4 from "../component/images/Image4.png"
import Image5 from "../component/images/Image5.png"

export interface Headphone { 
    img: string,
    title: string,
    price: number,
    rate: number,
    count?: number,
}


export const headphones: Headphone[] = [
    {
        img: Image,
        title: 'Apple BYZ S852I',
        price: 2927, 
        rate: 4.7,
    },
    {
        img: Image1,
        title: 'Apple EarPods',
        price: 2327, 
        rate: 4.5,
    },
    {
        img: Image2,
        title: 'Apple EarPods',
        price: 2327, 
        rate: 4.5,
    },
    {
        img: Image,
        title: 'Apple BYZ S852I',
        price: 2927, 
        rate: 4.7,
    },
    {
        img: Image1,
        title: 'Apple EarPods',
        price: 2327, 
        rate: 4.5,
    },
    {
        img: Image2,
        title: 'Apple EarPods',
        price: 2327, 
        rate: 4.5,
    }
]

export const wirelessHeadphones: Headphone[] = [
    {
        img: Image3,
        title: 'BOROFONE BO4',
        price: 7527, 
        rate: 4.7,
    },
    {
        img: Image4,
        title: 'GERLAX GH-04',
        price: 6527, 
        rate: 4.7,
    },
    {
        img: Image5,
        title: 'Apple AirPods',
        price: 9527, 
        rate: 4.7,
    }
]