import { Params } from "next/dist/server/request/params";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: {Slug: string } }
) {
  const { Slug } = params;

  if (Slug) {
    return NextResponse.json({
      message: `You requested data for book: ${Slug}`,
      data: { id: 1, name: `Book ${Slug}`, author: "Author A" },
    });
  }

  return NextResponse.json({ message: `Dynamic API Route for Slug: ${Slug}` });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, author } = body;

  // Simulate saving the book to a database
  const newBook = {
    id: Math.floor(Math.random() * 1000),
    name,
    author,
  };

  return NextResponse.json({
    message: "New book created successfully!",
    book: newBook,
  });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { Slug: string } }
) {
  const { Slug } = params;
  const body = await request.json();
  const { name, author } = body;

  return NextResponse.json({
    message: `Book with slug ${Slug} updated.`,
    updatedData: { name, author },
  });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { Slug: string } }
) {
  const { Slug } = params;

  return NextResponse.json({
    message: `Book with slug ${Slug} deleted.`,
  });
}
