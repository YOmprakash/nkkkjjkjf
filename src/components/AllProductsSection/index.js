import {Component} from 'react'

import './index.css'

class AllProductsSection extends Component {
  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    const apiUrl =
      'https://s3.amazonaws.com/roxiler.com/product_transaction.json'

    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data)
  }

  render() {
    return (
      <div className="all-products-section">
        <h1>Products</h1>
      </div>
    )
  }
}

export default AllProductsSection
