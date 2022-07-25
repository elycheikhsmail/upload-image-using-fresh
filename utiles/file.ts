export async function fileUpload(file: File): Promise<string> {
  const arrBuffer = await file.arrayBuffer();
  const uinteArrBuffer = new Uint8Array(arrBuffer);
  const fileName = `${Date.now()}-${file.name}`;
  // here you store filein your file system or in bucket
  await Deno.writeFile(`${Deno.cwd()}/media/${fileName}`, uinteArrBuffer, {
    create: true,
  });
  return fileName;
}
