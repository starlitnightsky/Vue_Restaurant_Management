const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const cors = require("cors")
const app = express();
const port = 9000;
const { uuid } = require("uuidv4");

// setup middleware
app.use(bodyParser.json());
app.use(cors());

//
var _dishes = [
    {
        name: 'Spaghetti Carbonara',
        description: 'Pasta with bacon, eggs, and parmesan cheese',
        price: 10,
        category: 'Main Course',
        availability: 'All Day',
        waitTime: 15,
        imageUrl: 'https://www.gutekueche.at/storage/media/recipe/101381/2127_Spaghetti-Carbonara-1.jpg',
        _id: 'aa52a01b-56e3-48f4-b386-921965aa53bc',
        quantity: 2,
    },

    {
        name: 'Tiramisu',
        description: 'Coffee-flavored Italian dessert it has biscuits and delicious Rum',
        price: 6,
        category: 'Dessert',
        availability: 'Lunch',
        waitTime: 10,
        imageUrl: 'https://sallysbakingaddiction.com/wp-content/uploads/2019/06/homemade-tiramisu-2.jpg',
        _id: 'aa52a01b-56e3-48f4-b386-921965aa541',
        quantity: 2,
    },
    {
        name: "Vegetarian Omelette",
        description: "A fluffy omelette made with eggs, cheese, and a variety of fresh vegetables.",
        price: 8.99,
        category: "Beverage",
        availability: "Dinner",
        imageUrl: 'https://feelgoodfoodie.net/wp-content/uploads/2017/02/veggie-omelette-09.jpg',
        _id: '4564213-56e3-48f4-b386-921965aa23231',
        quantity: 3,
        waitTime: 15,
    },
    {
        name: "Avocado Toast",
        description: " delicious and healthy dish that features the creamy texture of ripe avocados paired with the tangye ",
        price: 7.99,
        category: "Starter",
        availability: "Dinner",
        imageUrl: "https://cdn.loveandlemons.com/wp-content/uploads/2020/01/avocado-toast.jpg",
        _id: '854223-56e3-48f4-b386-921965aa23231',
        quantity: 23,
        waitTime: 10,
    },
    {
        name: "Spinach and Ricotta",
        description: "Jumbo pasta shells stuffed with a mixture of spinach, ricotta cheese, and marinara mixture of spinach. pasta shells stuffed",
        price: 14.99,
        category: "Main Course",
        availability: "Breakfast",
        imageUrl: "https://www.jocooks.com/wp-content/uploads/2012/02/stuffed-shells-1-14.jpg",
        _id: '8542233242123-6e3-48f4-b386-921965aa232355',

        quantity: 67,
        waitTime: 20,
    },
    {
        name: "Vegetable Curry",
        description: "A spicy and aromatic Indian curry made with a variety of fresh vegetables and served with rice or naan bread.",
        price: 16.99,
        category: "Main Course",
        availability: "Lunch",
        imageUrl: "https://www.acouplecooks.com/wp-content/uploads/2020/02/Vegetable-Curry-001.jpg",
        _id: '2322s3-56e3-48f4-b386-92196asdasd5aa23231',
        quantity: 45,
        waitTime: 25,
    },
];

// get dishes
router.get('/dishes', (req, res) => {
    res.json({
        status: "OK",
        data: _dishes
    });
});

// clear dishes
router.get('/dishes/clear', (req, res) => {
    _dishes = [];

    res.json({
        status: "OK"
    });
});

// get dish by id
router.get('/dishes/:_id', (req, res) => {
    const dish = _dishes.find(x => x._id === req.params._id);

    res.json({
        status: "OK",
        data: dish ? dish : null
    });
});

// insert/update dish
router.put('/dishes', (req, res) => {
    if (req.body == null) {
        res.json({
            status: "Failed",
            message: "No content provided"
        });
    }
    else {
        let dish = req.body,
            status = "OK";

        if (!dish._id) {
            //
            dish._id = uuid();
            dish._Created = new Date();
            dish._Changed = null;

            //
            _dishes.push(dish);
        }
        else {
            //
            const dishIndex = _dishes.findIndex(x => x._id === dish._id);

            //
            if (dishIndex >= 0) {
                //
                dish._Changed = new Date();

                //
                _dishes[dishIndex] = dish;
            }
            else {
                //
                status = `dish not found for _id ${dish._id}`;
            }
        }

        res.json({
            status: status,
            data: dish
        });
    }
});

// delete dish
router.delete('/dishes/:_id', (req, res) => {
    let dishIndex = _dishes.findIndex(x => x._id === req.params._id);

    if (dishIndex !== -1) {
        _dishes.splice(dishIndex, 1);
    }

    res.json({
        status: "OK",
        message: dishIndex !== -1 ? "Dish deleted" : "Dish not found"
    });
});


//
app.use(router);

//
app.listen(port, () => {
    console.log(`api is ready on http://localhost:${port}`)
});