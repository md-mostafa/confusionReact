import React, { Component } from 'react';
import {Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle, ListGroupItem, ListGroup} from 'reactstrap';
class DishDetailComponent extends Component {
    constructor(props){
        super(props);
    }

    formatDate(dateStr){
        return Intl.DateTimeFormat('en-Us', {
            year: 'numeric',
            month: 'short',
            day: '2-digit'
        }).format(new Date(dateStr));
    }
    renderComments(comments){
        if(comments !=null){
            return (
                <div>
                    <h4>Comments</h4>
                    {comments.map((Comment) => {
                        return (
                            <div>
                                <ul className="list-unstyled">
                                    <li key={Comment.id}> {Comment.comment}</li>
                                    <li> -- {Comment.author}, {this.formatDate(Comment.date)}</li>
                                </ul>
                            </div>
                        )
                })}
                </div>
            );
        }else{
            return (
                <div></div>
            );
        }
       
    }

    renderDish(dish) {
        return (
            <Card>
                <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                <CardBody>
                    <CardText>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardText>
                </CardBody>
            </Card>
        )
    }
    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                   {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish.comments)}
                </div>
            </div>
        )
    }
}

export default DishDetailComponent;