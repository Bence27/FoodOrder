import { useEffect } from "react";
import MealCard from "../MealCard/MealCard.jsx";
import { getMeals } from "../../http.js";
import { useState } from "react";

export default function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function loadMeals() {
      try {
        const meals = await getMeals();
        setMeals(meals);
      } catch (error) {
        console.log(error);
      }
    }
    loadMeals();
  }, []);
  return (
    <div id="meals">
      {meals.map((meal) => (
        <MealCard key={meal.id} meal={meal} />
      ))}
    </div>
  );
}
