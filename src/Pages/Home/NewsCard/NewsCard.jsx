import moment from 'moment';
import React from 'react';
import Rating from 'react-rating';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {

  const { _id, title, details, image_url, author, rating, total_view } = news
  return (
    <Card className=" mb-5">
      <div class="card-header d-flex align-items-center ">
        <Image style={{ height: '40px' }} src={author.img} roundedCircle />
        <div className='ps-2 flex-grow-1 '>
          <p className='mb-0'>{author?.name}</p>
          <p>{moment(author?.published_date).format('yyy-MM-D')}</p>
        </div>
        <FaRegBookmark className='me-2'></FaRegBookmark> <FaShareAlt></FaShareAlt>
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}...<Link to={`/news/${_id}`}>Read More...</Link></>}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex align-items-center">
        <div className='flex-grow-1 align-items-center '>
          <Rating className='text-warning'
            placeholderRating={rating.number}
            readonly
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          >
          </Rating>
          <span className='ms-1 '>{rating?.number}</span>
        </div>
        <div>
          <FaEye></FaEye> {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;