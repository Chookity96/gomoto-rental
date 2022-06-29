// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mt03 from '../../assets/mt03.png'

const data = [
  {
    category: 'street',
    bikes: [
      {
        name: 'Street Bike 1',
				id: "street1",
				type: 'street',
        about:
          'Liquid-cooled, 4-stroke, DOHC, 4-valves, Electric Starter System, 14L Fuel Tank Capacity',
        image:
          'https://www.hlcorp.com.sg/motorcycles/images_information/pproducts_167.jpg',
      },
      {
        name: 'Street Bike 2',
				id: "street2",
				type: 'street',
        about:
          '2-cylinder, 4-stroke, Liquid-cooled, DOHC, 4-valves, Electric Starter System, 14L Fuel Tank Capacity',
        image:
          'https://www.hlcorp.com.sg/motorcycles/images_information/pproducts_168.jpg',
      },
      {
        name: 'Street Bike 3',
				id: "street3",
				type: 'street',
        about:
          'Liquid-cooled, 4-stroke, 4-valves, 3-cylinder, DOHC, DOHC, 4-valves, Electric Starter System, 14L Fuel Tank Capacity',
        image:
          'https://www.hlcorp.com.sg/motorcycles/images_information/pproducts_161.jpg',
      },
      {
        name: 'Street Bike 4',
				id: "street4",
				type: 'street',
        about:
          'EURO5, 4-stroke, Liquid-cooled, 4-cylinder, DOHC, Electric Starter System, 17L Fuel Tank Capacity',
        image:
          'https://www.hlcorp.com.sg/motorcycles/images_information/pproducts_156.jpg',
      },
			{
        name: 'Street Bike 5',
				id: "street5",
				type: 'street',
        about:
          'EURO5, 4-stroke, Liquid-cooled, 4-cylinder, DOHC, Electric Starter System, 17L Fuel Tank Capacity',
        image:
          'https://www.hlcorp.com.sg/motorcycles/images_information/pproducts_157.jpg',
      },
			{
        name: 'Street Bike 6',
				id: "street6",
				type: 'street',
        about:
          'EURO5, 4-stroke, Liquid-cooled, 4-cylinder, DOHC, Electric Starter System, 17L Fuel Tank Capacity',
        image:
          'https://www.hlcorp.com.sg/motorcycles/images_information/pproducts_129.jpg',
      },
			{
        name: 'Street Bike 7',
				id: "street7",
				type: 'street',
        about:
          'EURO5, 4-stroke, Liquid-cooled, 4-cylinder, DOHC, Electric Starter System, 17L Fuel Tank Capacity',
        image:
          'https://www.hlcorp.com.sg/motorcycles/images_information/pproducts_135.jpg',
      },
    ],
  },
  {
    category: 'sports',
    bikes: [
      {
				id: "sports1",
				type: 'sports',
        name: 'Sports Bike 1',
        about:
          'Liquid-cooled, 4-stroke, DOHC, 4-valves, Electric Starter System, 14L Fuel Tank Capacity',
        image:
          'https://www.hlcorp.com.sg/motorcycles/images_information/pproducts_166.jpg',
      },
      {
        name: 'Sports Bike 2',
				id: "sports2",
				type: 'sports',
        about:
          '2-cylinder, 4-stroke, Liquid-cooled, DOHC, 4-valves, Electric Starter System, 14L Fuel Tank Capacity',
        image:
          'https://www.hlcorp.com.sg/motorcycles/images_information/pproducts_14.jpg',
      },
      {
        name: 'Sports Bike 3',
				id: "sports3",
				type: 'sports',
        about:
          'Liquid-cooled, 4-stroke, 4-valves, 3-cylinder, DOHC, DOHC, 4-valves, Electric Starter System, 14L Fuel Tank Capacity',
        image:
          'https://www.hlcorp.com.sg/motorcycles/images_information/pproducts_115.jpg',
      },
      {
        name: 'Sports Bike 4',
				id: "sports4",
				type: 'sports',
        about:
          'EURO5, 4-stroke, Liquid-cooled, 4-cylinder, DOHC, Electric Starter System, 17L Fuel Tank Capacity',
        image:
          'https://www.hlcorp.com.sg/motorcycles/images_information/pproducts_143.jpg',
      },
    ],
  },
  {
    category: 'touring',
    bikes: [
      {
        name: 'Touring Bike 1',
				id: "touring1",
				type: 'touring',
        about:
          'Liquid-cooled, 4-stroke, DOHC, 4-valves, Electric Starter System, 14L Fuel Tank Capacity',
        image:
				'https://www.hlcorp.com.sg/motorcycles/images_information/pproducts_141.jpg',
      },
      {
        name: 'Touring Bike 2',
				id: "touring2",
				type: 'touring',
        about:
          '2-cylinder, 4-stroke, Liquid-cooled, DOHC, 4-valves, Electric Starter System, 14L Fuel Tank Capacity',
        image:
				'https://www.hlcorp.com.sg/motorcycles/images_information/pproducts_144.jpg',
      },
      {
        name: 'Touring Bike 3',
				id: "touring3",
				type: 'touring',
        about:
          'Liquid-cooled, 4-stroke, 4-valves, 3-cylinder, DOHC, DOHC, 4-valves, Electric Starter System, 14L Fuel Tank Capacity',
        image:
				'https://www.hlcorp.com.sg/motorcycles/images_information/pproducts_58.jpg',
      },
    ],
  },
	{
    category: 'motocross',
    bikes: [
      {
        name: 'Moto-X Bike 1',
				id: "motocross1",
				type: 'motocross',
        about:
          'Liquid-cooled, 4-stroke, DOHC, 4-valves, Electric Starter System, 14L Fuel Tank Capacity',
        image:
          'https://www.hlcorp.com.sg/motorcycles/images_information/pproducts_79.jpg',
      },
      {
        name: 'Moto-X Bike 2',
				id: "motocross2",
				type: 'motocross',
        about:
          '2-cylinder, 4-stroke, Liquid-cooled, DOHC, 4-valves, Electric Starter System, 14L Fuel Tank Capacity',
        image:
          'https://www.hlcorp.com.sg/motorcycles/images_information/pproducts_153.jpg',
      },
    ],
  },
]

