import { Server, Model } from "miragejs";


export default () => {
  return new Server({
    models: {
      recipe: Model.extend()
    },
    seeds(server) {
      server.db.loadData({
        recipes: [
          {
            id: "01",
            title: "Strawberry Cheesecake",
            description:
              "This strawberry cheesecake is the summer dessert dreams are made of.",
            keywords: [
              { id: "k01", label: "cakes" },
              { id: "k02", label: "dessert" }
            ],
            instructions:
              "1. Brush the inside of a 20cm/8in springform tin with the sunflower oil, and line the base with a disc of baking parchment.\n\n2. Put the digestive biscuits into a sealable freezer bag. Push all the air out and seal the bag. Crush the biscuits with a rolling pin, until they are reduced to sand-like crumbs.\n\n3. Melt the butter in a large saucepan. Stir in the biscuit crumbs and cinnamon. Press the crumbs into the bottom of the tin. Chill in the refrigerator for 30 minutes.\n\n4. Chop 150g/5oz of the strawberries in half from top to bottom and arrange around the edge of the prepared tin, cut side-up. Chop the remaining berries into small pieces.\n\n5. Melt the chocolate in a heatproof bowl, either over a pan of simmering water, making sure the bowl doesn’t touch the water, or in a microwave.\n\n6. Beat together the cream cheese, vanilla, lemon zest and honey in a mixing bowl. Stir in the chopped strawberries.\n\n7. In another bowl, whisk the double cream until it holds a floppy peak.\n\n8. Fold the melted chocolate into the cream cheese mixture, followed by the double cream. Add more honey if needed.\n\n9.Spoon the filling into the tin, being careful not to move the strawberries on the edge. Spread level with a palette knife or the back of a spoon, cover with cling film and chill overnight, until firm.\n\n10.Carefully remove the cheesecake from the tin and put on a serving plate. Slice or quarter extra strawberries to arrange on top.",
            ingredients: [
              {
                id: "ig01",
                label: "2 tsp sunflower oil"
              },
              {
                id: "ig02",
                label: "200g digestive biscuits"
              },
              {
                id: "ig03",
                label: "100g unsalted butter"
              },
              {
                id: "ig04",
                label: "1.5 tsp ground cinnamon"
              },
              {
                id: "ig05",
                label: "100g white chocolate, roughly chopped"
              },
              {
                id: "ig06",
                label: "400g strawberries, trimmed"
              },
              {
                id: "ig07",
                label: "300g full fat cream cheese"
              },
              {
                id: "ig08",
                label: "1 tsp vanilla extract"
              },
              {
                id: "ig09",
                label: "1 tbsp maple syrup"
              },
              {
                id: "ig10",
                label: "200ml double cream"
              }
            ],
            dishType: "Vegetarian",
            recipeImg:
              "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/no-bake_strawberry_30276_16x9.jpg"
          },
          {
            id: "02",
            title: "Chicken Parmigiana",
            description:
              "Chicken parmagiana is the easy Italian-American chicken bake that's perfect for midweek cooking. ",
            keywords: [
              { id: "k01", label: "italian" },
              { id: "k02", label: "chicken" }
            ],
            instructions:
              "1. Heat 1 tablespoon of the oil in a saucepan over a medium heat and fry the garlic until soft. Add the tomatoes and gently simmer for 30 minutes.\n\n2. Preheat the oven to 220C/200C Fan/Gas 7. Lay the chicken breasts in between two sheets of baking paper and bash with a meat tenderiser or rolling pin, until flattened slightly.\n\n3.Season the breadcrumbs with salt in a shallow bowl or plate. Put the egg in another shallow bowl. Coat the chicken in the egg and then in the breadcrumbs.\n\n4. Heat the remaining oil and the butter in a frying pan over a medium–high heat. Add the chicken and cook for 5 minutes, or until crisp, turning halfway through.\n\n5.Put half of the tomato sauce in a shallow ovenproof dish. Lay the chicken on top, scatter with the chilli flakes and cover with the remaining sauce. Top with the mozzarella and cover with a lid or foil. Bake for 10 minutes.\n\n6.Uncover the chicken and bake for a further 8–10 minutes, depending on the thickness of the breast, until cooked through. Top with the basil and serve.",
            ingredients: [
              {
                id: "ig01",
                label: "2 tbsp olive oil"
              },
              {
                id: "ig02",
                label: "2 garlic cloves, crushed"
              },
              {
                id: "ig03",
                label: "400g tin chopped tomatoes"
              },
              {
                id: "ig04",
                label: "4 chicken breasts"
              },
              {
                id: "ig05",
                label: "500g panko breadcrumbs"
              },
              {
                id: "ig06",
                label: "1 free-range egg, beaten"
              },
              {
                id: "ig07",
                label: "25g butter"
              },
              {
                id: "ig08",
                label: "pinch dried chilli flakes"
              },
              {
                id: "ig09",
                label: "100g mozzarella cheese"
              },
              {
                id: "ig10",
                label: "salt"
              }
              
            ],
            dishType: "Poultry",
            recipeImg:
              "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/chicken_parmigiana_40336_16x9.jpg"
          },
          {
            id: "03",
            title: "Potato Curry",
            description:
              "Potato is verry tasty food for the mid-weeks make it try ",
            keywords: [
              { id: "k01", label: "indian" },
              { id: "k02", label: "Potato" }
            ],
            instructions:
            "1. Heat oil in a large skillet or pan over medium heat.\n\n2. Add chopped onions and sauté until they turn golden brown\n\n3.Add ginger-garlic paste to the skillet and sauté for a minute until the raw smell disappears.\n\n4. Add chopped tomatoes and green chilies to the skillet.\n\n5. Cook until the tomatoes become soft and the mixture turns into a thick paste.\n\n6. Add turmeric powder, coriander powder, cumin powder, garam masala powder, and salt to the skillet.\n\n7. Mix well and cook the spices for a couple of minutes until fragrant.\n\n8. Add diced potatoes to the skillet and mix them well with the spice mixture until they are evenly coated.\n\n8. Pour enough water to cover the potatoes, cover the skillet, and let it simmer over low heat until the potatoes are cooked through and the curry reaches your desired consistency.\n\n9. Stir occasionally to prevent sticking and burning.\n\n10. Add more water if necessary.\n\n11. Once the potatoes are cooked and the curry reaches the desired consistency, taste and adjust the seasoning if needed.\n\n12. Garnish the potato curry with fresh coriander leaves.\n\n13. Serve hot with rice, naan, or roti.\n\n",
            ingredients: [
              {
                id: "ig01",
                label: "Potatoes (4 medium-sized, peeled and diced)"
              },
              {
                id: "ig02",
                label: "Onion (1 large, finely chopped)"
              },
              {
                id: "ig03",
                label: "Tomato (2 medium-sized, finely chopped)"
              },
              {
                id: "ig04",
                label: "Green chili (2, finely chopped, adjust according to your spice preference)"
              },
              {
                id: "ig05",
                label: "Ginger-garlic paste (1 tablespoon)"
              },
              {
                id: "ig06",
                label: "Turmeric powder (1 teaspoon)"
              },
              {
                id: "ig07",
                label: "Coriander powder (2 teaspoons)"
              },
              {
                id: "ig08",
                label: "pinch dried chilli flakes"
              },
              {
                id: "ig09",
                label: "Garam masala powder (1 teaspoon)"
              },
              {
                id: "ig10",
                label: "Cooking oil (3-4 tablespoons)"
              },
              {
                id: "ig11",
                label: "Salt (to taste)"
              },
              {
                id: "ig12",
                label: "Water (as needed)"
              },
              
            ],
            dishType: "Vegetarian",
            recipeImg:
            "https://th.bing.com/th/id/OIP.yxncWy1dX2h-L_DNu1l9rwHaHa?rs=1&pid=ImgDetMain"
          },
          {
            id: "04",
            title: "Egg fry",
            description:
              "It is a popular breakfast option in many cultures and can also be enjoyed as a light lunch or dinner.",
            keywords: [
              { id: "k01", label: "Egg Fry" },
              { id: "k02", label: "spanish" }
            ],
            instructions:
            "1. Crack the eggs into a bowl and beat them well with a fork or whisk. Add salt, black pepper, red chili powder, and turmeric powder (if using), and mix well. Set aside.\n\n2. Heat oil in a frying pan over medium heat.\n\n3. Add chopped onions to the hot oil and sauté until they turn translucent.\n\n4. Add chopped tomatoes and green chilies (if using) to the pan. Cook until the tomatoes become soft and mushy.\n\n5. Once the onions and tomatoes are cooked, reduce the heat to low and pour the beaten eggs into the pan.\n\n6. Allow the eggs to cook for a minute or two until the edges start to set.\n\n7. Using a spatula, gently push the edges of the egg mixture towards the center, allowing the uncooked eggs to flow to the edges of the pan.\n\n8. Continue cooking until the eggs are set to your desired consistency, whether you prefer them runny or fully cooked.\n\n9. Once the eggs are cooked, carefully flip them over to cook the other side for a minute or so. Be cautious not to break the eggs while flipping.\n\n10. Once both sides are cooked to your liking, remove the egg fry from the pan and transfer it to a serving plate.\n\n11. Garnish with fresh coriander leaves if desired.\n\n12. Your delicious egg fry is now ready to be served! Enjoy it with bread, rice, or any side dish of your choice.\n\n",
            ingredients: [
              {
                id: "ig01",
                label: "Eggs (2-4, depending on serving size)"
              },
              {
                id: "ig02",
                label: "Cooking oil (2 tablespoons)"
              },
              {
                id: "ig03",
                label: "Salt (to taste)"
              },
              {
                id: "ig04",
                label: "Black pepper (to taste)"
              },
              {
                id: "ig05",
                label: "Red chili powder (optional, to taste)"
              },
              {
                id: "ig06",
                label: "Turmeric powder (optional, a pinch)"
              },
              {
                id: "ig07",
                label: "Cumin seeds (optional, a pinch)"
              },
              {
                id: "ig08",
                label: "Chopped onions (1/4 cup)"
              },
              {
                id: "ig09",
                label: "Chopped tomatoes (1/4 cup)"
              },
              {
                id: "ig10",
                label: "Chopped green chilies (optional, to taste)"
              }
            ],
            dishType: "Vegetarian",
            recipeImg:
            "https://th.bing.com/th/id/OIP.9T6kVe7T_85Ou6K1REd6eQHaE7?rs=1&pid=ImgDetMain"
          },
          {
            id: "05",
            title: "prawn curry fry",
            description:
              " The tender prawns combined with the spicy and tangy curry base make it a delightful treat for seafood lovers.",
            keywords: [
              { id: "k01", label: "kerela" },
              { id: "k02", label: "prawns" }
            ],
            instructions:
            "1. Heat oil in a large skillet or pan over medium heat.\n\n2. Add chopped onions and curry leaves to the skillet. Sauté until the onions turn golden brown.\n\n3. Add ginger-garlic paste to the skillet and sauté for a minute until the raw smell disappears.\n\n4. Add chopped tomatoes and green chilies to the skillet. Cook until the tomatoes become soft and the mixture turns into a thick paste.\n\n5. Add turmeric powder, coriander powder, red chili powder, and salt to the skillet. Mix well and cook the spices for a couple of minutes until fragrant.\n\n6. Add cleaned prawns to the skillet and mix them well with the spice mixture until they are evenly coated.\n\n7. Cook the prawns for 5-7 minutes or until they turn pink and are cooked through. Be careful not to overcook them as they can become rubbery.\n\n8. If the mixture appears dry, you can add a little water to adjust the consistency of the curry.\n\n9. Once the prawns are cooked and the curry reaches the desired consistency, taste and adjust the seasoning if needed.\n\n10. Garnish the prawn curry fry with fresh coriander leaves.\n\n11. Serve hot with steamed rice, naan, or roti.\n\n",

            ingredients: [
              {
                id: "ig01",
                label: "Prawns (500g, cleaned and deveined)"
              },
              {
                id: "ig02",
                label: "Onion (1 large, finely chopped)"
              },
              {
                id: "ig03",
                label: "Tomato (2 medium-sized, finely chopped)"
              },
              {
                id: "ig04",
                label: "Green chili (2, finely chopped, adjust according to your spice preference)"
              },
              {
                id: "ig05",
                label: "Ginger-garlic paste (1 tablespoon)"
              },
              {
                id: "ig06",
                label: "Turmeric powder (1 teaspoon)"
              },
              {
                id: "ig07",
                label: "Coriander powder (2 teaspoons)"
              },
              {
                id: "ig08",
                label: "Red chili powder (1 teaspoon, adjust according to your spice preference)"
              },
              {
                id: "ig09",
                label: "Curry leaves (a handful)"
              },
              {
                id: "ig10",
                label: "Cooking oil (3-4 tablespoons)"
              },
              {
                id: "ig11",
                label: "Salt (to taste)"
              },
              {
                id: "ig12",
                label: "Water (as needed)"
              }
            ],
            dishType: "non-veg",
            recipeImg:
            "https://bing.com/th?id=OSK.b8435a62fbfcbaa6c4a0f6afcf7c9a4f",
          },
          {
            id: "06",
            title: "homemade pizza",
            description:
              "Enjoy your homemade pizza! Feel free to customize the toppings and seasonings according to your preferences.",
            keywords: [
              { id: "k01", label: "pizza" },
              { id: "k02", label: "home made" }
            ],
            instructions:
            "1. Preheat your oven to the temperature recommended for your pizza dough (usually around 450°F or 230°C).\n\n2. If using homemade dough, roll it out on a floured surface into your desired shape and thickness. If using store-bought dough, follow the package instructions for preparation.\n\n3. Transfer the rolled-out dough to a pizza stone or a lightly greased baking sheet.\n\n4. In a small bowl, mix the minced garlic with olive oil. Brush the garlic-infused olive oil over the surface of the pizza dough.\n\n5. Spread the tomato or pizza sauce evenly over the dough, leaving a small border around the edges for the crust.\n\n6. Sprinkle the shredded mozzarella cheese evenly over the sauce.\n\n7. Add your desired toppings over the cheese. If using pepperoni or other meats, ensure they are sliced thinly for even cooking.\n\n8. Sprinkle a pinch of salt, dried oregano, and dried basil over the top of the pizza for added flavor.\n\n9. Place the pizza in the preheated oven and bake for about 12-15 minutes, or until the crust is golden brown and the cheese is bubbly and melted.\n\n10. Once the pizza is done, remove it from the oven and let it cool for a few minutes before slicing.\n\n11. Optionally, sprinkle grated Parmesan cheese over the hot pizza before serving.\n\n12. Slice the pizza into wedges or squares and serve hot.\n\n",
            ingredients: [
              {
                id: "ig01",
                label: "Pizza dough (store-bought or homemade)"
              },
              {
                id: "ig02",
                label: "Tomato sauce or pizza sauce (about 1 cup)"
              },
              {
                id: "ig03",
                label: "Mozzarella cheese (shredded, about 2 cups)"
              },
              {
                id: "ig04",
                label: "Pepperoni slices or toppings of your choice (e.g., bell peppers, mushrooms, onions, olives, etc.)"
              },
              {
                id: "ig05",
                label: "Olive oil (1-2 tablespoons)"
              },
              {
                id: "ig06",
                label: "Garlic (2 cloves, minced)"
              },
              {
                id: "ig07",
                label: "Salt (to taste)"
              },
              {
                id: "ig08",
                label: "Dried oregano (1 teaspoon)"
              },
              {
                id: "ig09",
                label: "Dried basil (1 teaspoon)"
              },
              {
                id: "ig10",
                label: "Parmesan cheese (grated, for garnish)"
              }
            ],
            dishType: "Vegetarian",
            recipeImg:
            "https://media-cdn.tripadvisor.com/media/photo-s/13/fa/25/15/homemade-pizza.jpg",
          },
          
          
        ]
      });
    },
    routes() {
      this.namespace = "api";
      this.get("/recipes", (schema, request) => schema.db.recipes);
      this.get("/recipe.id/:id", (schema, request) => {
        let id = request.params.id;
        return schema.recipes.find(id);
      });
      this.get("/recipe.title", (schema, request) => schema.recipes.all());
      this.get("/recipe.title/:title", (schema, request) => {
        let title = request.params.title;
        return schema.recipes.where(recipe =>
          recipe.title.toLowerCase().includes(title.toLowerCase())
        );
      });
      this.post("/recipes", (schema, request) => {
        return schema.recipes.create(JSON.parse(request.requestBody));
      });
    }
  });
};
