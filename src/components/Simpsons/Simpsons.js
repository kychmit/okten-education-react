import {Simpson} from "../Simpson/Simpson";

const Simpsons = () => {
    const simpsons = [
        {
            id:1,
            name: 'Homer',
            surname:'Simpson',
            image:'https://seeklogo.com/images/H/homer-simpson-holding-beer-duff-logo-9172512EF9-seeklogo.com.png'
        },
        {
            id:2,
            name: 'Bart',
            surname:'Simpson',
            image:'https://www.nicepng.com/png/detail/41-416082_bart-simpsons-bape-homer-homersimpson-money-bartsimpson-simpsons.png'
        },
        {
            id:3,
            name: 'Marge',
            surname:'Simpson',
            image:'https://mystickermania.com/cdn/stickers/7/1843-512x512.png'
        },
        {
            id:4,
            name: 'Maggie',
            surname:'Simpson',
            image:'https://www.freeiconspng.com/thumbs/maggie-simpson-png/maggie-simpson-png-13.png'
        },
        {
            id:5,
            name: 'Lisa',
            surname:'Simpson',
            image:'https://freepngimg.com/thumb/the_simpsons/166777-simpsons-the-free-photo-thumb.png'
        },
    ]
    return (
        <div>
            {
                simpsons.map(simpson => <Simpson key={simpson.id} simpson={simpson}/>)
            }
        </div>
    );
};

export {Simpsons};