import images from './images';

const data = [
  {
    "title": "Papadum",
    "price": "$2",
    "para": "Thin crisp made with lentil flour and spices",
    "type": "Appetizers",
    "id": 1
  },
  {
    "title": "Vegetable Samosa",
    "price": "$5",
    "para": "Crispy fried patty stuffed with potatoes and vegetables, served with tamarind chutney",
    "type": "Appetizers",
    "id": 2
  },
  {
    "title": "Vegetable Pakora",
    "price": "$5.50",
    "para": "Chickpea flour battered vegetable fritters, served with tamarind chutney",
    "type": "Appetizers",
    "id": 3
  },
  {
    "title": "Tandoori Roti",
    "price": "$2.50",
    "para": "Whole wheat Indian bread",
    "type": "Indian_Bread",
    "id": 4
  },
  {
    "title": "Tandoori Naan",
    "price": "$3",
    "para": "Traditional Indian flatbread [wheat flour]",
    "type": "Indian_Bread",
    "id": 5
  },
  {
    "title": "Tandoori Garlic Naan",
    "price": "$3.50",
    "para": "Traditional Indian flatbread glazed with garlic butter",
    "type": "Indian_Bread",
    "id": 6
  },
  {
    "title": "Plain Kulcha",
    "price": "$3.50",
    "para": "Indian naan bread made with maida (refined white flour)",
    "type": "Indian_Bread",
    "id": 7
  },
  {
    "title": "Cheese Kulcha",
    "price": "$4",
    "para": "Indian naan bread made with maida (refined white flour) and stuffed with cheese",
    "type": "Indian_Bread",
    "id": 8
  },
  {
    "title": "Basmati Rice",
    "price": "$5",
    "para": "",
    "type": "Rice_Type",
    "id": 9
  },
  {
    "title": "Jeera Rice",
    "price": "$9",
    "para": "Basmati rice with cumin seeds",
    "type": "Rice",
    "id": 10
  },
  {
    "title": "Veg Pulao",
    "price": "$10",
    "para": "Sautéed vegetables served in basmati rice",
    "type": "Rice",
    "id": 11
  },
  {
    "title": "Mango Lassi",
    "price": "$5",
    "para": "",
    "type": "Drinks_and_Desserts",
    "id": 12
  },
  {
    "title": "Traditional Lassi",
    "price": "$4",
    "para": "Sweet or Salty",
    "type": "Drinks_and_Desserts",
    "id": 13
  },
  {
    "title": "Masala Chai",
    "price": "$2",
    "para": "",
    "type": "Drinks_and_Desserts",
    "id": 14
  },
  {
    "title": "Soft drinks",
    "price": "$2",
    "para": "",
    "type": "Drinks_and_Desserts",
    "id": 15
  },
  {
    "title": "Ras Malai",
    "price": "$2",
    "para": "",
    "type": "Drinks_and_Desserts",
    "id": 16
  },
  {
    "title": "Gulab Jamun",
    "price": "$2",
    "para": "",
    "type": "Drinks_and_Desserts",
    "id": 17
  },
  {
    "title": "Tandoori Chicken",
    "price": "$16.99",
    "para": "Bone-chicken marinated in spices and cooked in tandoor oven",
    "type": "Tandoori_Specialities",
    "id": 18
  },
  {
    "title": "Paneer Tikka",
    "price": "$16.99",
    "para": "Indian cottage cheese marinated in traditional Indian spices and grilled in tandoor oven",
    "type": "Tandoori_Specialities",
    "id": 19
  },
  {
    "title": "Ajwain Prawn Tikka",
    "price": "$20.99",
    "para": "Prawns marinated in spices and carom seeds, grilled in tandoor oven",
    "type": "Tandoori_Specialities",
    "id": 20
  },
  {
    "title": "Kalni Kebab",
    "price": "$18.99",
    "para": "Chicken thigh marinated in traditional Indian spices and cooked in tandoor oven",
    "type": "Tandoori_Specialities",
    "id": 21
  },
  {
    "title": "Tangdi Kebab",
    "price": "$18.99",
    "para": "Chicken drumsticks marinated in spices and cooked in tandoor oven",
    "type": "Tandoori_Specialities",
    "id": 22
  },
  {
    "title": "Khandari Chicken Tikka",
    "price": "$18.99",
    "para": "Boneless chicken cooked with ginger, garlic, onion, bell peppers and mix of traditional Indian spices",
    "type": "Tandoori_Specialities",
    "id": 23
  },
  {
    "title": "Vegetarian Biryani",
    "price": "$12.50",
    "para": "Vegetables tossed in basmati rice, cooked with traditional Indian spices, cloves, coriander seeds, star anise seed, cinnamon sticks and dried prune seed",
    "type": "Biryani",
    "id": 24
  },
  {
    "title": "Chicken Biryani",
    "price": "$14.50",
    "para": "Marinated boneless chicken tossed in basmati rice, cooked with traditional Indian Spices, cloves, coriander seeds, star anise seed, cinnamon sticks and dried prune seed",
    "type": "Biryani",
    "id": 25
  },
  {
    "title": "Lamb Biryani",
    "price": "$17.99",
    "para": "Lamb tossed in basmati rice, cooked with traditional Indian spices, cloves, coriander seeds, star anise seed, cinnamon sticks and dried prune seed",
    "type": "Biryani",
    "id": 26
  },
  {
    "title": "Mutton Biryani",
    "price": "$17.99",
    "para": "Mutton tossed in basmati rice, cooked with traditional spices, cloves, coriander seeds, star anise seed, cinnamon sticks and dried prune seed",
    "type": "Biryani",
    "id": 27
  },
  {
    "title": "Shrimp Biryani",
    "price": "$17.99",
    "para": "Shrimp tossed in basmati rice, cooked with traditional spices, cloves, coriander seeds, star anise seed, cinnamon sticks and dried prune seed",
    "type": "Biryani",
    "id": 28
  },
  {
    "title": "Raita",
    "price": "$3.50",
    "para": "Plain yogurt with chopped cucumbers and seasoned with cumin powder, salt & black pepper",
    "type": "Biryani",
    "id": 29
  },
  {
    "title": "Butter Chicken Poutine",
    "price": "$8.99",
    "para": "",
    "type": "Tawa_Specials",
    "id": 30
  },
  {
    "title": "Chicken Finger & Fries",
    "price": "$7.99",
    "para": "",
    "type": "Tawa_Specials",
    "id": 31
  },
  {
    "title": "Grilled Wraps",
    "price": "$9.99",
    "para": "Vegetarian or chicken options available with side salad or fries",
    "type": "Tawa_Specials",
    "id": 32
  },
  {
    "title": "Chana Masala",
    "price": "$12.99",
    "para": "Traditionally spiced chickpea curry",
    "type": "Vegetarian_Curries",
    "id": 33
  },
  {
    "title": "Aloo Gobi",
    "price": "$13.99",
    "para": "Lightly fried cauliflower, seasoned with garlic, ginger, Indian spices and fried with potatoes",
    "type": "Vegetarian_Curries",
    "id": 34
  },
  {
    "title": "Kadai Vegetable",
    "price": "$13.99",
    "para": "Mixed vegetables cooked in a tomato gravy also available as vegan dish upon request",
    "type": "Vegetarian_Curries",
    "id": 35
  },
  {
    "title": "Palak Aloo",
    "price": "$13.99",
    "para": "Pureed spinach gravy with potatoes",
    "type": "Vegetarian_Curries",
    "id": 36
  },
  {
    "title": "Dal Makhani",
    "price": "$14.99",
    "para": "Heavy cream based mixed lentil curry",
    "type": "Vegetarian_Curries",
    "id": 37
  },
  {
    "title": "Palak Paneer",
    "price": "$15.99",
    "para": "Pureed spinach gravy with Indian cottage cheese",
    "type": "Paneer_Curries",
    "id": 38
  },
  {
    "title": "Matar Paneer",
    "price": "$15.99",
    "para": "Tomato gravy with green peas and Indian cottage cheese",
    "type": "Paneer_Curries",
    "id": 39
  },
  {
    "title": "Kadai Paneer",
    "price": "$15.99",
    "para": "Mixed vegetables with Indian cottage cheese cooked in a tomato gravy",
    "type": "Paneer_Curries",
    "id": 40
  },
  {
    "title": "Shahi Paneer",
    "price": "$15.99",
    "para": "Indian cottage cheese simmered in thick creamy tomato based gravy",
    "type": "Paneer_Curries",
    "id": 41
  },
  {
    "title": "Butter Chicken",
    "price": "$15.99",
    "para": "Boneless chicken marinated with tandoori spices in a mild creamy buttery tomato-based gravy",
    "type": "Non_Vegetarian_Curries",
    "id": 42
  },
  {
    "title": "Chicken curry",
    "price": "$15.99",
    "para": "Boneless chicken marinated in traditional Indian spices, simmered in a spiced gravy",
    "type": "Non_Vegetarian_Curries",
    "id": 43
  },
  {
    "title": "Kadai Chicken",
    "price": "$15.99",
    "para": "Boneless chicken marinated in traditional Indian spices, onion tomato, bell peppers in a tomato-based gravy",
    "type": "Non_Vegetarian_Curries",
    "id": 44
  },
  {
    "title": "Chicken Tikka Masala",
    "price": "$17.99",
    "para": "Boneless chicken marinated in traditional Indian spices, cooked in rich and creamy spiced tomato-based gravy",
    "type": "Non_Vegetarian_Curries",
    "id": 45
  },
  {
    "title": "Mutton Curry",
    "price": "$17.99",
    "para": "Bone mutton cooked in gravy with traditional Indian spices",
    "type": "Non_Vegetarian_Curries",
    "id": 46
  },
  {
    "title": "Lamb Curry",
    "price": "$17.99",
    "para": "Boneless lamb cooked in gravy with traditional Indian spices",
    "type": "Non_Vegetarian_Curries",
    "id": 47
  },
  {
    "title": "Shrimp Curry",
    "price": "$17.99",
    "para": "Shrimp cooked marinated with traditional Indian spices in a tomato-based gravy",
    "type": "Non_Vegetarian_Curries",
    "id": 48
  },
  {
    "title": "Chilli Gobi",
    "price": "$13.99",
    "para": "Battered cauliflower, wok-fried with spicy blend of chilies, ginger, garlic, green onions and bell peppers available as combo",
    "type": "Hakka_Specialties",
    "id": 49
  },
  {
    "title": "Chilli Paneer",
    "price": "$15.99",
    "para": "Battered Indian cottage cheese, wok-fried with spicy blend of chilies, ginger, garlic, green onions and bell peppers available as combo",
    "type": "Hakka_Specialties",
    "id": 50
  },
  {
    "title": "Chilli Chicken",
    "price": "$15.99",
    "para": "Battered boneless chicken, wok-fried with spicy blend of chilies, ginger, garlic, green onions and bell peppers available as combo",
    "type": "Hakka_Specialties",
    "id": 51
  },
  {
    "title": "Chilli Fish",
    "price": "$15.99",
    "para": "Battered fish (cod), wok-fried with spicy blend of chilies, ginger, garlic, green onions and bell peppers available as combo",
    "type": "Hakka_Specialties",
    "id": 52
  },
  {
    "title": "Hakka Chowmein Vegetarian",
    "price": "$9.99",
    "para": "Fresh vegetables wok-seared with garlic, ginger, chilies, soy sauce, Indian spices and hakka noodles",
    "type": "Hakka_Specialties",
    "id": 53
  },
  {
    "title": "Hakka Chowmein Chicken",
    "price": "$11.99",
    "para": "Fresh vegetables wok-seared with garlic, ginger, chilies, soy sauce, Indian spices and hakka noodles",
    "type": "Hakka_Specialties",
    "id": 54
  },
  {
    "title": "Hakka Fried Rice Vegetarian",
    "price": "$9.99",
    "para": "Basmati rice stir-fried with vegetables, garlic, ginger and soy sauce",
    "type": "Hakka_Specialties",
    "id": 55
  },
  {
    "title": "Hakka Fried Rice Chicken",
    "price": "$11.99",
    "para": "Basmati rice stir-fried with vegetables, garlic, ginger and soy sauce",
    "type": "Hakka_Specialties",
    "id": 56
  }
]


export default { data };