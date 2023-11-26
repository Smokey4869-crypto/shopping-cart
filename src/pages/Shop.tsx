import shopItems from '../data/items.json'
import { Row, Col } from 'react-bootstrap'
import ShopItem from '../components/ShopItem'

const Shop = () => {
  return (
    <>
        <h1 className='mb-3'>Shop</h1>
        <Row md={2} xs={1} lg={3} className='g-3'>
            {
                shopItems. map((item) => (
                    <Col key={item.id}>
                        <ShopItem {...item} />
                    </Col>
                ))
            }
        </Row>
    </>
  )
}

export default Shop