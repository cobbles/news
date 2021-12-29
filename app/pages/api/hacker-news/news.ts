// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as http from "http"
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  by: string,
  descendants: number,
  kids: number[],
  score: number,
  time: number,
  title: string,
  type: string,
  url: string
}

type Error = {
  message: string | undefined
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[] | Error>
) {
  switch (req.method) {
    case "GET":
      const data = await getArticles();
      res.status(200).json(data);
      break;
    default:
      res.status(404).json({ message: http.STATUS_CODES[404] })
  }
}

async function getArticles(): Promise<Data[]> {
  const result: Data[] =
    await (await fetch("https://hacker-news.firebaseio.com/v0/topstories.json"))
      .json();

  let articles: Promise<Data>[] = [];
  for (let i = 0; i < 30; i++) {
    articles.push(
      fetch(`https://hacker-news.firebaseio.com/v0/item/${result[i]}.json`)
        .then(res =>
          res.json().then(res => {
            return {
              by: res.by,
              descendants: res.descendants,
              kids: res.kids,
              score: res.score,
              time: res.time,
              title: res.title,
              type: res.type,
              url: res.url,
            };
          })
        )
    )
  }

  return await Promise.all(articles);
}