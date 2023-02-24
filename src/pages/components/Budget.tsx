function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

interface Props {
  color: string;
  name: string;
  amount: string;
}

export default function Budget({color, name, amount} : Props) {
    return (
      <div className={classNames(
        "flex-row w-48 p-3 mt-5 ml-3 text-white prose rounded-md"
        , color)}>
          <h2 className="text-white">{name}</h2>
          <p>{amount} PLN</p>
      </div>
    )
  }