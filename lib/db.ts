import mysql from 'serverless-mysql'

export const db = mysql({
  config: {
    host: process.env.MYSQL_HOST || 'localhost',
    database: process.env.MYSQL_DATABASE || 'localhost',
    user: process.env.MYSQL_USERNAME || 'localhost',
    password: process.env.MYSQL_PASSWORD || 'localhost',
  },
})

export async function query(
  q: string,
  values: (string | number)[] | string | number = []
) {
  try {
    const results = await db.query(q, values)
    await db.end()
    return results
  } catch (e: any) {
    throw Error(e.message)
  }
}