let catalog = [
    {
        "title": 'Tacos',
        "category": 'Main Entree',
        "price": 5.99,
        "image": "tacos.jpeg",
        "id": '1'
    },
    {
        "title": 'Meat Lovers',
        "category": 'Sandwich',
        "price": 8.99,
        "image": "sandwich.webp",
        "id": '2'
    },
    {
        "title": 'Salmon',
        "category": 'Main Entree',
        "price": 10.99,
        "image": "salmon.jpeg",
        "id": '3'
    },
    {
        "title": 'Oxtail',
        "category": 'Main Entree',
        "price": 15.99,
        "image": "oxtail.jpeg",
        "id": '4'
    },
    {
        "title": 'Fried Chicken',
        "category": 'Fried Food',
        "price": 14.99,
        "image": "fried chicken.jpg",
        "id": '5'
    },
    {
        "title": 'Fried Catfish',
        "category": 'Fried Food',
        "price": 13.99,
        "image": "fried catfish.jpeg",
        "id": '6'
    },
    {
        "title": 'Burgers',
        "category": 'Sandwich',
        "price": 11.99,
        "image": "burgers.jpeg",
        "id": '7'
    }

];

class DataService{
    getProducts ()
    {
        return catalog;
    }

}

export default DataService;
//dictionary - many object literal 