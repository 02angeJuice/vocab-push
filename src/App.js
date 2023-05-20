import React from 'react'
import DiceRoll from './DiceRoll'
import RandomPokemon from './RandomPokemon'
import Greeter from './Greeter'
import Die from './Die'
import { ListPicker } from './ListPicker'
import Heading from './Heading'
import ColorList from './ColorList'
// import Navbar from './NavContainer'
import Slots from './Slots'
import ShoppingList from './ShoppingList'
import PropertyList from './PropertyList'
import Clicker from './Clicker'
import Form from './Form'
import Couter from './Couter'
import Toggler from './Toggler'
import ToggleCounter from './ToggleCounter'
import ColorBoxes from './ColorBoxes'

const data = [
  { _id: 1, item: 'eggs', qty: 12, completed: false },
  { _id: 2, item: 'milk', qty: 6, completed: true },
  { _id: 3, item: 'chiken breasts', qty: 4, completed: false },
  { _id: 4, item: 'carrots', qty: 6, completed: true },
]

const properties = [
  { _id: 21, name: 'Ready Player One', rating: 9.9, price: 400 },
  { _id: 22, name: 'Among Us', rating: 6.9, price: 320 },
  { _id: 23, name: 'Star War', rating: 9.5, price: 250 },
  { _id: 24, name: 'Toy Story', rating: 7, price: 300 },
  { _id: 25, name: 'Jojo', rating: 7.5, price: 180 },
  { _id: 26, name: 'Doraemon', rating: 8, price: 200 },
]

const colors = [
  '#E53935',
  '#E91E63',
  '#9C27B0',
  '#673AB7',
  '#3F51B5',
  '#2196F3',
  '#03A9F4',
  '#00BCD4',
  '#009688',
  '#4CAF50',
  '#8BC34A',
  '#CDDC39',
  '#FFEB3B',
  '#FFC107',
  '#FF9800',
  '#FF5722',
]

export default function App() {
  let fruit = ['Apple', 'Orange', 'Mango', 'Strawberry', 'Water Melon']
  let items = ['👻', '💩', '🤡', '👽']

  return (
    <>
      {/* <Navbar /> */}
      <div className="container mx-auto pt-4">
        {/* <Toggler /> */}
        {/* <ToggleCounter /> */}

        <ColorBoxes colors={colors} />

        {/* <Form /> */}
        {/* <Clicker message="HI!!!!" buttonText="Click Me" />
        <Clicker message="Please Stop Cliking Me!!" buttonText="do not click" /> */}

        {/* <Couter /> */}

        {/* <PropertyList props={properties} />

        <ShoppingList items={data} /> */}
        {/* 
        <Heading color="magenta" text="welcome" fontSize="80px" />
        <Heading color="teal" text="nice" fontSize="60px" /> */}

        {/* <Slots items={items} /> */}

        {/* <DiceRoll />
        <DiceRoll />
        <DiceRoll />

        <ColorList colors={['red', 'pink', 'teal', 'purple']} />
        <ColorList colors={['orange', 'grey', 'magenta', 'aqua']} /> */}

        {/* <RandomPokemon />
      <Greeter fruit={fruit} />
      <Greeter name="Bobo" from="Samut Prakan" />
      <Die size={5} />
      <Die size={10} />
      <Die />

      <ListPicker test={[1, 2, 3, 4]} />
      <ListPicker test={fruit} />
      <ListPicker test={['a', 'b', 'c', 'd']} /> */}
      </div>
    </>
  )
}
