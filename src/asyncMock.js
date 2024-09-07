 const products = [
    {
      id: 1,
      name: "Bestial Malbec",
      price: 48000 ,
      img:'https://www.espaciovino.com.ar/media/default/0001/57/thumb_56153_default_small.jpeg',
      stock: 15
    },
    {
      id: 2,
      name: "Alma Mater Malbec",
      price: 41995,
      img:'https://www.espaciovino.com.ar/media/default/0001/69/thumb_68491_default_small.jpeg',
      stock: 30
    },
    {
      id: 3,
      name: "Luigi Bosca Malbec",
      price: 38800,
      img:'https://www.espaciovino.com.ar/media/default/0001/70/thumb_69544_default_small.jpeg',
      stock: 50
    },
    {
      id: 4,
      name: "The Presidents Malbec",
      price: 36400,
      img:'https://www.espaciovino.com.ar/media/default/0001/70/thumb_69576_default_small.jpeg',
      stock: 25
    },
    {
      id: 5,
      name: "Trapiche Gran Medalla Malbec",
      price: 33000,
      img:'https://www.espaciovino.com.ar/media/default/0001/55/thumb_54099_default_small.jpeg',
      stock: 10
    },
    {
      id: 6,
      name: "Jack Daniels",
      price: 40000,
      category: 'Whisky',
      img:'https://www.espaciovino.com.ar/media/default/0001/63/thumb_62442_default_small.jpeg',
      stock: 10,
      description: 'Descripción de Jack Daniels'
    },
    {
      id: 7,
      name: "Chivas Regal 18 años",
      price: 124000,
      category: 'Whisky',
      img:'https://www.espaciovino.com.ar/media/default/0001/64/thumb_63597_default_small.jpeg',
      stock: 10,
      description: 'Descripción de Chivas Regal 18 años '
    },
    {
      id: 8,
      name: "Dewars 12 años",
      price: 79000,
      category: 'Whisky',
      img:'https://www.espaciovino.com.ar/media/default/0001/62/thumb_61107_default_small.jpeg',
      stock: 10,
      description: 'Descripción de Dewars 12 años'
    },
    {
      id: 9,
      name: "Jhonnie Walker Black Label",
      price: 48000,
      category: 'Whisky',
      img:'https://www.espaciovino.com.ar/media/default/0001/69/thumb_68505_default_small.jpeg',
      stock: 10,
      description: 'Descripción de Jhonnie Walker Black Label '
    },
    {
      id: 10,
      name: "Jhonnie Walker Gold Label",
      price: 93000,
      category: 'Whisky',
      img:'https://www.espaciovino.com.ar/media/default/0001/61/thumb_60200_default_small.jpeg',
      stock: 10,
      description: 'Descripción de Jhonnie Walker Gold Label'
    },
    {
      id: 11,
      name: "Gin Mare",
      price: 114000,
      category: 'Gin',
      img:'https://www.espaciovino.com.ar/media/default/0001/62/thumb_61928_default_small.jpeg',
      stock: 10,
      description: 'Descripción de Gin Mare'
    },
    {
      id: 12,
      name: "Martins Miller",
      price: 64000,
      category: 'Gin',
      img:'https://www.espaciovino.com.ar/media/default/0001/58/thumb_57271_default_small.jpeg',
      stock: 10,
      description: 'Descripción de Martins Millers '
    },
    {
      id: 13,
      name: "Brockmans ",
      price: 100000,
      category: 'Gin',
      img:'https://www.espaciovino.com.ar/media/default/0001/68/thumb_67905_default_small.jpeg',
      stock: 10,
      description: 'Descripción de Brockmans'
    },
    {
      id: 14,
      name: "Hendricks",
      price: 55000,
      category: 'Gin',
      img:'https://www.espaciovino.com.ar/media/default/0001/53/thumb_52867_default_small.jpeg',
      stock: 10,
      description: 'Descripción de Hendricks'
    },
    {
      id: 15,
      name: "Monkey 47",
      price: 62000,
      category: 'Gin',
      img:'https://www.espaciovino.com.ar/media/default/0001/61/thumb_60429_default_small.jpeg',
      stock: 10,
      description: 'Descripción de Monkey 47'
    }   
  ];

  export const getProducts = () => {
    return new Promise((resolve, reject) => {
      //Simulación de datos de productos
        // const products = [
        //   {id: 1, name: 'product 1' },
        //   {id: 2, name: 'Product 2' },
        //   {id: 2, name: 'Product 3' },
        //   {id: 2, name: 'Product 4' },
        //   {id: 2, name: 'Product 5' },
        // ];
        setTimeout(() => {
            resolve(products)
        }, 2000);
    })
  }