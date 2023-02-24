import Balance from "./components/Balance";
import Budget from "./components/Budget";

const elements = [  
  {
    color: 'bg-amber-200',
    name: 'home',
    amount: '200'
  },
  {
    color: 'bg-lime-200',
    name: 'education',
    amount: '400'
  },
  {
    color: 'bg-sky-200',
    name: 'rent',
    amount: '55'
  },
  {
    color: 'bg-pink-200',
    name: 'entertainment',
    amount: '124'
  }]

export default function Home() {
  return (
    <>
      <Balance/>
      <div className="flex">
        {elements.map((item) => (
          <Budget key={item.color} color={item.color} name={item.name} amount={item.amount}/>
        ))}
      </div>
    </>
  )
}
