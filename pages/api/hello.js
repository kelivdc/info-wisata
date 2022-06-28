// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const categories = [
    {id: 1, name: 'Wisata', slug: 'wisata'},
    {id: 2, name: 'Cafe', slug: 'cafe'},
  ]
  res.status(200).json(categories)
}
