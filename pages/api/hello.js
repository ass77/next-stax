// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    { id: 1,name: "John Doe", age: 42 },
    { id:2, name: "Jane Doe", age: 34 },
    { id:3, name: "Jack Doe", age: 32 },
    { id: 4,name: "Jill Doe", age: 24 },
  ]);
}