export default function handler(req, res) {
  res.status(200).json(data)
}

// JSON representation for FAKI JSON API
// [
//   {
//    "category": "street",
//    "bikes": [
//     {
//      "name": "XSR700",
//      "id": "street1",
//      "type": "street",
//      "about": "Displacement of 689cc, Electric Starter System, 14L Fuel Tank Capacity, CP2, Two cylinder, 4-valves, 4-stroke, Liquid-cooled, DOHC",
//      "image": "https://www.hlcorp.com.sg/motorcycles/images_information/pproducts_167.jpg"
//     },
//     {
//      "name": "XSR900",
//      "id": "street2",
//      "type": "street",
//      "about": "Displacement of 890cc, Electric Starter System, 14L Fuel Tank Capacity, 4-valves, 3-cylinder, EURO5, 4-stroke, Liquid-cooled, DOHC",
//      "image": "https://www.hlcorp.com.sg/motorcycles/images_information/pproducts_168.jpg"
//     },
//     {
//      "name": "MT-07",
//      "id": "street3",
//      "type": "street",
//      "about": "Displacement of 689cc, Electric Starter System, 14L Fuel Tank Capacity, 2-cylinder, 4-stroke, Liquid-cooled, DOHC, 4-valves",
//      "image": "https://www.hlcorp.com.sg/motorcycles/images_information/pproducts_161.jpg"
//     },
//     {
//      "name": "MT 09",
//      "id": "street4",
//      "type": "street",
//      "about": "Displacement of 890cc, Electric Starter System, 14L Fuel Tank Capacity, Liquid-cooled, 4-stroke, 4-valves, 3-cylinder, DOHC",
//      "image": "https://www.hlcorp.com.sg/motorcycles/images_information/pproducts_156.jpg"
//     },
//     {
//      "name": "MT-09 SP",
//      "id": "street5",
//      "type": "street",
//      "about": "Displacement of 890cc, Electric Starter System, 14L Fuel Tank Capacity, Liquid-cooled, 4-stroke, 4-valves, 3-cylinder, DOHC",
//      "image": "https://www.hlcorp.com.sg/motorcycles/images_information/pproducts_157.jpg"
//     },
//     {
//      "name": "MT-10",
//      "id": "street6",
//      "type": "street",
//      "about": "Displacement of 998cc, Electric Starter System, 17L Fuel Tank Capacity, EURO5, 4-stroke, Liquid-cooled, 4-cylinder, DOHC",
//      "image": "https://www.hlcorp.com.sg/motorcycles/images_information/pproducts_129.jpg"
//     },
//     {
//      "name": "MT-10 SP",
//      "id": "street7",
//      "type": "street",
//      "about": "Displacement of 998cc, Electric Starter System, 17L Fuel Tank Capacity, EURO5, 4-stroke, Liquid-cooled, 4-cylinder, DOHC",
//      "image": "https://www.hlcorp.com.sg/motorcycles/images_information/pproducts_135.jpg"
//     }
//    ]
//   },
//   {
//    "category": "sports",
//    "bikes": [
//     {
//      "name": "R7 World GP",
//      "id": "sports1",
//      "type": "sports",
//      "about": "Displacement of 689cc, Electric Starter System, 13L Fuel Tank Capacity, 2-cylinder, Liquid-cooled, EURO5, 4-stroke, 4-valves, DOHC",
//      "image": "https://www.hlcorp.com.sg/motorcycles/images_information/pproducts_166.jpg"
//     },
//     {
//      "name": "YZF-R1",
//      "id": "sports2",
//      "type": "sports",
//      "about": "Displacement of 998cc, Electric Starter System, 18L Fuel Tank Capacity, Liquid-cooled, 4-stroke, forward-inclined parallel 4-cylinder, 4-valves, DOHC",
//      "image": "https://www.hlcorp.com.sg/motorcycles/images_information/pproducts_14.jpg"
//     },
//     {
//      "name": "YZF-R1M",
//      "id": "sports3",
//      "type": "sports",
//      "about": "Displacement of 998cc, Electric Starter System, 17L Fuel Tank Capacity, 4-stroke, liquid-cooled, forward-inclined parallel 4-cylinder, DOHC, 4-valves",
//      "image": "https://www.hlcorp.com.sg/motorcycles/images_information/pproducts_115.jpg"
//     },
//     {
//      "name": "YZF-R3",
//      "id": "sports4",
//      "type": "sports",
//      "about": "Displacement of 321cc, Electric Starter System, 14L Fuel Tank Capacity, 2-cylinder, 4-stroke, liquid-cooled, DOHC, 4-valves",
//      "image": "https://www.hlcorp.com.sg/motorcycles/images_information/pproducts_143.jpg"
//     }
//    ]
//   },
//   {
//    "category": "touring",
//    "bikes": [
//     {
//      "name": "Tracer 9 GT",
//      "id": "touring1",
//      "type": "touring",
//      "about": "Displacement of 847cc, Electric Starter System, 18L Fuel Tank Capacity, 3-Cylinder, 4-stroke, liquid-cooled, DOHC, 4-valves",
//      "image": "https://www.hlcorp.com.sg/motorcycles/images_information/pproducts_141.jpg"
//     },
//     {
//      "name": "NIKEN GT",
//      "id": "touring2",
//      "type": "touring",
//      "about": "Displacement of 847cc, Electric Starter System, 18L Fuel Tank Capacity, 3-cylinder, 4-stroke, liquid-cooled, DOHC, 4-valves",
//      "image": "https://www.hlcorp.com.sg/motorcycles/images_information/pproducts_144.jpg"
//     },
//     {
//      "name": "XV950R",
//      "id": "touring3",
//      "type": "touring",
//      "about": "Displacement of 942cc, Electric Starter System, 17L Fuel Tank Capacity, 4-stroke, air-cooled, 4-valves, SOHC, V-type 2-cylinder",
//      "image": "https://www.hlcorp.com.sg/motorcycles/images_information/pproducts_58.jpg"
//     }
//    ]
//   },
//   {
//    "category": "motocross",
//    "bikes": [
//     {
//      "name": "WR450F",
//      "id": "motocross1",
//      "type": "motocross",
//      "about": "Displacement of 450cc, Electric Starter System, 8L Fuel Tank Capacity, Liquid-cooled, 4-stroke, 4-valves, DOHC",
//      "image": "https://www.hlcorp.com.sg/motorcycles/images_information/pproducts_79.jpg"
//     },
//     {
//      "name": "Ténéré 700",
//      "id": "motocross2",
//      "type": "motocross",
//      "about": "Displacement of 690cc, Electric Starter System, 16L Fuel Tank Capacity, Liquid-cooled, 4-stroke, 4-valves, DOHC, 2-cylinder",
//      "image": "https://www.hlcorp.com.sg/motorcycles/images_information/pproducts_153.jpg"
//     }
//    ]
//   }
//  ]