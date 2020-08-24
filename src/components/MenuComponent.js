import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardImgOverlay, CardText,
CardTitle} from 'reactstrap';
import DishDetailComponent from './DishdetailComponent';

class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            seletedDish: null
        }
        console.log('Menu Components Constructor is invoked');
    }

    componentDidMount() {
        console.log('Menu Component componentDidMount is InVoked');
    }

    onDishSelect(dish){
        this.setState({seletedDish : dish});
    }
    renderDish(dish){
        if(dish !=null) {
            return (
                <DishDetailComponent dish={dish} />
            
            );
        }else{return (<div></div>);}
    }
    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
               
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=>this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        console.log('Menu Components render is invoked');
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                {this.renderDish(this.state.seletedDish)}
                
            </div>

        );
    }
}

export default Menu;