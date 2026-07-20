type InquiryRequest = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let data: InquiryRequest;

  try {
    data = (await request.json()) as InquiryRequest;
  } catch {
    return Response.json({ error: "Invalid inquiry." }, { status: 400 });
  }

  if (
    !data.name?.trim() ||
    !data.email ||
    !emailPattern.test(data.email) ||
    !data.message?.trim() ||
    data.message.trim().length < 10
  ) {
    return Response.json(
      { error: "Please add your name, email, and a short message." },
      { status: 400 }
    );
  }

  return Response.json({ ok: true }, { status: 201 });
}
