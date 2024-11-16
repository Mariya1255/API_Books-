import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json({
    message: "GET request successful",
    data: [
      { id: 1, name: "Book A", author: "Author A" },
      { id: 2, name: "Book B", author: "Author B" },
    ],
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, age } = body;

  return NextResponse.json({
    message: `User ${name} created with age ${age}.`,
  });
}

export async function PUT(request: NextRequest) {
  const body = await request.json();
  const { id, name, age } = body;

  return NextResponse.json({
    message: `User ${id} updated to ${name}, age ${age}.`,
  });
}

export async function DELETE(request: NextRequest) {
  const body = await request.json();
  const { id } = body;

  return NextResponse.json({
    message: `User ${id} deleted.`,
  });
}
