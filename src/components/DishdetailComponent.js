import React, { Component } from 'react';
import {Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle, ListGroupItem, ListGroup} from 'reactstrap';
class DishDetailComponent extends Component {
    constructor(props){
        super(props);
    }

    renderComments(comments){
        if(comments !=null){
            return (
                comments.map((Comment)=>{
                    var d =  Date.parse(Comment.date)
                    var da = new Date(d);
                    return(
                         <div>
                             <li className="list-unstyled">{Comment.comment}</li>
                             <li className="list-unstyled">--{Comment.author}, {da.toDateString()}</li>
                         </div>
                    );
                })
            );
        }else{
            return (
                <div></div>
            );
        }
       
    }
    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                   <Card>
                        <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody>
                            <CardText>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                            </CardText>
                        </CardBody>
                   </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {this.renderComments(this.props.dish.comments)}
                </div>
            </div>
        )
    }
}

export default DishDetailComponent;