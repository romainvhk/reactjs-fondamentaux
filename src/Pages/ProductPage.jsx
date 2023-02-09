import React, {useState} from 'react'
import Card from '../Components/Card/Card';
import image_plage from '../assets/image_plage.jpg';
import image_montagne from '../assets/image_montagne.jpg';
import image_ville from '../assets/image_ville.jpg';

export default function ProductPage() {
    const [data, setData] = useState([{
        title: 'La plage',
        image: image_plage,
        description: 'Voici une photo de plage',
    },{
        title: 'La montagne',
        image: image_montagne,
        description: 'Voici une photo de montagne',
    },{
        title: 'La ville',
        image: image_ville,
        description: 'Voici une photo de ville',
    }]);

  return (
    <div>
        {data.map((element, index) => {
            return <Card key={index} title={element.title} image={element.image} description={element.description}/>
        })}
    </div>
  )
}
