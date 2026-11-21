export async function onRequestGet() {
  const origin = "https://pub-167cbafc514644d1ab68885de2a7ce4d.r2.dev/file_000000001968820e9ead8287d880d7fc.png";
  const response = await fetch(origin, { headers: { "Accept": "image/png" } });
  if (!response.ok) return new Response("Imagen no disponible", { status: 502 });
  return new Response(response.body, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "X-Content-Type-Options": "nosniff",
      "Access-Control-Allow-Origin": "*"
    }
  });
}
