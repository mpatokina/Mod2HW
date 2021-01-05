class App extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      stateGroceryItems: groceryItems    
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

    }
    


    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value })
      }
    
    
    handleSubmit = (event) =>{
        event.preventDefault();
        const newItem = {
          item: this.state.item,
          brand: this.state.brand,
          units: this.state.units,
          quantity: this.state.quantity,
          isPurchased: this.state.isPurchased
        }
        this.setState({
          items: [newItem, ...this.state.items],
          item: '',
          brand: '',
          units: '',
          quantity: 0,
          isPurchased: false
        })
    }
    
    addToCart(item) {
      this.setState( { cartItems: [item, ...this.state.cartItems]})
    }

    render() {
        return (
          <div id="main">
            <h1>React Grocery</h1>
          <div className='newProduct'>
          <form 
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          >
          <h2>Please add new item to the list</h2>
        <label htmlFor='item'>Item: </label>
        <input type='item' value={this.state.item} onChange={this.handleChange} id='item' />
        <br />
        <label htmlFor='brand'>Brand: </label>
        <input type='brand' value={this.state.brand} onChange={this.handleChange} id='brand' />
        <br />
        <label htmlFor='brand'>Units: </label>
        <input type='units' value={this.state.units} onChange={this.handleChange} id='units' />
        <br />
        <label htmlFor='quantity'>Quantity: </label>
        <input type='quantity' value={this.state.quantity} onChange={this.handleChange} id='quantity' />
        <br />
        <label htmlFor='isPurchased'>IsPurchased: </label>
        <input type='isPurchased' value={this.state.isPurchased} onChange={this.handleChange} id='isPurchased' />
        <br />
        <input type="submit" value="Add to Grocery List" />
                        
      </form>
      </div>

      <div className='preview'>
        <ul>
        <li>
        <h2>new item</h2>
        <h5><span>item: </span>{this.state.item}</h5>
        <h5><span>brand: </span>{this.state.brand}</h5>
        <h5><span>units: </span>{this.state.units}</h5>
        <h5><span>quantity: </span>{this.state.quantity}</h5>
        <h5><span>isPurchased: </span>{this.state.isPurchased}</h5>
        
        </li>
        </ul>
      </div>
            
                <div>
                <h1>Grocery List</h1>
                
            <ul>
                {
                    
                    this.state.stateGroceryItems.map((item => <li> 
                   { item.isPurchased ? '' : <h2> { item.item } </h2>} 
                   { item.isPurchased ? '' : <h5><span> item: </span> { item.item } </h5> } 
                   { item.isPurchased ? '' : <h5><span> brand: </span> { item.brand } </h5> }
                   { item.isPurchased ? '' : <h5><span> units: </span> { item.units } </h5> }
                   { item.isPurchased ? '' : <h5><span> quantity: </span> { item.quantity } </h5> }
                   { item.isPurchased ? '' : <h5><span> isPurchased: </span> { item.isPurchased } </h5> }
                   </li>)
                   )
                }
            </ul>
            <br />
            </div>
            
            </div>
            
               )
    }

}
ReactDOM.render(<App />, document.getElementById('container'));