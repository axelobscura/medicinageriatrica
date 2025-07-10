import { NextResponse } from "next/server";
import { query } from '../../../../lib/db'

export async function GET() {
  try {
    const results = await query(`
      SELECT * FROM medicinageriatrica ORDER BY id ASC
    `)
    return NextResponse.json(results);
  } catch (e: unknown) {
    const errorMessage = e instanceof Error ? e.message : String(e);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}