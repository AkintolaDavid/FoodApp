
import MealItem from './MealItem/MeanItem';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css'
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];
  const AvailableMeals=()=>{
    return(
      <section className={classes.meals}>
<Card>
  <ul>
    {DUMMY_MEALS.map((data)=>(
    <MealItem 
    key={data.id}
    id={data.id}
    name={data.name}
    description={data.description}
    price={data.price}></MealItem>
    ))}
  </ul>
</Card>
      </section>
    )
  }
  export default AvailableMeals
// return(
//     <section className={classes.meals}>
//        <Card>
           
//        <ul>
//             {DUMMY_MEALS.map((data)=>(
//                 <MealItem key={data.id}
//                 id={data.id}
//                 name={data.name}
//                 description={data.description}
//                 price={data.price}></MealItem>
//             ))}
//         </ul>
//        </Card>
//     </section>
// )
// }
// export default AvailableMeals