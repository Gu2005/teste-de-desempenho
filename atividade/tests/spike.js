import http from 'k6/http';

export const options = {
  stages: [
    { duration: '30s', target: 10 },
    { duration: '10s', target: 300 },
    { duration: '1m', target: 300 },
    { duration: '10s', target: 10 },
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
    'http://localhost:3000/checkout/simple',
    payload,
    params
  );
}