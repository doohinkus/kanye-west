import { rest } from 'msw'

export const handlers = [
  rest.get('https://api.kanye.rest', (req, res, ctx) => {
    // const { data } = req.body
    const query = req.url.searchParams
    const format = query.get("format");
    // console.log(res, format)
    return res(
      ctx.text("some weird text"),
      ctx.json({
       data: "some weird text"
      })
    )
  }),
]