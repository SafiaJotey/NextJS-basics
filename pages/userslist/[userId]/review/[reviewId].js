import { useRouter } from 'next/router';
import React from 'react';

const Review = () => {
  const router = useRouter();
  // console.log(router.query);
  const { userId, reviewId } = router.query;
  return (
    <div>
      <p>
        Review from: {userId} is {reviewId}
      </p>
    </div>
  );
};

export default Review;
