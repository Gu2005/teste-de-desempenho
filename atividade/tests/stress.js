import http from 'k6/http';

export const options = {
  stages: [
    { duration: '2m', target: 200 },
    { duration: '2m', target: 500 },
    { duration: '2m', target: 1000 },
  ],
};

export default function () {
  const payload = JSON.stringify({
    userId: 1,
    productId: 1,
    quantity: 1,
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.post(
    'http://localhost:3000/checkout/crypto',
    payload,
    params
  );
}