export async function GET(request) {
  return new Response("Bot is connected and ready!");
}

export async function POST(request) {
  // بدنه‌ی درخواست تلگرام رو بخون
  const body = await request.json();
  console.log("Telegram update:", body);

  // جواب ساده برگردون
  return new Response("Bot is connected and ready!");
}export async function GET(request) {
  return new Response("Bot is connected and ready!");
}

export async function POST(request) {
  return new Response("Bot is connected and ready!");
}
