import React from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
 
    
    function RenderComments({comments}){
       
        if(comments !=null){
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((Comment) => {
                            return (
                                <li key={Comment.id}>
                                    <p>{Comment.comment}</p>
                                    <p>-- {Comment.author}, {new Intl.DateTimeFormat('en-US', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: '2-digit'
                                    }).format(new Date(Date.parse(Comment.date)))}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            );
        }else{
            return (
                <div></div>
            );
        }
       
    }

    function RenderDish({dish}) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
    

    const DishDetailComponent = (props) => {
       
        if(props.dish!=null){
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr/>
                        </div>
                    </div>
                     <div className="row">
                         <RenderDish dish={props.dish} />
                         <RenderComments comments={props.comments} />
                     </div>
                </div>
             )
        }else{
            return (
                <div></div>
            )
        }
        
    }


export default DishDetailComponent;