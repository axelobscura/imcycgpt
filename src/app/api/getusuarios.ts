import { NextResponse } from "next/server";
import { query } from '../../../lib/db'

export async function GET(request: Request) {
  try {
    const results = await query(`
      SELECT * FROM usuarios ORDER BY id ASC
    `)
    return NextResponse.json(results);
  } catch (e: any) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}