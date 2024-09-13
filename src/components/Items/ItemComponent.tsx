import './Item.scss'
interface IProps {
    id:number,
    image: string,
    name: string,
    newPrice: number,
    oldPrice: number
}
const ItemComponent: React.FC<IProps> = (props) => {
    return (
        <div className='item'>
            <img src={props.image} alt="" />
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    ${props.newPrice}
                </div>
                <div className="item-price-old">
                    ${props.oldPrice}
                </div>
            </div>
        </div>
    )
}

export default ItemComponent
